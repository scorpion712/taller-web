import { Link, Typography } from "@mui/material";
import React from "react";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/scorpion712/taller-web">
        Diez Lautaro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
