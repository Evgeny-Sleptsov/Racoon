import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../helpers/interfaces';
import { toggleDrawer } from '../../actions/drawer';
import { openCreateTaskModal } from '../../actions/modals';
import TaskList from '../Task/List';
import DrawerControls from './Controls';
import ButtonAddTask from '../../UI/Button/AddTask';

const drawer = makeStyles({
  paper: {
    background: 'black',
    height: '100%',
    width: '100%',
  },
});

const useStyles = makeStyles({
  content: {
    height: '100%',
    overflow: 'hidden',
  },
  addTaskWrap: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '0 15px',
    paddingBottom: '15px',
  },
});

const Drawer: React.FC = () => {
  const stylesDrawer = drawer();
  const styles = useStyles();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const themeColor = useSelector((state: RootState) => state.drawer.themeColor);
  const dispatch = useDispatch();

  const handleAddTask = (): void => {
    dispatch(openCreateTaskModal());
  };

  return (
    <SwipeableDrawer
      classes={stylesDrawer}
      anchor={'left'}
      open={isOpen}
      onClose={() => dispatch(toggleDrawer(false))}
      onOpen={() => dispatch(toggleDrawer(true))}
    >
      <div className={styles.content} style={{ color: themeColor }}>
        <DrawerControls />
        <TaskList />
        <div className={styles.addTaskWrap}>
          <ButtonAddTask color={themeColor} onClick={handleAddTask} />
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
