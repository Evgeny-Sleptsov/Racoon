import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { iconsData } from '../../../constants/icons';
import { RootState } from '../../../helpers/interfaces';
import {
  setDrawerContent,
  discardDrawerContent,
} from '../../../actions/drawer';
import { triggerTask } from '../../../actions/task';
import { db, auth } from '../../../firebase';
import firebase from 'firebase';
import { ITodoFromDataBase } from '../../../helpers/interfaces';
import TaskItem from '../Item';
const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    padding: '60px 15px 0px 15px',
    height: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    '& h2': {
      margin: 0,
      marginLeft: '10px',
      lineHeight: '1.5',
      fontSize: '20px',
    },
  },
  listWrap: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
    paddingBottom: '100px',
    overflowY: 'auto',
    height: '100%',
  },
  background: {
    flexGrow: 1,
    backgroundImage:
      'repeating-linear-gradient(transparent, transparent 50px, #212121 50px, #212121 51px)',
    backgroundRepeat: 'no-repeat',
  },
});

const TaskList: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const drawerContent = useSelector((state: RootState) => state.drawer);

  useEffect(() => {
    if (drawerContent.id) {
      const ref = db.ref(
        `users/${auth.currentUser?.uid}/groups/${drawerContent.id}/todos`
      );
      ref.on('value', (snapshot: firebase.database.DataSnapshot) => {
        let data: ITodoFromDataBase[] = [];

        snapshot.forEach((el) => {
          data.push({
            id: el.key,
            ...el.val(),
          });
        });
        dispatch(
          setDrawerContent({
            todos: data,
          })
        );
      });

      return () => {
        ref.off();
        dispatch(discardDrawerContent());
      };
    }
  }, [drawerContent.id, dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLLIElement;
    const actionElem = target.closest('.action-elem') as HTMLLIElement;

    if (!actionElem) return;
    dispatch(triggerTask(actionElem));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Icon component={iconsData[drawerContent.icon]} />
        <h2>{drawerContent.title}</h2>
      </div>
      <div className={styles.listWrap} onClick={handleClick}>
        <TransitionGroup appear={true} enter={false} exit={true}>
          {drawerContent.todos.reverse().map((el) => {
            return (
              <Fade key={el.id} collapse unmountOnExit={true}>
                <TaskItem
                  id={el.id}
                  title={el.title}
                  completed={el.completed}
                />
              </Fade>
            );
          })}
        </TransitionGroup>
        <div className={styles.background}></div>
      </div>
    </div>
  );
};

export default TaskList;
