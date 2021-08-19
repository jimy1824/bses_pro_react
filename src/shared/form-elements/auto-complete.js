import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import axios from "axios";
import { Grid } from "@material-ui/core";
import { AuthContext } from "../context/auth-context";
import { autoCompleteStyles } from "./form-elements-styles";

export default function Asynchronous(props) {
  const { error = "" } = props;
  const auth = useContext(AuthContext);
  const classes = autoCompleteStyles();
  const [loading, setLoading] = useState(false);
  const [loadedData, setLoadedDate] = useState([]);

  const changeHandler = async (e, value) => {
    setLoading(true);
    props.setValueForInput(value);
    if (value.length > 2) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/address_suggest/?keyword=${value}`,
          {
            headers: {
              Authorization: `Token ${auth.token}`,
            },
          }
        );
        setLoadedDate(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  };

  const onChangeWrapper = (e, value) => {
    if (value === null) {
      setLoadedDate([]);
      props.setValueForInput("");
    }

    return { e, value };
  };

  return (
    <Grid container alignItems="center">
      <div className={classes.paragraph}>{props.sideLabel}</div>
      <Grid container spacing={0} className={classes.insideContainer}>
        <Autocomplete
          id="combo-box-demo"
          inputValue={props.valueForInput}
          onChange={(e, value) => props.onChange(onChangeWrapper(e, value))}
          options={loadedData}
          loadingText={"Loading..."}
          loading={loading}
          onInputChange={changeHandler}
          getOptionLabel={(option) => option.physical_a}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Enter Address"
              variant="outlined"
              {...(error && { error: true, helperText: error })}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
