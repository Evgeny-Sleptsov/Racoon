import React from 'react';
import ModalGroupInfo from './GroupInfo';
import ModalCreateTask from './CreateTask';
import ModalLoader from './Loader';

const Modal: React.FC = () => {
  return (
    <React.Fragment>
      <ModalGroupInfo />
      <ModalCreateTask />
      <ModalLoader />
    </React.Fragment>
  );
};

export default Modal;
