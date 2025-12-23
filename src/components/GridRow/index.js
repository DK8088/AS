import React from 'react';
import style from './style.module.css';

const GridRow = ({children, col}) => {

  return (
    <div className={`gridWrapper ${style.gridRowWrapper || ''} ${style.direction || ''}`}>
        <div className={style.gridRow}>
            {children}
        </div>
    </div>
  )
}

export default GridRow;