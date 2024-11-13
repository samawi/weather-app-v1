from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

app = FastAPI()


@app.get("/get-weather-image")
async def get_weather_image():
    """Return weather image from the specified directory."""
    image_path = (
        Path(__file__).parent.parent
        / "frontend/public-html/web-images/weather_animation.gif"
    )
    if not image_path.exists():
        raise HTTPException(status_code=404, detail="Image not found")
    return FileResponse(image_path)
