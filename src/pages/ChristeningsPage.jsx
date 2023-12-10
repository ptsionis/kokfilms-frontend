import React, { useState, useEffect, useContext } from "react";

import YouTubeFrame from "../components/YouTubeFrame/YouTubeFrame";
import SeeAllButton from "../components/SeeAllButton/SeeAllButton";
import { NavContext } from "../App";
import { fetchYouTubeInfo } from "../apiService";

import translations from "../translations/translations.json";

export default function ChristeningsPage() {
  const language = useContext(NavContext).language;
  let categoryTitle = translations[language].christeningsTitle;
  const [youTubeInfo, setYouTubeInfo] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchYouTubeInfo("christenings")
      .then((data) => {
        setYouTubeInfo(data);
      })
      .catch((error) => {
        console.error(`Error fetching media URLs: ${error}`);
      });
  }, []);

  const displayedVideos = showAll ? youTubeInfo : youTubeInfo.slice(0, 2);

  return (
    <section className="page" name="christenings">
      <h2 className="page-title">{categoryTitle}</h2>
      <ul className="container-fluid row justify-content-center">
        {displayedVideos.map((url) => {
          const prefix = "https://www.youtube.com/embed/";
          const key = url.substring(prefix.length);
          return <YouTubeFrame key={key} url={url} />;
        })}
      </ul>
      {!showAll && youTubeInfo.length > 3 && (
        <SeeAllButton setShowAll={setShowAll} categoryTitle={categoryTitle} />
      )}
    </section>
  );
}
