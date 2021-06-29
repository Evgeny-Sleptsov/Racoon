export interface ITodoData {
    title: string,
    completed: boolean
}

export interface ITodoFromDataBase extends ITodoData{
    id: string,
}
export interface IGroupData {
    title: string,
    icon: string,
    themeColor: string
}
export interface IGroupFromDataBase extends IGroupData{
    id: string,
    todos: ITodoFromDataBase[]
}

export interface IUser {
    uid: string | null
}

export interface IDrawer {
    id: string,
    isOpen: boolean,
    title: string,
    icon: string,
    themeColor: string
    todos: ITodoFromDataBase[]
}

export interface RootState {
    groups: IGroupFromDataBase[]
    modals: IModals
    user: IUser
    drawer: IDrawer
}

interface IModals {
    createGroup: boolean
    editGroup: boolean
    createTask: boolean
    loader: boolean
}