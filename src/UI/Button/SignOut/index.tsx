import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../actions/user';
import { auth } from '../../../firebase';

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

const ButtonSignOut: React.FC = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleSignOut = (): void => {
    auth
      .signOut()
      .then(() => dispatch(setUser({ uid: null })))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <IconButton
      aria-label="signOut"
      color="inherit"
      onClick={handleSignOut}
      className={styles.root}
    >
      <ExitToApp fontSize="large" />
    </IconButton>
  );
};

export default ButtonSignOut;
