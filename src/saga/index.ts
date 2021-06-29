import { takeEvery, put, call, select } from 'redux-saga/effects';
import { ModalsActions, UserActions, GroupsActions, TaskAction } from '../constants/actionTypes';
import { toggleDrawer } from '../actions/drawer';
import { auth, db } from '../firebase';
import signInWithGoogleProvider from '../helpers/signInWithGoogleProvider';
import { RootState, ITodoFromDataBase } from '../helpers/interfaces';
import { TaskActionType } from '../actions/task';


const getGroupId = (state: RootState) => state.drawer.id;
const getTodos = (state: RootState) => state.drawer.todos;


export function* sagaWatcher () {
  yield takeEvery(ModalsActions.OPEN_CREATE_GROUP_MODAL, createGroupModalWorker)
  yield takeEvery(UserActions.SIGN_IN, signInWorker)
  yield takeEvery(GroupsActions.DELETE_GROUP, deleteGroupWorker)
  yield takeEvery(TaskAction.TRIGGER_TASK, triggerTaskWorker)
}

function* createGroupModalWorker() {
  yield put(toggleDrawer(true));
}

function* signInWorker() {
  yield call(signInWithGoogleProvider);
}

function* deleteGroupWorker(): Generator | Promise<unknown> {
  const groupId = yield select(getGroupId); 
  yield call(deleteGroup, groupId);
  yield put(toggleDrawer(false));
}

function* triggerTaskWorker(action: TaskActionType): Generator {
  const groupId = yield select(getGroupId); 
  const todos = (yield select(getTodos)) as ITodoFromDataBase[];
  const el = action.payload;
  const taskId = el.dataset.id;
  const isDeleteBtn = el.dataset.deleteAction;

  const taskRef = db.ref(
    `users/${auth.currentUser?.uid}/groups/${groupId}/todos/${taskId}`
  );
  const currentTaskData = todos.find((el): boolean => el.id === taskId);

  if (!isDeleteBtn) {
    taskRef.child('completed').set(!currentTaskData?.completed);
  } else {
    taskRef.remove();
  }
}

const deleteGroup = (id: string): Promise<unknown> => {
  const ref = db.ref(`users/${auth.currentUser?.uid}/groups/${id}`);
  return ref.remove();
}