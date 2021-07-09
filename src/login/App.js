import "./style.css";
import React, { useState } from "react";
import Form from "./components/Form";
import BookList from "../booklist/BookList";

const App = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlelogin = () => {
    if (email === "1" && password === "1") {
      setStatus("succeeded");
    } else {
      setStatus("failed");
    }
  };
  const logout = () => {
    setStatus("");
    setEmail("");
    setPassword("");
  };

  if (status === "succeeded") {
    return <BookList logout={logout} />;
  }
  return (
    <Form
      email={email}
      password={password}
      status={status}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handlelogin={handlelogin}
    />
  );
};

export default App;
