import React from "react";
import { connect, useDispatch } from "react-redux";
import BooklistForm from "../booklist/components/BooklisForm";
import List from "../booklist/components/List";

const BookList = (props) => {
  const dispatch = useDispatch();
  const addBook = (name, description, auther, id) => {
    dispatch({
      type: "add item",
      payload: {
        name,
        description,
        auther,
        id
      }
    });
  };

  const delBook = (id) => {
    dispatch({
      type: "del item",
      payload: {
        id
      }
    });
  };

  const editBook = (id, newname, newdescription, newauther) => {
    dispatch({
      type: "edit item",
      payload: {
        id,
        newname,
        newdescription,
        newauther
      }
    });
  };
  return (
    <>
      <BooklistForm
        name={props.name}
        description={props.description}
        auther={props.auther}
        addBook={addBook}
      />
      <List
        items={props.items}
        delBook={delBook}
        editBook={editBook}
        logout={props.logout}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}
export default connect(mapStateToProps)(BookList);
