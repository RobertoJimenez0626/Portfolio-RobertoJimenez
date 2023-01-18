import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material"
import { Typography } from "@mui/material"

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /> 
      <Typography variant="h4" fontWeight="bold" ml="10px" letterSpacing="-2px" sx={{ color: "white" }}>
        YouTube
      </Typography>
    </Link>
    <Box style={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
      {/* <img src="https://img.icons8.com/stickers/100/null/usa.png" alt="en-US" height={50} />
      <img src="https://img.icons8.com/stickers/100/null/mexico.png" alt="es-MX" height={50} /> */}
    </Box>
    <SearchBar />
  </Stack>
);

export default Navbar;