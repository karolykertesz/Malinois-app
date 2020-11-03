import React, { useState, createContext, useEffect } from "react";
import Loading from "../components/Loading";
export const maincontext = createContext();
const MainContexProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=malinois&image_type=photo&pretty=true`;
  useEffect(() => {
    setLoading(true);
    try {
      fetch(url).then((response) =>
        response.json().then((data) => setData(data.hits))
      );
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    // setLoading(false);
  }, [url]);

  return (
    <div>
      <maincontext.Provider value={data}>{props.children}</maincontext.Provider>
    </div>
  );
};

export default MainContexProvider;
