import React from "react";
import { Typography, Box } from "@mui/material";

const styles = {
  headerContainer: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    fontSize: "45px",
    fontWeight : "bold",
    color: "black",
  },
  header2: {
    fontSize: "45px",
    fontWeight : "bold",
    backgroundColor: "#25D366",
    color: "white",
  },
};
function Header() {
  return (
    <Box sx={styles.headerContainer}>
      <Typography sx={styles.header1}>Whatsapp</Typography>
      <Typography sx={styles.header2}>Roulette</Typography>
    </Box>
  );
}

export default Header;
