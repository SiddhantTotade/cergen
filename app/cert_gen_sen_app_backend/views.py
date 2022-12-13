from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from django.http import JsonResponse
from .models import *
from .serializers import *
import pandas as pd
import glob
import os
import cv2
from rest_framework.parsers import JSONParser,FileUploadParser
from tablib import Dataset
from .resources import *
# Create your views here.

# Getting all events
class EventsOperations(APIView):
    def get(self, request):
        all_events = Event.objects.all()

        if all_events:
            event_serializer_data = EventSerializer(all_events,many=True)
            return JsonResponse(event_serializer_data.data,safe=False)
        return JsonResponse("No event data",safe=False)
    
    def post(self, request):
        event_serialized_data = EventSerializer(data=request.data)
        print(event_serialized_data)

        if event_serialized_data.is_valid():
            event_serialized_data.save()
            return JsonResponse("Event added successfully",safe=False)
        return JsonResponse("Failed to add event",safe=False)
    
    def delete(self, request, slug):
        event_by_slug = Event.objects.get(slug = slug)
        event_by_slug.delete()
        return JsonResponse("Event deleted successfully",safe=False)


# Getting data from csv and uploading to database
class UploadParticipant(APIView):
    def get(self, request):
        all_participants = Participant.objects.all()

        if all_participants:
            participant_serializer = ParticipantSerializer(all_participants,many=True)
            return JsonResponse(participant_serializer.data,safe=False)
        return JsonResponse("No participant data",safe=False)

    def post(self,request):
        participant_resource = ParticipantResource()
        dataset = Dataset()
        new_participant = request.FILES['xlsx_file']
        print(new_participant)

        if not new_participant.name.endswith('xlsx'):
            return JsonResponse("Wrong File Format",safe=False)

        imported_data = dataset.load(new_participant.read(),format='xlsx')

        for data in imported_data:
            value = Participant(data[0],data[1],data[2],data[3],data[4])
            value.save()
        return JsonResponse("Participant uploaded successfully")


# Filtering Events by slug    
class FilteredEvent(APIView):
    def get(self, request, slug):
        event = Event.objects.filter(slug=slug)

        if event:
            event_serializer = EventSerializer(event,many=True)
            return JsonResponse(event_serializer.data,safe=False)
        return JsonResponse("No Data",safe=False)

    
# Certificate directory cleaner
def cleanUp():
    files = glob.glob('app/cert_gen_sen_app_backend/Certificate Data/generated-certificates/*')
    for f in files:
        os.remove(f)

        
# Ceertificate generator
def generateCertificate(request):
    cleanUp()

    from_date = []
    to_date = []
    df = pd.read_excel('./cert_gen_sen_app_backend/certificate_data/Contact Information.xlsx', index_col=None)
    key = df['Full Name'].tolist()
    from_dates = df['Event From Date'].tolist()
    to_dates = df['Event To Date'].tolist()
    
    for date in from_dates:
        from_date.append(str(date.date()))

    for index, names in enumerate(key):
        template = cv2.imread("./cert_gen_sen_app_backend/certificate_data/certificate-generator/certificate-template.jpg")
        signature = cv2.imread("./cert_gen_sen_app_backend/certificate_data/certificate-generator/Galvin Belson.png", -1)

        x_offset = y_offset = 500

        y1, y2 = y_offset, y_offset + signature.shape[0]
        x1, x2 = x_offset, x_offset + signature.shape[1]

        alpha_s = signature[:, :, 3] / 255.0
        alpha_l = 1.0 - alpha_s

        for c in range(0, 3):
            template[y1:y2, x1:x2, c] = (
                alpha_s * signature[:, :, c] + alpha_l * template[y1:y2, x1:x2, c])

        cv2.putText(template, names, (500, 405),
                    cv2.FONT_HERSHEY_SCRIPT_COMPLEX, 2, (0, 0, 255), 1, cv2.LINE_AA)
        cv2.putText(template, from_date[index], (782, 552),
                    cv2.FONT_HERSHEY_SCRIPT_COMPLEX, 1, (0, 0, 255), 1, cv2.LINE_AA)
        cv2.imwrite(f'./cert_gen_sen_app_backend/certificate_data/generated-certificates/{names}.jpg', template)
        # print(f'Processing {index + 1} / {len(key)}')
    return JsonResponse("Certificate Generated",safe=False)