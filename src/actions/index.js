const INCREMENT_LIKES = "INCREMENT_LIKES";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

export const increment = i => ({ type: INCREMENT_LIKES, index: i });

export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment
});

export const removeComment = (postId, i) => ({
  type: REMOVE_COMMENT,
  i,
  postId
});
