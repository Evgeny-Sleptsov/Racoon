import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useListStyles = makeStyles({
  root: {
    borderRadius: '5px',
    backgroundColor: '#212121',
    padding: '10px 16px',
    '&:hover': {
      backgroundColor: '#212121',
    },
  },
  container: {
    maxWidth: '500px',
    margin: '2px 0px',
    color: 'white',
    listStyle: 'none',
  },
});

const useCheckboxStyles = makeStyles({
  root: {
    color: 'white',
  },
  checked: {
    '&$checked': {
      color: 'white',
    },
  },
});

export interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed }) => {
  const listStyles = useListStyles();
  const checkboxStyles = useCheckboxStyles();

  return (
    <ListItem
      dense
      button
      data-id={id}
      classes={listStyles}
      className="action-elem"
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          classes={checkboxStyles}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={title} />
      <ListItemSecondaryAction
        className="action-elem"
        data-id={id}
        data-delete-action="true"
      >
        <IconButton edge="end" aria-label="delete task" color="inherit">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
