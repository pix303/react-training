import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { Photo } from "./Photo.model";

function Detail() {
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((result) => result.json())
      .then((result) => setPhoto(result));
  }, [id]);

  return (
    <div>
      <h1>Photo detail {id}</h1>
      <div className="flex">
        <Link className="btn btn-secondary" to="./">
          Info
        </Link>
        <Link className="btn btn-secondary" to="image">
          Image
        </Link>
        <Link className="btn btn-secondary" to="description">
          Description
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Detail;
