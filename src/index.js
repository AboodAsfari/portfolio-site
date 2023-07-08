import React from 'react';
import ReactDOM from 'react-dom/client';
import DesktopApp from './Desktop/App';
import MobileApp from './Mobile/App';
import { isMobile } from 'react-device-detect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  isMobile ? <MobileApp /> : <DesktopApp />
);
