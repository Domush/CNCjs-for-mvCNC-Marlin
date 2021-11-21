import React from 'react';
import styles from './index.styl';

const HelpCard = ({ title, text, link, icon, linkText }) => (
  <div className={styles.cardBase}>
    <a href={link} target="_blank" className={styles.overLink} rel="noreferrer">
      {' '}
    </a>
    <div className={styles.externalIcon}>
      <i className="fas fa-external-link-alt" />
    </div>
    <h2>{title}</h2>
    <div className={styles.cardIcon}>
      <i className={`fa ${icon}`} />
    </div>
    <div className={styles.cardText}>{text}</div>
    <a className={styles.cardLink} target="_blank" href={link} rel="noreferrer">
      {linkText}
    </a>
  </div>
);

export default HelpCard;
