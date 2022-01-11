import React from "react";
import { Photo } from "./App";
import "./Image.css";

const EmptyHeart = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
  >
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
  </svg>
);

const FilledHeart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

const Image = ({
  photo,
  toggleLike,
}: {
  photo: Photo;
  toggleLike: () => void;
}) => {
  return (
    <div className="image-card">
      <img className="image" src={photo?.img_src} alt={photo.camera.name} />
      <h3>
        {photo?.camera.name} - {photo?.earth_date}
      </h3>
      <button className="like-button" onClick={toggleLike}>
        <div className="heart">
          {photo.liked ? <FilledHeart /> : <EmptyHeart />}
        </div>
        {photo.liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Image;
