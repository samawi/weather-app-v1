FROM alpine:3.13

RUN apk update
RUN apk add tesseract-ocr
RUN apk add python3
RUN apk add py3-pip
RUN apk add py3-pillow
RUN pip install pytesseract

WORKDIR /home

RUN mkdir temp-images
RUN mkdir web-images

COPY get-weather-image.py .

CMD ["python3", "get-weather-image.py"]