import { IGroupFromDataBase, ITodoData } from '../helpers/interfaces';
import firebase from 'firebase';


interface ITodos {
  [key : string] : ITodoData
}

const snapshotToArray = (snapshot : firebase.database.DataSnapshot ): IGroupFromDataBase[] => {
  let result: IGroupFromDataBase[] = [];

  snapshot.forEach((el) => {
    const item = el.val();
    item.id = el.key;
    if (item.todos) {
      const todos = Object.entries<ITodos>(item.todos).map((el) => {
        return {
          id: el[0],
          ...el[1],
        };
      });
      item.todos = todos;
    }
    result.push(item);
  });
  return result;
};

export default snapshotToArray;
