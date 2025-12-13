import React from 'react';
import style from './style.module.css';

const MainContent = ({children}) => {
  return (
    <main className={style.mainContent}>
        {children}
    </main>
  )
}

export default MainContent;