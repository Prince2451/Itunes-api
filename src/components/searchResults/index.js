import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import MusicCard from "../musicCard";

function SearchResult() {
  const searchResults = useSelector((state) => state.searchResult);
  let data = [];
  for (let i = 0; i < searchResults.length; i++) {
    data.push(
      <Col key={i}>
        <MusicCard
          trackName={searchResults[i].trackName}
          artistName={searchResults[i].artistName}
          viewURL={searchResults[i].trackViewUrl}
        />
      </Col>
    );
  }
  return (
    <div
      style={{
        width: "80%",
        minWidth: "300px",
        margin: "auto",
      }}
    >
      <Row justify="space-between" gutter={[0, 8]}>
        {data}
      </Row>
    </div>
  );
}

export default SearchResult;
