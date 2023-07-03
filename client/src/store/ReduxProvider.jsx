'use client';

import { Provider } from 'react-redux';
/* Core */

/* Instruments */
import { store } from './store';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
