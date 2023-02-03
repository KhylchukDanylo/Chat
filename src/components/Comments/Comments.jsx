import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { getSelectorFilter } from "../../redux/filterSlice";
import { useSelector } from "react-redux";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  const filter = useSelector(getSelectorFilter);

  const getFilterComment = () => {
    const normalizedFilter = filter.toLowerCase();
    return comments.filter((comment) =>
      comment.content.toLowerCase().includes(normalizedFilter)
    );
  };

  if (!comments) {
    return;
  }
  return (
    <Grid>
      {comments &&
        getFilterComment().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
