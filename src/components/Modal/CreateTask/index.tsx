import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { RootState, ITodoData } from '../../../helpers/interfaces';
import { closeModals } from '../../../actions/modals';
import { db, auth } from '../../../firebase';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrap: {
    backgroundColor: 'white',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '300px',
    padding: '15px',
    '& .MuiInput-root': {
      width: '100%',
    },
  },
  buttonsWrap: {
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const ModalCreateTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals.createTask);
  const groupId = useSelector((state: RootState) => state.drawer.id);
  const [taskData, setTaskData] = useState<ITodoData>({
    title: '',
    completed: false,
  });

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setTaskData((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleAddTask = (): void => {
    const todosRef = db.ref(
      `users/${auth.currentUser?.uid}/groups/${groupId}/todos/`
    );
    todosRef
      .push({
        ...taskData,
        title: taskData.title.trim(),
      })
      .then(() => {
        resetState();
      });
  };

  const handleClose = (): void => {
    dispatch(closeModals());
    resetState();
  };

  const resetState = () => {
    setTaskData({
      title: '',
      completed: false,
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.contentWrap}>
        <Input
          placeholder="Enter task"
          value={taskData.title}
          onChange={handleTitle}
        />
        <div className={classes.buttonsWrap}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask} disabled={!taskData.title}>
            Add Task
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreateTask;
