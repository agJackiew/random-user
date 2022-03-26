import { Fragment } from 'react';
import Header from './Header';
import styles from './Main.module.scss';

const Main = (props) => {
  return (
    <Fragment>     
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Main;