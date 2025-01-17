import classes from './NavList.module.css'
import plus_svg from '../../../../assets/icons/add-square-svgrepo-com.svg'

function NavList(props) {
    // const list = [1,2,3,4,5,6];

    return (
        <ul className={classes.nav_list}>
            {props.data.map((n, index) => {
                return <li className={`${classes.list_item} ${props.current_question === index ? classes.current_question : ""}`} id={index} onClick={() => {props.functions.change_question_number(index)}} >{index+1}</li>
            })}
            <li className={classes.add_q} id='add_q'><img src={plus_svg} alt="Add" width="110" onClick={props.functions.new_question}/></li>
        </ul>
    );

}

export default NavList;