import React, { useState, useEffect } from 'react';
import { fetchWeatherImage } from './services/api';

function App() {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchAndSetImage = async () => {
      try {
        const imageData = await fetchWeatherImage();
        setImageSrc(imageData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather image:', error);
      }
    };

    const timer = setInterval(() => {
      fetchAndSetImage();
    }, 8 * 60 * 1000); // Refresh every 8 minutes to keep GIF animation smooth

    fetchAndSetImage(); // Initial fetch

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800">
      <header className="bg-slate-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white flex items-center">
            Jakarta Rain Radar
          </h1>
          <p className="text-white">The image below shows the last 2 hours of rain in Jakarta region.

          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-2 border-gray-200 rounded-lg p-4">
            {loading ? (
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={imageSrc ? `data:image/gif;base64,${imageSrc}` : ''}
                  alt="Weather satellite"
                  className="w-full rounded-lg shadow-lg"
                  onLoad={() => setLoading(false)}
                  onError={(e) => {
                    console.error('Image loading error:', e);
                    setLoading(false);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;