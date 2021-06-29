import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CirclePicker, ColorResult } from 'react-color';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { iconsData, DEFAUL_ICON } from '../../../constants/icons';
import { IGroupData, RootState } from '../../../helpers/interfaces';
import { closeModals } from '../../../actions/modals';
import { toggleDrawer, setDrawerContent } from '../../../actions/drawer';
import { COLORS } from '../../../constants/colorsPalette';
import { db, auth } from '../../../firebase';

const Fade = require('react-reveal/Fade');

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
  titleWrap: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '10px',
    margin: '0 -5px',
    '& h2': {
      fontSize: '20px',
      lineHeight: '1.5',
      fontWeight: '400',
      margin: '0',
      marginLeft: '5px',
    },
    '& .MuiIconButton-root': {
      color: 'black',
      padding: '5px',
    },
  },
  buttonsWrap: {
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  colorsWrap: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
  },
  iconsWrap: {
    width: '245px',
    margin: '0 auto',
    paddingTop: '10px',
    maxHeight: '110px',
    overflowY: 'auto',
    '& .MuiIconButton-root': {
      color: 'black',
      padding: '5px',
    },
    '& svg': {
      fontSize: '39px',
      padding: '5px',
    },
  },
}));

const initialState = {
  title: '',
  themeColor: COLORS[0],
  icon: DEFAUL_ICON,
};

const ModalGroupInfo: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isCreateModal = useSelector(
    (state: RootState) => state.modals.createGroup
  );
  const isEditModal = useSelector((state: RootState) => state.modals.editGroup);
  const drawer = useSelector((state: RootState) => state.drawer);
  const [groupData, setGroupData] = useState<IGroupData>(initialState);
  const [iconsOpened, setIconsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (isCreateModal) {
      setGroupData(initialState);
    }
  }, [isCreateModal]);

  useEffect(() => {
    if (isEditModal) {
      setGroupData({
        title: drawer.title,
        themeColor: drawer.themeColor,
        icon: drawer.icon,
      });
    }
  }, [isEditModal]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setGroupData((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleColor = (color: ColorResult): void => {
    setGroupData((prev) => ({
      ...prev,
      themeColor: color.hex,
    }));
    dispatch(
      setDrawerContent({
        themeColor: color.hex,
      })
    );
  };

  const handleIcon = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLLIElement;
    const icon = target.closest('[data-name-icon]') as HTMLLIElement;
    const iconName = icon.dataset.nameIcon;
    if (!icon || !iconName) return;

    setGroupData((prev) => ({
      ...prev,
      icon: iconName,
    }));

    setIconsOpened((prev) => !prev);
  };

  const handleCreateGroup = (): void => {
    const groupsRef = db.ref(`users/${auth.currentUser?.uid}/groups`);
    groupsRef
      .push({
        ...groupData,
        title: groupData.title.trim(),
      })
      .then((result: any) => {
        dispatch(closeModals());
        dispatch(
          setDrawerContent({
            id: result.key,
            title: groupData.title,
            icon: groupData.icon,
          })
        );
      });
  };

  const handleClose = (): void => {
    dispatch(closeModals());
    if (isCreateModal) {
      dispatch(toggleDrawer(false));
    }
  };

  const handleResetIcon = (): void => {
    setIconsOpened((prev) => !prev);
    setGroupData((prev) => ({
      ...prev,
      icon: DEFAUL_ICON,
    }));
  };

  const handleEditGroup = (): void => {
    const groupsRef = db.ref(
      `users/${auth.currentUser?.uid}/groups/${drawer.id}`
    );
    groupsRef
      .update({
        ...groupData,
        title: groupData.title.trim(),
      })
      .then(() => {
        dispatch(closeModals());
        dispatch(
          setDrawerContent({
            title: groupData.title,
            icon: groupData.icon,
          })
        );
      });
  };

  return (
    <Modal
      open={isCreateModal || isEditModal}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.contentWrap}>
        <div className={classes.titleWrap}>
          <IconButton
            aria-label="add icon"
            onClick={() => setIconsOpened((prev) => !prev)}
          >
            <Icon component={iconsData[groupData.icon]} />
          </IconButton>
          {isCreateModal ? <h2>New Group</h2> : <h2>Edit Group</h2>}
        </div>
        <Input
          placeholder="Enter group title"
          value={groupData.title}
          onChange={handleTitle}
        />
        <Fade
          collapse
          when={iconsOpened}
          duration={800}
          delay={iconsOpened ? 800 : 0}
        >
          <div className={classes.iconsWrap} onClick={handleIcon}>
            {Object.entries(iconsData).map((el) => {
              return (
                <IconButton aria-label="set icon" key={el[0]}>
                  <Icon component={el[1]} data-name-icon={el[0]} />
                </IconButton>
              );
            })}
          </div>
          <div className={classes.buttonsWrap}>
            <Button onClick={handleResetIcon}>Reset Icon</Button>
          </div>
        </Fade>
        <Fade
          collapse
          when={!iconsOpened}
          duration={800}
          delay={!iconsOpened ? 800 : 0}
        >
          <div className={classes.colorsWrap}>
            <CirclePicker
              onChange={handleColor}
              color={groupData.themeColor}
              colors={COLORS}
              circleSize={25}
              circleSpacing={10}
              width={'245px'}
            />
          </div>
          <div className={classes.buttonsWrap}>
            <Button onClick={handleClose}>Cancel</Button>
            {isCreateModal ? (
              <Button onClick={handleCreateGroup} disabled={!groupData.title}>
                Create Group
              </Button>
            ) : (
              <Button onClick={handleEditGroup} disabled={!groupData.title}>
                Save
              </Button>
            )}
          </div>
        </Fade>
      </div>
    </Modal>
  );
};

export default ModalGroupInfo;
