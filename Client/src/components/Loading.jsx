import React from "react";
import LoadingText from "../components/LodingText";
import "../styles/loading.css";

const Loading = () => {
  return (
    <main>
      <LoadingText />
      <div className="loading">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </main>
  );
};

export default Loading;
