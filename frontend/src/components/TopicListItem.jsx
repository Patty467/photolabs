import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {
    id,
    slug,
    title
  } = props

  return (
    <div className="topic-list__item">
      <p>{title}</p>
    </div>
  );
};

export default TopicListItem;
