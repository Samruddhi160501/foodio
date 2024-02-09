import React, { useState } from "react";
import classes from "./BookTable.module.css";
import book from "../../assets/book2.jpg";
import Header from "../Header/Header";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Footer from "../Home/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function BookTable() {
  const date = new Date();
  const [age, setAge] = React.useState("");

  const [value, setValue] = useState(date);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <img src={book} alt="bookTable" className={classes.img}></img>
        <div className={classes.form}>
          <h1 className={classes.head}>Book a Table</h1>
          <form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" className={classes.select}  />
              <br />
              <br />
              <br />

              <TimePicker
                label="Controlled picker"
                value={value}
                className={classes.select}
                onChange={(newValue) => setValue(newValue)}
              />
              <br />
              <br />
              <br />
              <FormControl>
                <InputLabel id="demo-simple-select-label">People</InputLabel>
                <Select
                 className={classes.select}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="People"
                  onChange={handleChange}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                </Select>
              </FormControl>
            </LocalizationProvider>
            <button className={classes.btn}>Book Table</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
