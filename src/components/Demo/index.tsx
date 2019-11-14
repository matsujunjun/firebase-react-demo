import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";

const Demo: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Demo</h1>
      <button onClick={() => history.push("/home")}>To Home</button>
    </div>
  );
};

export default Demo;
