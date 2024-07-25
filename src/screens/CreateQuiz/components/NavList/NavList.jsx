import classes from './NavList.module.css'
import plus_svg from '../../../../assets/icons/add-square-svgrepo-com.svg'

function NavList(props) {
    // const list = [1,2,3,4,5,6];

    return (
        <ul className={classes.nav_list}>
            {props.data.map((n, index) => {
                return <li className={classes.list_item} id={index}>{index+1}</li>
            })}
            <li className={classes.add_q} id='add_q'><img src={plus_svg} alt="Add" width="110" onClick={props.new}/></li>
        </ul>
    );

}

export default NavList;