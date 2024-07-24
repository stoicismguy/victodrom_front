import classes from './MenuList.module.css'
import { Link } from 'react-router-dom';

function MenuItem (props) {
    return (
        <li>
            <Link to={"/profile/"+props.href} className={classes.menu_item}>
                <img src={props.image} width="30" alt="img" />
                <p>{props.text}</p>
            </Link>
        </li>
    );
}

export default MenuItem