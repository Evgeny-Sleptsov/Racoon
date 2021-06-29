import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { db, auth } from '../../../firebase';
import { RootState } from '../../../helpers/interfaces';
import snapshotToArray from '../../../helpers/snapshotToArray';
import { updateGroupsData } from '../../../actions/groups';
import { setDrawerContent } from '../../../actions/drawer';
import GroupItem from '../Item';
import GroupPlaceholder from '../Placeholder';

const Fade = require('react-reveal/Fade');

const useStyles = makeStyles({
  root: {
    paddingTop: '85px',
    paddingBottom: '70px',
  },
  wrap: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '0 20px',
  },
});

const GroupList: React.FC = () => {
  const groups = useSelector((state: RootState) => state.groups);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const ref = db.ref(`users/${auth.currentUser?.uid}/groups/`);
    ref.on('value', (snapshot): void => {
      let data = snapshotToArray(snapshot);
      dispatch(updateGroupsData(data));
    });
    return () => {
      ref.off();
    };
  }, [dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLLIElement;
    const id = target.id;
    if (!id) return;

    const currentGroup = groups.find((el) => el.id === id);
    if (currentGroup) {
      dispatch(
        setDrawerContent({
          isOpen: true,
          ...currentGroup,
        })
      );
    }
  };

  return (
    <React.Fragment>
      {groups.length > 0 ? (
        <div className={classes.root} onClick={handleClick}>
          <div className={classes.wrap}>
            <TransitionGroup appear={true} enter={false} exit={false}>
              {groups.reverse().map((group) => {
                return (
                  <Fade key={group.id}>
                    <GroupItem
                      id={group.id}
                      title={group.title}
                      icon={group.icon}
                      todos={group.todos || []}
                    />
                  </Fade>
                );
              })}
            </TransitionGroup>
          </div>
        </div>
      ) : (
        <GroupPlaceholder />
      )}
    </React.Fragment>
  );
};

export default GroupList;
