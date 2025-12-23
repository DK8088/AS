import style from './style.module.css';

const GridColumn = ({ wrapperClass = '', className = '', animateClass = '', children, col = '' }) => {

    return (
        <div className={`${animateClass} ${style.gridColumnWrapper} ${style?.[col] || ''}  ${style?.[wrapperClass] || ''}`}>
            <div className={`${style.gridColumn} ${style[className] || ''}`}>
                {children}
            </div>
        </div>
    )
}

export default GridColumn;