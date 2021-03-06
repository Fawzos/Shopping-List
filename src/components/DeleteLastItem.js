import React from "react";

const DeleteLastItem = (props) => {
  const handleDeleteLastItem = (event) => {
    props.onDeleteLastItem();
  };
  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete last item
    </button>
  );
};
export default DeleteLastItem;
