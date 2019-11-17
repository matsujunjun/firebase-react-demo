import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import useWrite from "hooks/useWrite";
import useRead from "hooks/useRead";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import allmap from "images/allmap.png";
import a1 from "images/A1.jpg";
import a2 from "images/A2.jpg";
import b1 from "images/B1.jpg";
import b2 from "images/B2.jpg";
import c1 from "images/C1.jpg";
import e1 from "images/E1.jpg";
import e2 from "images/E2.jpg";
import dummy from "images/dummy.png";

import WhereToVote from "@material-ui/icons/WhereToVote";

const Home: React.FC = () => {
  const history = useHistory();
  const { lists, isLoading, read } = useRead();
  const [selected, setSelected] = useState("");
  const [body, setBody] = useState("");
  const { handleWrite, isLoading: isWriting } = useWrite();

  // <input value={title} onChange={e => setTitle(e.currentTarget.value)} />
  const handleDemo = () => {
    switch (selected) {
      case "A101":
      case "A102":
      case "A103":
      case "A104":
      case "A105":
      case "A106":
      case "A107":
        return a1;
      case "A201":
      case "A202":
      case "A203":
      case "A204":
      case "A205":
      case "A206":
      case "A207":
      case "A208":
      case "A209":
        return a2;
      case "B101":
        return b1;
      case "B201":
        return b2;
      case "C121":
      case "C122":
        return c1;
      default:
        return dummy;
    }
  };
  // const makeList = (obj: { build: string; room: string }, i: number) => {
  //   return (
  //     <div key={i} className="post-container">
  //       <div>
  //         <span>{}</span>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="Home-container">
      <h1>工大迷い人の集い</h1>
      <span className="name select">建物名(教室名)</span>
      <Autocomplete
        id="build-select"
        style={{ width: 300 }}
        options={lists}
        autoHighlight
        onInputChange={(_, value) => setSelected(value)}
        getOptionLabel={(option: BuildInfo) => option.room || ""}
        renderOption={(option: BuildInfo) => (
          <React.Fragment>
            {option.build} ({option.room})
          </React.Fragment>
        )}
        renderInput={params => (
          <TextField
            {...params}
            value={selected}
            onChange={e => {
              console.log(e.currentTarget.value);
              setSelected(e.currentTarget.value);
            }}
            label="入力または選択してください"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
              autoComplete: "disabled" // disable autocomplete and autofill
            }}
          />
        )}
      />
      <p className="name">全域マップ</p>
      <div className="allmap">
        <img className="map" src={allmap} alt="全域マップ" />;
        {selected !== "" && <WhereToVote className={selected} />}
      </div>
      {isLoading && <p>Loading...</p>}
      <p className="name">詳細マップ</p>
      <div className="detailMap">
        <img className="mapp" src={handleDemo()} alt="img" />
        {selected !== "" && <WhereToVote className={selected} />}
      </div>
    </div>
  );
};

interface BuildInfo {
  build: string;
  room: string;
}

export default Home;
