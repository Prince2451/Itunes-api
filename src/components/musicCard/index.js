import React from "react";
import { Card } from "antd";

function MusicCard(props) {
  return (
    <Card title={props.trackName || props.collectionName} hoverable>
      {props.artistName ? <p>Artist Name: {props.artistName}</p> : null}
      {props.viewURL ? (
        <p>
          View Track:
          <a
            style={{
              textDecoration: "none",
              marginLeft: "5px",
            }}
            href={props.viewURL}
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
        </p>
      ) : null}
    </Card>
  );
}

export default MusicCard;
