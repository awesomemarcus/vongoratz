import React from 'react';
import Loadable from 'react-loadable';
// import { platform } from 'Config';

export default Loadable({
  loader: () => import(/* webpackChunkName: "proposal-investments" */'./web'),
  loading() {
    return <h3>loading...</h3>;
  },
});