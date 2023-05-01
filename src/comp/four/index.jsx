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
import { Thumbnail } from "../cont";
const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];
export const Gallery=()=> {
    let location = useLocation();
    return (
      <div>

        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
              
            }}
          >
            <Thumbnail color={i.color} />
            <p>{i.title}</p>
           
          </Link>
          
        ))}
      </div>
    );
  }