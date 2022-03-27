import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

  const location = useLocation();
  const path = location.pathname;

  const users = useSelector(state => state.usersList.users);

  const [transparent, setTransparent] = useState(false);

  const [navMob, setNavMob] = useState(false);

  const showNavMob = () => {
    setNavMob(navMob => !navMob);
  }

  const changeOpacity = () => {
    setTransparent((window.scrollY >=10) ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeOpacity)
  })

  return (
    <header className={`${styles['header']} ${transparent && styles['header--transparent']}`}>
      <div className={styles.header__title}>User Generator</div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__ul}>
          <li>
            {(path === '/users') && <Link to='/random-user' className={`${styles['header__link']} ${transparent && styles['header__link--transparent']}`}>Generate User</Link>}
            {(path === '/random-user') && <Link to='/users' className={`${styles['header__link']} ${transparent && styles['header__link--transparent']}`}>
              <span>My users</span>
              <span>{users.length}</span>
            </Link>}
          </li>
        </ul>
      </nav>
      <nav className={styles.header__navMob}>
      
      {navMob ? <FontAwesomeIcon icon={faXmark} onClick={showNavMob} size='2x' color='#fff' /> :
            <FontAwesomeIcon icon={faBars} onClick={showNavMob} size='2x' color='#fff' />}
        {navMob && 
          <ul className={styles.header__ul}>
            <li className={styles.header__li}>
              {(path === '/users') && <Link to='/random-user' className={`${styles['header__link']}`} onClick={() => setNavMob(false)}>Generate User</Link>}
              {(path === '/random-user') && <Link to='/users' className={`${styles['header__link']}`} onClick={() => setNavMob(false)}>
                <span>My users</span>
                <span>{users.length}</span>
              </Link>}
            </li>
          </ul>}
      </nav>
    </header>
  );
};

export default Header;