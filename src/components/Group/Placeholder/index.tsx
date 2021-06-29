import React from 'react';
import { ReactComponent as PlacegolderImg } from '../../../assets/groupsPlaceholder.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      maxWidth: '90px',
      height: 'auto',
    },
  },
});

const GroupPlaceholder: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PlacegolderImg />
      <h3>Group list empty</h3>
    </div>
  );
};

export default GroupPlaceholder;
