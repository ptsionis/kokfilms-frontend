import React, { useState, useContext } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { NavContext } from "../../App";

import "./Gallery.css";

import translations from "../../translations/translations.json";

export default function Gallery({ title, urls }) {
  const language = useContext(NavContext).language;
  const [open, setOpen] = useState(false);
  const slides = urls.map((url) => {
    return {
      src: url,
    };
  });

  const getFullPhotoUrl = (title) => {
    return `https://storage.googleapis.com/kokfilms/photos%2F${title}%2F${title}.webp`;
  };

  const getThumbnail = (urls) => {
    for (const url of urls) {
      const urlParts = url.split("/");
      let photoName = urlParts[urlParts.length - 1];
      photoName = photoName.replace(`photos%2F${title}%2F`, "");

      if (title === photoName.replace(/\.webp$/, "")) {
        return url;
      }
    }
    return null;
  };

  const moveThumbnailToFront = (urls, title) => {
    const titleIndex = urls.indexOf(getFullPhotoUrl(title));

    //Condition just in case I forgot to rename the thumbnail image equal to the title in Storage
    if (titleIndex !== -1) {
      urls.splice(titleIndex, 1);
      urls.unshift(getFullPhotoUrl(title));
    }
  };

  moveThumbnailToFront(urls, title);
  const thumbnailUrl = getThumbnail(urls);

  return (
    <>
      <li
        className="gallery-item col-12 col-md-6 col-lg-4 col-xl-3 my-4"
        onClick={() => {
          setOpen(true);
        }}>
        <div className="d-flex flex-column see-all text-center justify-content-center align-items-center">
          <span>{title.toUpperCase().replaceAll("-", " ")} ALBUM</span>
          <span>{translations[language].photographyViewAll}</span>
        </div>
        <div className="gallery-thumbnail-container">
          <img
            className="gallery-thumbnail"
            src={thumbnailUrl}
            alt={`${title} photo`}
            onClick={() => setOpen(true)}
          />
        </div>
      </li>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
}
