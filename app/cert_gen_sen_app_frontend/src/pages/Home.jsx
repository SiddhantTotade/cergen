import React from 'react'
import homeCss from './styles/home.css'

export const Home = () => {
    return (
        <>
            <div>
                <div className=' w-96 absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <svg width="390.1" height="200.9" viewBox="0 0 253.6 80.601" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#fff" strokeWidth="0.25mm" fill="none" className="stroke:{#0077ff} stroke-1 fill:none" ><path d="M 45.8 64.731 A 59.389 59.389 0 0 1 42.7 68.65 A 40.314 40.314 0 0 1 35.118 75.528 A 36.368 36.368 0 0 1 32.2 77.35 Q 26.4 80.6 19.7 80.6 A 23.135 23.135 0 0 1 14.857 80.122 Q 11.665 79.439 9.229 77.781 A 14.045 14.045 0 0 1 8.25 77.05 A 19.969 19.969 0 0 1 2.074 68.248 A 23.699 23.699 0 0 1 1.95 67.9 Q 0 62.3 0 56.2 A 54.947 54.947 0 0 1 2.253 40.8 A 61.196 61.196 0 0 1 2.4 40.3 Q 4.8 32.3 8.95 25.05 A 69.948 69.948 0 0 1 16.413 14.372 A 63.02 63.02 0 0 1 18.4 12.15 A 50.917 50.917 0 0 1 24.526 6.562 A 40.875 40.875 0 0 1 29.55 3.25 A 27.378 27.378 0 0 1 35.002 0.918 A 21.221 21.221 0 0 1 41.1 0 A 14.07 14.07 0 0 1 43.93 0.269 Q 46.147 0.724 47.75 1.95 Q 49.82 3.533 50.21 6.927 A 14.68 14.68 0 0 1 50.3 8.6 A 19.997 19.997 0 0 1 50.109 11.281 Q 49.863 13.097 49.3 15.15 Q 48.3 18.8 46.6 22.15 A 29.138 29.138 0 0 1 45.046 24.861 Q 44.003 26.463 42.85 27.7 Q 41.521 29.127 40.171 29.628 A 4.196 4.196 0 0 1 38.7 29.9 A 2.848 2.848 0 0 1 37.759 29.733 A 3.996 3.996 0 0 1 37.05 29.4 A 2.835 2.835 0 0 1 36.355 28.81 Q 36.096 28.513 35.867 28.118 A 6.344 6.344 0 0 1 35.6 27.6 A 42.198 42.198 0 0 0 36.774 26.206 Q 37.794 24.944 38.95 23.35 Q 40.8 20.8 42.5 17.95 Q 44.2 15.1 45.25 12.35 Q 46.3 9.6 46.3 7.5 A 5.677 5.677 0 0 0 46.125 6.052 A 4.193 4.193 0 0 0 45.15 4.25 A 3.435 3.435 0 0 0 43.812 3.375 Q 42.823 3 41.4 3 Q 37.705 3 33.751 5.585 A 24.037 24.037 0 0 0 32.45 6.5 Q 28.091 9.782 23.995 15.128 A 63.288 63.288 0 0 0 23.45 15.85 Q 19.1 21.7 15.6 28.9 Q 12.1 36.1 10.05 43.6 A 58.981 58.981 0 0 0 8.339 52.26 A 48.295 48.295 0 0 0 8 57.9 Q 8 62.8 9.4 67.25 A 16.964 16.964 0 0 0 11.382 71.499 A 14.368 14.368 0 0 0 13.95 74.45 A 10.92 10.92 0 0 0 19.156 76.932 A 15.422 15.422 0 0 0 22.1 77.2 A 19.891 19.891 0 0 0 29.693 75.65 A 25.27 25.27 0 0 0 32.65 74.2 A 37.981 37.981 0 0 0 40.62 68.071 A 44.036 44.036 0 0 0 42.3 66.3 A 41.762 41.762 0 0 0 46.079 61.459" id="cergen__svg" vectorEffect="scaling-stroke" /><path d="M 46.079 61.459 A 20.368 20.368 0 0 1 46.512 59.48 A 27.753 27.753 0 0 1 48.05 55.2 A 39.353 39.353 0 0 1 54.021 45.835 A 43.151 43.151 0 0 1 54.05 45.8 A 36.04 36.04 0 0 1 59.561 40.53 A 31.684 31.684 0 0 1 62.3 38.65 A 20.295 20.295 0 0 1 66.219 36.77 A 15.115 15.115 0 0 1 71.2 35.9 Q 73.5 35.9 75.45 37.1 A 3.578 3.578 0 0 1 76.85 38.775 Q 77.396 40.025 77.4 41.971 A 14.038 14.038 0 0 1 77.4 42 A 12.531 12.531 0 0 1 75.323 48.888 A 15.179 15.179 0 0 1 75.15 49.15 Q 72.9 52.5 69.25 55.1 Q 65.6 57.7 61.25 59.35 A 33.683 33.683 0 0 1 54.349 61.186 A 30.478 30.478 0 0 1 52.6 61.4 A 23.767 23.767 0 0 0 52.389 62.611 A 19.875 19.875 0 0 0 52.3 63.3 A 16.544 16.544 0 0 0 52.214 64.386 A 13.732 13.732 0 0 0 52.2 65 Q 52.2 66.5 52.55 68 Q 52.9 69.5 53.8 70.75 A 5.787 5.787 0 0 0 55.692 72.418 A 7.101 7.101 0 0 0 56.25 72.7 A 7.298 7.298 0 0 0 57.809 73.191 Q 58.552 73.341 59.41 73.384 A 14.017 14.017 0 0 0 60.1 73.4 Q 64.4 73.4 68.6 70.95 Q 72.8 68.5 76.4 64.5 A 42.327 42.327 0 0 0 81.308 57.841 M 58.216 57.347 A 63.326 63.326 0 0 0 59.2 56.85 Q 62.6 55.1 65.75 52.7 A 25.888 25.888 0 0 0 69.373 49.378 A 22.105 22.105 0 0 0 70.95 47.4 A 11.479 11.479 0 0 0 72.504 44.378 A 9.744 9.744 0 0 0 73 41.3 A 4.876 4.876 0 0 0 72.961 40.662 Q 72.875 40.013 72.6 39.6 A 1.112 1.112 0 0 0 72.139 39.217 Q 71.754 39.035 71.14 39.006 A 5.098 5.098 0 0 0 70.9 39 A 7.193 7.193 0 0 0 68.505 39.434 Q 67.562 39.766 66.577 40.353 A 14.496 14.496 0 0 0 65.8 40.85 A 23.1 23.1 0 0 0 62.826 43.295 A 30.237 30.237 0 0 0 60.6 45.7 Q 58.1 48.7 56.1 52.3 A 34.613 34.613 0 0 0 53.823 57.25 A 30.043 30.043 0 0 0 53.1 59.5 Q 55.403 58.733 58.216 57.347 Z M 81.479 60.861 A 38.699 38.699 0 0 1 79.07 64.399 A 34.54 34.54 0 0 1 76.85 67 A 34.719 34.719 0 0 1 71.389 71.739 A 29.735 29.735 0 0 1 67.85 73.85 A 22.673 22.673 0 0 1 61.459 76.004 A 20.349 20.349 0 0 1 58 76.3 A 17.65 17.65 0 0 1 54.486 75.973 Q 52.44 75.557 50.876 74.612 A 9.065 9.065 0 0 1 48.85 72.95 A 11.624 11.624 0 0 1 45.823 65.531 A 15.13 15.13 0 0 1 45.8 64.731" id="cergen__svg" vectorEffect="scaling-stroke" /><path d="M 117.501 56.078 L 117.4 56 A 15.348 15.348 0 0 1 117.072 56.745 Q 116.183 58.626 114.6 60.75 Q 112.7 63.3 110.3 65.6 A 30.495 30.495 0 0 1 108.786 66.96 A 25.453 25.453 0 0 1 105.35 69.4 A 11.989 11.989 0 0 1 103.225 70.399 A 8.545 8.545 0 0 1 100.4 70.9 A 4.5 4.5 0 0 1 99.979 70.881 A 3.579 3.579 0 0 1 98.3 70.3 A 1.557 1.557 0 0 1 98.147 70.184 Q 97.4 69.54 97.4 67.9 Q 97.4 66.522 97.939 64.843 A 18.056 18.056 0 0 1 98.65 63 Q 99.9 60.2 101.15 57.1 Q 102.39 54.025 102.4 51.047 A 14.386 14.386 0 0 0 102.4 51 A 13.119 13.119 0 0 0 102.4 50.921 Q 102.393 49.691 102.154 48.633 A 7.414 7.414 0 0 0 100.85 45.75 Q 99.3 43.7 97.3 42.25 A 548.033 548.033 0 0 1 96.747 41.848 Q 95.082 40.639 93.75 39.65 Q 92.2 38.5 92.2 37.1 A 0.412 0.412 0 0 1 92.201 37.074 Q 92.219 36.806 92.563 35.854 A 35.513 35.513 0 0 1 92.75 35.35 A 23.542 23.542 0 0 0 92.885 34.985 Q 93.196 34.124 93.274 33.665 A 1.615 1.615 0 0 0 93.3 33.4 A 4.206 4.206 0 0 0 93.295 33.206 Q 93.273 32.73 93.15 31.95 A 1.55 1.55 0 0 0 93.121 31.808 Q 92.967 31.206 92.364 31.052 A 1.888 1.888 0 0 0 91.9 31 A 0.926 0.926 0 0 0 91.611 31.052 Q 91.012 31.251 90.054 32.207 A 16.95 16.95 0 0 0 89.4 32.9 A 6.425 6.425 0 0 0 87.97 35.584 A 8.649 8.649 0 0 0 87.7 37.8 A 3.89 3.89 0 0 0 87.7 37.844 A 3.27 3.27 0 0 0 88.7 40.2 Q 86.5 46.6 84.25 51.6 Q 82.563 55.35 81.353 57.75 A 60.552 60.552 0 0 1 81.308 57.841 M 81.479 60.861 L 81.5 60.9 A 44.419 44.419 0 0 0 82.091 59.871 Q 83.54 57.269 85.6 52.9 Q 88.1 47.6 90.4 41.7 Q 92.3 43 94.15 44.55 Q 96 46.1 96 49.3 Q 96 50.925 95.473 52.804 A 20.755 20.755 0 0 1 94.65 55.15 Q 93.3 58.4 91.9 61.7 A 19.162 19.162 0 0 0 90.994 64.332 A 14.471 14.471 0 0 0 90.5 68 A 8.153 8.153 0 0 0 90.52 68.578 A 5.973 5.973 0 0 0 92.45 72.7 A 6.075 6.075 0 0 0 93.152 73.258 Q 94.221 73.986 95.634 74.288 A 10.386 10.386 0 0 0 97.8 74.5 A 14.161 14.161 0 0 0 101.907 73.89 A 16.861 16.861 0 0 0 106.15 71.9 A 28.946 28.946 0 0 0 108.189 70.463 A 32.321 32.321 0 0 0 113.5 65.25 A 43.092 43.092 0 0 0 115.515 62.576 A 35.465 35.465 0 0 0 117.622 59.163" id="cergen__svg" vectorEffect="scaling-stroke" /><path d="M 117.622 59.163 A 38.088 38.088 0 0 0 118.125 63.038 A 26.881 26.881 0 0 0 120 69.15 A 24.364 24.364 0 0 0 121.926 72.659 A 18.411 18.411 0 0 0 126.75 77.65 Q 131 80.6 136.2 80.6 Q 142.1 80.6 146.8 77.2 A 34.737 34.737 0 0 0 147.815 76.437 A 37.131 37.131 0 0 0 155.1 68.8 Q 154.7 70.1 154.55 71.2 Q 154.4 72.3 154.4 73.4 A 8.922 8.922 0 0 0 154.479 74.604 A 6.932 6.932 0 0 0 155.05 76.6 Q 155.7 78 156.95 78.95 A 12.524 12.524 0 0 0 157.808 79.547 A 14.639 14.639 0 0 0 159.8 80.6 Q 159.7 78.6 159.55 76.7 Q 159.4 74.8 159.4 72.8 Q 159.4 71 159.65 68.8 Q 159.806 67.425 160.119 65.796 A 60.38 60.38 0 0 1 160.55 63.75 A 57.204 57.204 0 0 1 160.885 62.365 Q 161.481 60.021 162.4 57.15 A 122.653 122.653 0 0 1 163.001 55.324 Q 163.534 53.745 164.174 51.975 A 233.355 233.355 0 0 1 165.5 48.4 L 166.2 45.2 Q 164.825 44.825 163.177 44.255 A 75.147 75.147 0 0 1 161.1 43.5 Q 158.2 42.4 155.15 41.45 A 22.587 22.587 0 0 0 153.083 40.909 A 18.358 18.358 0 0 0 149.3 40.5 Q 148.224 40.5 147.293 40.697 A 6.778 6.778 0 0 0 144.95 41.65 A 4.571 4.571 0 0 0 143.929 42.576 Q 142.974 43.738 142.5 45.7 Q 143.569 45.7 144.495 45.684 A 78.158 78.158 0 0 0 145.85 45.65 Q 147.3 45.6 148.6 45.6 A 35.044 35.044 0 0 1 150.275 45.642 A 43.631 43.631 0 0 1 152.9 45.85 A 28.245 28.245 0 0 1 153.113 45.874 Q 154.63 46.051 156.724 46.454 A 97.998 97.998 0 0 1 158.9 46.9 A 42.313 42.313 0 0 1 158.424 50.632 A 50.69 50.69 0 0 1 156.85 57.1 Q 155.2 62.4 152.5 66.95 A 32.249 32.249 0 0 1 150.339 70.154 A 25.12 25.12 0 0 1 146.3 74.35 A 14.656 14.656 0 0 1 144.469 75.63 A 10.848 10.848 0 0 1 138.9 77.2 A 10.923 10.923 0 0 1 132.29 75.087 A 14.017 14.017 0 0 1 129.3 72.05 Q 126.747 68.59 125.909 63.347 A 35.216 35.216 0 0 1 125.5 57.8 A 47.657 47.657 0 0 1 125.893 51.785 A 59.594 59.594 0 0 1 127.55 43.6 Q 129.6 36.1 133.1 28.9 Q 136.6 21.7 140.95 15.85 A 63.288 63.288 0 0 1 141.495 15.128 Q 145.591 9.782 149.95 6.5 A 24.037 24.037 0 0 1 151.251 5.585 Q 155.205 3 158.9 3 A 14.055 14.055 0 0 1 159.139 3.002 Q 160.913 3.032 162.098 3.515 A 3.889 3.889 0 0 1 163.55 4.5 Q 164.9 6 164.9 8.3 A 11.142 11.142 0 0 1 164.884 8.892 Q 164.816 10.185 164.449 11.589 A 19.242 19.242 0 0 1 163.55 14.2 Q 162.2 17.4 160.35 20 A 33.367 33.367 0 0 1 159.938 20.568 Q 158.89 21.976 157.995 22.842 A 7.951 7.951 0 0 1 157.1 23.6 A 6.344 6.344 0 0 0 157.367 24.118 Q 157.596 24.513 157.855 24.81 A 2.835 2.835 0 0 0 158.55 25.4 A 3.996 3.996 0 0 0 159.259 25.733 A 2.848 2.848 0 0 0 160.2 25.9 A 5.232 5.232 0 0 0 163.186 24.947 A 7.962 7.962 0 0 0 164.6 23.7 Q 166.6 21.5 167.8 18.15 Q 169 14.8 169 11.3 Q 169 8.3 168 5.75 Q 167 3.2 164.7 1.6 A 7.657 7.657 0 0 0 163.477 0.91 Q 161.465 0 158.6 0 A 20.924 20.924 0 0 0 152.502 0.932 A 27.159 27.159 0 0 0 147.05 3.3 A 41.954 41.954 0 0 0 142.037 6.638 A 51.969 51.969 0 0 0 135.9 12.25 A 64.048 64.048 0 0 0 133.953 14.424 A 70.532 70.532 0 0 0 126.45 25.1 Q 122.3 32.3 119.9 40.2 A 59.868 59.868 0 0 0 119.404 41.926 A 52.815 52.815 0 0 0 117.5 55.8 A 47.057 47.057 0 0 0 117.501 56.078" id="cergen__svg" vectorEffect="scaling-stroke" /><path d="M 202.816 64.074 A 38.699 38.699 0 0 1 202.57 64.399 A 34.54 34.54 0 0 1 200.35 67 A 34.719 34.719 0 0 1 194.889 71.739 A 29.735 29.735 0 0 1 191.35 73.85 A 22.673 22.673 0 0 1 184.959 76.004 A 20.349 20.349 0 0 1 181.5 76.3 A 17.65 17.65 0 0 1 177.986 75.973 Q 175.94 75.557 174.376 74.612 A 9.065 9.065 0 0 1 172.35 72.95 Q 169.3 69.6 169.3 64.7 A 20.368 20.368 0 0 1 170.012 59.48 A 27.753 27.753 0 0 1 171.55 55.2 A 39.353 39.353 0 0 1 177.521 45.835 A 43.151 43.151 0 0 1 177.55 45.8 A 36.04 36.04 0 0 1 183.061 40.53 A 31.684 31.684 0 0 1 185.8 38.65 A 20.295 20.295 0 0 1 189.719 36.77 A 15.115 15.115 0 0 1 194.7 35.9 Q 197 35.9 198.95 37.1 A 3.578 3.578 0 0 1 200.35 38.775 Q 200.896 40.025 200.9 41.971 A 14.038 14.038 0 0 1 200.9 42 A 12.531 12.531 0 0 1 198.823 48.888 A 15.179 15.179 0 0 1 198.65 49.15 Q 196.4 52.5 192.75 55.1 Q 189.1 57.7 184.75 59.35 A 33.683 33.683 0 0 1 177.849 61.186 A 30.478 30.478 0 0 1 176.1 61.4 A 23.767 23.767 0 0 0 175.889 62.611 A 19.875 19.875 0 0 0 175.8 63.3 A 16.544 16.544 0 0 0 175.714 64.386 A 13.732 13.732 0 0 0 175.7 65 Q 175.7 66.5 176.05 68 Q 176.4 69.5 177.3 70.75 A 5.787 5.787 0 0 0 179.192 72.418 A 7.101 7.101 0 0 0 179.75 72.7 A 7.298 7.298 0 0 0 181.309 73.191 Q 182.052 73.341 182.91 73.384 A 14.017 14.017 0 0 0 183.6 73.4 Q 187.9 73.4 192.1 70.95 Q 196.3 68.5 199.9 64.5 A 42.327 42.327 0 0 0 205.291 57.008 M 181.716 57.347 A 63.326 63.326 0 0 0 182.7 56.85 Q 186.1 55.1 189.25 52.7 A 25.888 25.888 0 0 0 192.873 49.378 A 22.105 22.105 0 0 0 194.45 47.4 A 11.479 11.479 0 0 0 196.004 44.378 A 9.744 9.744 0 0 0 196.5 41.3 A 4.876 4.876 0 0 0 196.461 40.662 Q 196.375 40.013 196.1 39.6 A 1.112 1.112 0 0 0 195.639 39.217 Q 195.254 39.035 194.64 39.006 A 5.098 5.098 0 0 0 194.4 39 A 7.193 7.193 0 0 0 192.005 39.434 Q 191.062 39.766 190.077 40.353 A 14.496 14.496 0 0 0 189.3 40.85 A 23.1 23.1 0 0 0 186.326 43.295 A 30.237 30.237 0 0 0 184.1 45.7 Q 181.6 48.7 179.6 52.3 A 34.613 34.613 0 0 0 177.323 57.25 A 30.043 30.043 0 0 0 176.6 59.5 Q 178.903 58.733 181.716 57.347 Z" id="cergen__svg" vectorEffect="scaling-stroke" /><path d="M 202.816 64.074 A 237.615 237.615 0 0 1 202.087 65.982 A 159.88 159.88 0 0 1 201.25 68.1 Q 200.397 70.213 200.237 70.939 A 1.302 1.302 0 0 0 200.2 71.2 A 4.401 4.401 0 0 0 201.198 72.188 A 5.431 5.431 0 0 0 202.45 72.85 Q 203.9 73.4 205.5 73.4 A 676.735 676.735 0 0 1 206.075 72.454 Q 206.954 71.009 207.94 69.403 A 1155.207 1155.207 0 0 1 210.1 65.9 Q 212.7 61.7 215.7 57.75 A 42.501 42.501 0 0 1 218.557 54.355 A 31.759 31.759 0 0 1 221.9 51.25 A 16.284 16.284 0 0 1 222.555 50.754 Q 223.724 49.916 224.878 49.42 A 8.365 8.365 0 0 1 228.2 48.7 A 5.228 5.228 0 0 1 228.566 48.713 A 3.986 3.986 0 0 1 231.05 49.75 Q 232.2 50.8 232.2 53.6 A 15.671 15.671 0 0 1 232.125 55.126 A 18.17 18.17 0 0 1 231.5 58.35 Q 230.8 60.8 230.05 63.1 Q 229.3 65.4 229.3 67.5 A 8.266 8.266 0 0 0 229.343 68.351 A 6.116 6.116 0 0 0 231.05 72.1 A 5.175 5.175 0 0 0 232.331 73.058 Q 233.906 73.9 236.3 73.9 Q 240.1 73.9 243.2 71.7 A 20.479 20.479 0 0 0 246.264 69.006 A 27.462 27.462 0 0 0 248.9 65.7 A 44.946 44.946 0 0 0 251.08 62.165 A 56.018 56.018 0 0 0 253.6 57 L 252.5 55.7 Q 250.7 59.4 248.35 63 A 45.221 45.221 0 0 1 248.203 63.224 Q 245.922 66.674 243.5 68.95 A 12.367 12.367 0 0 1 242.743 69.608 Q 241.911 70.272 241.078 70.676 A 5.866 5.866 0 0 1 238.5 71.3 A 3.82 3.82 0 0 1 238.297 71.295 A 2.871 2.871 0 0 1 236.35 70.45 A 2.069 2.069 0 0 1 236.13 70.19 Q 235.5 69.308 235.5 67.5 A 11.87 11.87 0 0 1 235.544 66.487 A 12.703 12.703 0 0 1 236.55 62.55 A 115.236 115.236 0 0 0 236.812 61.935 A 126.279 126.279 0 0 0 238.6 57.45 A 14.919 14.919 0 0 0 239.128 55.75 A 16.878 16.878 0 0 0 239.6 51.7 Q 239.6 48.3 237.85 45.5 A 5.632 5.632 0 0 0 234.428 42.974 A 8.504 8.504 0 0 0 232.2 42.7 A 11.532 11.532 0 0 0 227.68 43.655 A 16.272 16.272 0 0 0 224.6 45.4 A 33.722 33.722 0 0 0 221.814 47.615 A 40.271 40.271 0 0 0 217.45 52.15 A 102.333 102.333 0 0 0 216.623 53.164 A 92.214 92.214 0 0 0 211.4 60.3 A 97.759 97.759 0 0 0 212.38 57.275 A 82.123 82.123 0 0 0 213.7 52.45 A 78.551 78.551 0 0 0 213.73 52.326 Q 214.6 48.674 214.6 47.1 A 4.109 4.109 0 0 0 214.553 46.455 Q 214.32 44.993 212.952 44.625 A 4.051 4.051 0 0 0 211.9 44.5 A 5.515 5.515 0 0 0 211.422 44.521 A 5.691 5.691 0 0 0 209.2 45.2 A 13.096 13.096 0 0 0 209.187 45.207 Q 208.343 45.663 207.795 46.119 A 4.136 4.136 0 0 0 207.3 46.6 A 20.252 20.252 0 0 1 207.295 47.068 Q 207.257 48.716 206.952 50.534 A 33.742 33.742 0 0 1 206.2 53.9 A 96.787 96.787 0 0 1 205.291 57.008" id="cergen__svg" vectorEffect="scaling-stroke" /></g></svg>
                    <div className='underline'></div>
                </div>
            </div>
            <div className='details'>
                <h2>Generate and Send Certificates</h2>
            </div>
        </>
    )
}