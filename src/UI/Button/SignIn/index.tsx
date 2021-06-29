import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as GoogleLogo } from '../../../assets/google.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '3px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    overflow: 'hidden',
    maxWidth: '250px',
    margin: '0 auto',
    fontSize: '16px',
    fontWeight: 600,
    transition: '0.2s linear',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#1661dc',
    },
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '2px',
    '& svg': {
      width: '50%',
    },
  },
  text: {
    padding: '10px',
  },
});

export interface ButtonSignInProps {
  onClick(): void;
}

const ButtonSignIn: React.FC<ButtonSignInProps> = ({ onClick }) => {
  const styles = useStyles();

  return (
    <button type="button" className={styles.root} onClick={onClick}>
      <span className={styles.logoWrap}>
        <GoogleLogo />
      </span>
      <span className={styles.text}>Sign up with Google</span>
    </button>
  );
};

export default ButtonSignIn;
