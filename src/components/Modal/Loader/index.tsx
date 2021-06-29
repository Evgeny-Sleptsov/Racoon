import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../helpers/interfaces';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fdd228',
    pointerEvents: 'none',
    zIndex: 10,
    '& svg': {
      maxWidth: '70%',
      margin: '0 auto',
    },
  },
});

const Loader: React.FC = () => {
  const classes = useStyles();
  const isOpen = useSelector((state: RootState) => state.modals.loader);

  return (
    <Fade when={isOpen} unmountOnExit={true}>
      <div className={classes.root}>
        <Logo />
      </div>
    </Fade>
  );
};

export default Loader;
