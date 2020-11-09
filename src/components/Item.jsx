import React, { useContext } from "react";
import { maincontext } from "../context/Maincontex";

function Item() {
  const { data } = useContext(maincontext);
  const { likes, comments, largeImageURL, tags } = data;
  return (
    <div className="item">
      <li>
        <image src={largeImageURL} />
        <div className="name">{comments}</div>
        <div className="likes">{likes}</div>
        <div className="tags">{tags}</div>
      </li>
    </div>
  );
}

export default Item;
