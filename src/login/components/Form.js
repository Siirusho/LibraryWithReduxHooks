import React from "react";
import BookList from "../../booklist/BookList";
import InvalidData from "./InvalidData";

const Form = (props) => {
  const {
    email,
    password,
    status,
    handleEmail,
    handlePassword,
    handlelogin
  } = props;
  return (
    <>
      {status === "succeeded" ? (
        <BookList />
      ) : (
        <div className="App">
          <h1>Library</h1>
          <form onSubmit={handlelogin}>
            <input
              className="input"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
            />
            <input
              className="input"
              value={password}
              onChange={handlePassword}
              placeholder="Enter Password"
              type="password"
            />
            {status === "failed" ? <InvalidData /> : ""}

            <p onClick={handlelogin} id="btn">
              Log in
            </p>
            <span>email:1, pass:1</span>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
