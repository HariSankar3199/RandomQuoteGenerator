// src/components/BookmarkButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/action';
import { Button } from 'react-bootstrap';

function BookmarkButton({ quote }) {
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(addBookmark(quote));
  };

  return (
    <span className="text-end ms-5">
    {" "}
    <Button
      variant="outline-none"
      onClick={() => handleBookmark(quote)}
    >
      <img src="./Images/bk.svg" alt="" />
    </Button>
  </span>
  );
}

export default BookmarkButton;
