import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Container from "../components/Container";
export const maincontext = createContext();

const MainContexProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  // const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=malinois&image_type=photo&pretty=true`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=malinois&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  console.log(data[0]);
  return (
    <div>
      <maincontext.Provider value={(
        data, loading)}>
        {props.children}
      </maincontext.Provider>
    </div>
  );
};

export default MainContexProvider;
