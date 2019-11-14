import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import useWrite from "hooks/useWrite";
import useRead from "hooks/useRead";

const Home: React.FC = () => {
  const history = useHistory();
  const { lists, isLoading, read } = useRead();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { handleWrite, isLoading: isWriting } = useWrite();
  const handlePost = () => {
    handleWrite({ title, body });
    read();
    setTitle("");
    setBody("");
  };
  const makeList = (obj: { title: string; body: string }, i: number) => {
    return (
      <div key={i} className="post-container">
        <div>
          <p>タイトル：{obj.title}</p>
        </div>
        <div>
          <span>{obj.body}</span>
        </div>
      </div>
    );
  };
  return (
    <div className="Home-container">
      <h1>Home</h1>
      <span>Title</span>
      <input
        value={title}
        onChange={v => setTitle(v.currentTarget.value)}
        disabled={isWriting}
      />
      <span>Body</span>
      <input
        value={body}
        onChange={v => setBody(v.currentTarget.value)}
        disabled={isWriting}
      />
      <button onClick={handlePost}>追加</button>

      {isLoading && <p>Loading...</p>}
      {lists.map(makeList)}
      <button onClick={() => history.push("/demo")}>To Demo</button>
    </div>
  );
};

export default Home;
