import classes from './NavList.module.css'

function NavList(props) {
    // const list = props.list;
    const list = [1,2,3,4,5,6];

    return (
        <ul className={classes.nav_list}>
            {list.map((n, index) => {
                return <li className={classes.list_item} id={index}>{n}</li>
            })}
        </ul>
    );

}

export default NavList;