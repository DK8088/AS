import React from 'react';
import style from './style.module.css';

const GridRow = ({children, columnCount}) => {

  return (
    <div className={style.gridRowWrapper}>
        <div className={style.gridRow}>
            {children}
        </div>
    </div>
  )
}

export default GridRow;