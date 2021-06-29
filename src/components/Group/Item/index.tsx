import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { iconsData } from '../../../constants/icons';
import { ITodoData } from '../../../helpers/interfaces';

export type GroupItemProps = {
  id: string;
  icon: string;
  title: string;
  todos: ITodoData[] | [];
};

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: '8px 0px',
    maxWidth: '500px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexShrink: 0,
    backgroundColor: '#0a080b',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    overflow: 'hidden',
    '& svg': {
      width: '20px',
    },
  },
  content: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingLeft: '15px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    '& h3': {
      fontSize: '20px',
      paddingRight: '10px',
      lineHeight: 1.5,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      margin: 0,
    },
    '& span': {
      marginLeft: 'auto',
    },
  },
  progressWrap: {
    width: '100%',
    height: '3px',
    background: '#f6f6f4',
    marginTop: '10px',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressLine: {
    backgroundColor: '#fed32c',
    height: '100%',
    transition: 'all 0.2s linear',
  },
});

const GroupItem: React.FC<GroupItemProps> = ({ id, title, icon, todos }) => {
  const styles = useStyles();
  const completedTask = todos.filter((el) => el.completed);
  const progress = (completedTask.length / todos.length) * 100;

  return (
    <ListItem button id={id} className={styles.root}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Icon component={iconsData[icon]} />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <h3>{title}</h3>
            <span>{todos.length}</span>
          </div>
          <div className={styles.progressWrap}>
            <div
              className={styles.progressLine}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default GroupItem;
