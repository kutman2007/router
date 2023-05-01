import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,

} from "react-router-dom";
import { Image } from "../three";
const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];
export const ImageView=()=> {
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
  
    if (!image) return <div>Image not found</div>;
  
    return (
      <div>
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
            Close
          </button>
      </div>
    );
  }