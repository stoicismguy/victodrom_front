import classes from './MenuList.module.css'

function MenuItem (props) {
    return (
        <li>
            <a href={props.href} className={classes.menu_item}>
                <img src={props.image} width="30" alt="img" />
                <p>{props.text}</p>
            </a>
        </li>
    );
}

export default MenuItem