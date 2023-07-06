'use client';

/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import { reduxStore } from '@/lib/redux';

let hola = ' hola';

const ReduxProvider = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
export default ReduxProvider;
