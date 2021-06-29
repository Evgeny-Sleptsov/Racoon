import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
export interface ButtonCreateProps {
  title: string;
  onClick(): void;
}

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    outline: 'none',
    border: 'none',
    padding: '10px 20px',
    width: '90%',
    transform: 'translateX(-50%)',
    fontSize: '16px',
    lineHeight: '1.5',
    color: 'white',
    fontWeight: 600,
    backgroundColor: 'black',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
});

const ButtonCreateGroup: React.FC<ButtonCreateProps> = ({ onClick, title }) => {
  const styles = useStyles();

  return (
    <button type="button" onClick={onClick} className={styles.root}>
      {title}
    </button>
  );
};

export default ButtonCreateGroup;
