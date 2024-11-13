FROM python

# RUN apk update
RUN apt-get update
RUN apt-get install -y tesseract-ocr
# RUN apk add python3
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN apt-get install -y python3-pillow
RUN pip install pytesseract
RUN pip install requests

WORKDIR /home

RUN mkdir temp-images
RUN mkdir web-images

COPY get-weather-image.py .

CMD ["python3", "get-weather-image.py"]