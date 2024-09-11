import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/custom/Header';

function Root() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Root;
