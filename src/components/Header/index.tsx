import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ButtonSignOut from '../../UI/Button/SignOut';
import { RootState } from '../../helpers/interfaces';

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65px',
    backgroundColor: 'black',
    zIndex: 1,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1480px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    maxWidth: '130px',
    marginRight: 'auto',
    '& svg': {
      width: '100%',
      height: 'auto',
    },
  },
});

const Header: React.FC = () => {
  const styles = useStyles();
  const userIsLogged = useSelector((state: RootState) => state.user.uid);

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {userIsLogged && <ButtonSignOut />}
      </div>
    </div>
  );
};

export default Header;
