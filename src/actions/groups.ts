import { GroupsActions } from '../constants/actionTypes';
import { IGroupFromDataBase } from '../helpers/interfaces';

export const updateGroupsData = (data: IGroupFromDataBase[]) => ({
  type: GroupsActions.UPDATE_GROUPS,
  payload: data,
});

export const deleteGroup = () => ({
  type: GroupsActions.DELETE_GROUP,
});


interface UpdateGroupsData {
  type: GroupsActions.UPDATE_GROUPS,
  payload: IGroupFromDataBase[],
}

interface DeleteGroup {
  type: GroupsActions.DELETE_GROUP,
}

export type Action = UpdateGroupsData | DeleteGroup;