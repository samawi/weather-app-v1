import base64
import os
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:80",
        "http://react-app",
        "http://fastapi:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get-weather-image")
async def get_weather_image():
    """Return weather image from the specified directory."""
    try:
        image_path = "web-images/weather_animation.gif"
        if not os.path.exists(image_path):
            raise HTTPException(
                status_code=404, detail=f"Image file not found at path: {image_path}"
            )

        with open(image_path, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode()
            return {"image": encoded_string}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")
