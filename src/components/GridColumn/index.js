import style from './style.module.css';

const GridColumn = ({ wrapperClass = '', className = '', animateClass = '', gridRef = {}, children, columnCount = 4 }) => {

    return (
        <div className={`${animateClass} ${style.gridColumnWrapper} ${style.columnCount}${columnCount} ${style?.[wrapperClass] || ''}`}>
            <div className={`${style.gridColumn} ${style[className] || ''}`}>
                {children}
            </div>
        </div>
    )
}

export default GridColumn;