import React, { useState, useEffect, useContext } from "react";

import Gallery from "../Gallery/Gallery";
import SeeAllButton from "../SeeAllButton/SeeAllButton";
import { NavContext } from "../../App";
import photoCategories from "../../data/photoCategories.json";
import { fetchMediaUrls } from "../../apiService";

import translations from "../../translations/translations.json";

export default function PhotographyPage() {
  const language = useContext(NavContext).language;
  let categoryTitle = translations[language].photographyTitle;
  const [gallery, setGallery] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const galleryData = [];
      for (let category of photoCategories) {
        const urls = await fetchMediaUrls("photos", category);
        galleryData.push({ title: category, urls: urls });
      }
      setGallery(galleryData);
    };

    fetchGalleryData();
  }, []);

  const displayedPhotos = showAll ? gallery : gallery.slice(0, 2);

  return (
    <section className="page" name="photography">
      <h2 className="page-title">{categoryTitle}</h2>
      <ul className="container-fluid row justify-content-center">
        {displayedPhotos.map((item) => {
          return (
            <Gallery key={item.title} title={item.title} urls={item.urls} />
          );
        })}
      </ul>
      {!showAll && gallery.length > 3 && (
        <SeeAllButton setShowAll={setShowAll} categoryTitle={categoryTitle} />
      )}
    </section>
  );
}
