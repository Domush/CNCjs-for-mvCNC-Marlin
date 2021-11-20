import React from 'react';
import styles from './index.styl';

const HelpCard = ({ title, text, link, icon, linkText }) => {
  return (
    <div className={styles.cardBase}>
      <a href={link} target="_blank" className={styles.overLink}>
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
      <a className={styles.cardLink} target="_blank" href={link}>
        {linkText}
      </a>
    </div>
  );
};

export default HelpCard;
