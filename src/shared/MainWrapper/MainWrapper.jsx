import classes from './MainWrapper.module.css'

function MainWrapper({children}) {
    return (
        <div className={classes.div}>
            {children}
        </div>
    );
}

export default MainWrapper