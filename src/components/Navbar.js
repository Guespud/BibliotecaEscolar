import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: '#008394',
    }
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BIBLIOTECA ESCOLAR
          </Typography>
          <Button color="inherit"><FiIcons.FiSave /></Button>
          <Button color="inherit"><FaIcons.FaDownload /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
