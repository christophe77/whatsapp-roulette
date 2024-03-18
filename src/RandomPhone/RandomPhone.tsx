import React from "react";
import { TextField, Box, Select, MenuItem, Button } from "@mui/material";
import { Autorenew } from "@mui/icons-material";
import useRandomPhone from "./useRandomPhone";

const styles = {
  randomPhoneContainer: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function RandomPhone() {
  const { randomPhone, generatePhoneByCountry, country, handleChangeCountry, openUrl } =
    useRandomPhone();
  return (
    <>
      <Box sx={styles.randomPhoneContainer}>
        <Select
          id="country"
          value={country}
          onChange={handleChangeCountry}
          autoWidth
        >
          <MenuItem value="France">France</MenuItem>
          <MenuItem value="Belgique">Belgique</MenuItem>
          <MenuItem value="España">España</MenuItem>
        </Select>
        <TextField id="random-phone" variant="outlined" value={randomPhone} />
        <Autorenew
          onClick={generatePhoneByCountry}
          sx={{ fontSize: 40, color: "#25D366" }}
        />
      </Box>
      <Box sx={styles.randomPhoneContainer}>
        <Button onClick={openUrl} variant="outlined">Découvrir</Button>
      </Box>
    </>
  );
}

export default RandomPhone;
