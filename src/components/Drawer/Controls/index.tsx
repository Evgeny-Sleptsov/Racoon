import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../../../actions/drawer';
import { deleteGroup } from '../../../actions/groups';
import { openEditGroupModal } from '../../../actions/modals';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'black',
    zIndex: 1,
  },
});

const useMenuStyle = makeStyles({
  paper: {
    backgroundColor: '#212121',
    color: 'white',
    borderRadius: '5px',
  },
});

const DrawerControls: React.FC = () => {
  const styles = useStyles();
  const menuStyles = useMenuStyle();
  const [menuEl, setMenuEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const handleBackToHome = (): void => {
    dispatch(toggleDrawer(false));
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setMenuEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setMenuEl(null);
  };

  const handleDeleteGroup = (): void => {
    dispatch(deleteGroup());
    setMenuEl(null);
  };

  const handleEditGroup = (): void => {
    dispatch(openEditGroupModal());
    setMenuEl(null);
  };

  return (
    <div className={styles.root}>
      <IconButton
        onClick={handleBackToHome}
        aria-label="back to home"
        color={'inherit'}
      >
        <KeyboardBackspaceIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-controls="group-setting"
        color={'inherit'}
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <MoreVertIcon fontSize="large" />
      </IconButton>
      <Menu
        id="group-setting"
        classes={menuStyles}
        anchorEl={menuEl}
        keepMounted
        open={Boolean(menuEl)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleEditGroup}>Edit Group</MenuItem>
        <MenuItem onClick={handleDeleteGroup}>Delete Group</MenuItem>
      </Menu>
    </div>
  );
};

export default DrawerControls;
