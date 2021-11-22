// import both default and named
import React from 'react';
import { useState, useEffect } from 'react';
import pubsub from 'pubsub-js';
import cx from 'classnames';
import styles from './index.styl.js';
import ConfirmationDialogButton from './ConfirmationDialogButton.js';
import { DIALOG_CONFIRM, DIALOG_CANCEL } from './ConfirmationDialogLib.js';

const ConfirmationDialog = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);
  //const [buttons, setButtons] = useState([]);
  const [content, setContent] = useState(null);
  const [onClose, setOnClose] = useState(null);
  const [onConfirm, setOnConfirm] = useState(null);
  const [confirmLabel, setConfirmLabel] = useState(null);
  const [cancelLabel, setCancelLabel] = useState(null);

  let hideModal = !show;

  useEffect(() => {
    hideModal = !show;
  }, [show]);

  useEffect(() => {
    pubsub.subscribe('dialog:new', (event, options) => {
      setTitle(options.title);
      //setButtons(options.buttons);
      setContent(options.content);
      setOnClose(() => options.onClose);
      setOnConfirm(() => options.onConfirm);
      setConfirmLabel(options.confirmLabel);
      setCancelLabel(options.cancelLabel);
      setShow(true);
    });
  });

  return (
    <div className={cx(styles.confirmationDialogWrapper, { [styles.hidden]: hideModal })}>
      <div className={styles.confirmationDialog}>
        <div className={styles.confirmationBar} />
        <div className={styles.confirmationDialogTitle}>
          <i className="fas fa-exclamation-triangle" />
          <span>{title}</span>
        </div>
        <div className={styles.confirmationDialogContent}>{content}</div>
        <div className={styles.confirmationDialogButtons}>
          <ConfirmationDialogButton
            onClick={() => {
              if (onClose !== null) {
                onClose();
              }
              return setShow(false);
            }}
            variant={DIALOG_CANCEL}
          >
            {cancelLabel}
          </ConfirmationDialogButton>
          <ConfirmationDialogButton
            onClick={() => {
              if (onConfirm !== null) {
                onConfirm();
              }
              return setShow(false);
            }}
            variant={DIALOG_CONFIRM}
          >
            {confirmLabel}
          </ConfirmationDialogButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
