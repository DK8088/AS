import React from 'react';
import style from './style.module.css';

const GridColumn = ({ columnType, children, columnCount = 3 }) => {
    return (
        <div className={`${style.gridColumnWrapper} ${style.columnCount}${columnCount} ${style?.[columnType] || ''}`}>
            <div className={`${style.gridColumn}`}>
                {children}
            </div>
        </div>
    )
}

export default GridColumn;