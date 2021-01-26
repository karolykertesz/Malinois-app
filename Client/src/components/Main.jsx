import React, { useState, useEffect } from "react";
import api from "../api/api";
import Loading from "./Loading";

const Main = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const pixData = await api.get();
    if (!pixData) {
      <Loading />;
    }
    setData(pixData.data.hits);
  };
  const firstLikes = data.sort((a, b) => b.likes - a.likes);
  const firstComment = data.sort((a, b) => b.comments - a.comments);
  const firstDownloads = data.sort((a, b) => b.downloads - a.downloads);
  useEffect(() => fetchdata(), []);

  return <div className="container">hu</div>;
};

export default Main;
