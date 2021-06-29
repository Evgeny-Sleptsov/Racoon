import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    fontSize: '35px',
  },
});

export interface ButtonAddTaskProps {
  color?: string;
  onClick(): void;
}

const ButtonAddTask: React.FC<ButtonAddTaskProps> = ({ color, onClick }) => {
  const styles = useStyles();

  return (
    <IconButton
      onClick={onClick}
      className={styles.root}
      style={{ backgroundColor: color }}
      aria-label="add task"
    >
      <AddIcon fontSize="inherit" />
    </IconButton>
  );
};

export default ButtonAddTask;
