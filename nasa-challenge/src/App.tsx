import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./Image";

export type Photo = {
  id: number;
  camera: {
    id: number;
    name: string;
    full_name: string;
    rover_id: number;
  };
  earth_date: string;
  img_src: string;
  rover: {
    id: number;
    name: string;
    status: string;
    launch_date: string;
    landing_date: string;
  };
  sol: number;
  liked: boolean;
};

type PhotosResponse = {
  photos: Photo[];
};

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData: () => Promise<void> = () => {
    return fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=MMEwubKkc5TiQgeQd8OAda0hpLFPhVFEfZLmPRnA"
    )
      .then((response) => response.json())
      .then((data: PhotosResponse) => {
        setPhotos(data.photos.map((photo) => ({ ...photo, liked: false })));
        setLoading(false);
      });
  };

  const toggleLike = (index: number) => {
    const tempPhotos = [...photos];
    const currentPhoto = { ...photos[index] };

    currentPhoto.liked = !currentPhoto.liked;
    tempPhotos[index] = currentPhoto;
    setPhotos(tempPhotos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="App"
      style={{
        position: loading ? "fixed" : "relative",
        width: loading ? "calc(100% - 96px)" : "auto",
      }}
    >
      <header className="App-header">
        <h1 className="header-title">Spacestagram</h1>
        <h2 className="header-subtitle">Brought to you by NASA's API</h2>
      </header>
      <main>
        <>
          {loading && !photos.length && (
            <div className="loading-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {photos.map((photo, index) => {
            return (
              <Image
                photo={photo}
                toggleLike={() => toggleLike(index)}
                key={`nasa-photo-${index}`}
              />
            );
          })}
        </>
      </main>
    </div>
  );
}

export default App;
