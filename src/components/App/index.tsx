import React, { useEffect } from 'react';
import Header from '../Header';
import GroupList from '../Group/List';
import ButtonCreateGroup from '../../UI/Button/CreateGroup';
import Modal from '../Modal';
import ButtonSignIn from '../../UI/Button/SignIn';
import Drawer from '../Drawer';
import { closeModals, openCreateGroupModal } from '../../actions/modals';
import { setUser, signInUser } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../../firebase';
import { RootState } from '../../helpers/interfaces';

const useStyles = makeStyles({
  signInWrap: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const userIsLogged = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
          })
        );
      }
      dispatch(closeModals());
    });
  }, [dispatch]);

  const handleCreate = (): void => {
    dispatch(openCreateGroupModal());
  };

  const handleSignIn = (): void => {
    dispatch(signInUser());
  };

  return (
    <React.Fragment>
      <Header />
      {userIsLogged ? (
        <React.Fragment>
          <GroupList />
          <ButtonCreateGroup title={'Add Group'} onClick={handleCreate} />
        </React.Fragment>
      ) : (
        <div className={styles.signInWrap}>
          <ButtonSignIn onClick={handleSignIn} />
        </div>
      )}
      <Drawer />
      <Modal />
    </React.Fragment>
  );
};

export default App;
