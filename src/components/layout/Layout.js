import { Fragment } from 'react';
import Header from './Header';
import Main from './Main';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Main>{props.children}</Main>
    </Fragment>
  );
};

export default Layout;