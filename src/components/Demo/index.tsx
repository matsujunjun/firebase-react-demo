import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

const Demo: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <div>
        <h1>Demo</h1>
        <button onClick={() => history.push("/home")}>To Home</button>
      </div>
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={countries}
        classes={{
          option: classes.option
        }}
        autoHighlight
        getOptionLabel={(option: CountryType) => option.label}
        renderOption={(option: CountryType) => (
          <React.Fragment>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </React.Fragment>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
              autoComplete: "disabled" // disable autocomplete and autofill
            }}
          />
        )}
      />
    </>
  );
};

interface CountryType {
  code: string;
  label: string;
  phone: string;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" }
];
export default Demo;
