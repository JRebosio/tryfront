import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  notifications?: string;
  avatar?: string;
  showLoginSection?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <a className={styles.home}>Home</a>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
