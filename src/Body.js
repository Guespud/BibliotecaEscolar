import React from 'react';
import EnhancedTable from './components/Table'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Body() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <EnhancedTable/>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
          <h1>soy el 4</h1>
        </div>
      </div>
    </div>
  );
}