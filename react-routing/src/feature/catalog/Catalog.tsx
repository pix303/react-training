import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Photo } from "./Photo.model";

const Catalog: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const navigateHandler = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((result) => result.json())
      .then((result: Photo[]) => setPhotos(result.filter((p) => p.id < 21)));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-sky-900">Catalog</h1>
      <p>Navigation with Link.to (photo: {photos.length})</p>
      <div>
        {photos.map((p) => {
          return (
            <Link to={`${p.id}`} key={p.id}>
              <img
                src={p.thumbnailUrl}
                alt={p.title}
                className="w-12 inline-block"
              />
            </Link>
          );
        })}
      </div>
      <p>Navigation with useNavigate (photo: {photos.length})</p>
      <div>
        {photos.map((p) => {
          return (
            <img
              onClick={() => navigateHandler(`${p.id}`)}
              src={p.thumbnailUrl}
              alt={p.title}
              key={"kn-" + p.id}
              className="w-12 inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
