import back_img from '../../assets/icons/back_arrow.svg'
import classes from './MenuList.module.css'

function BackButton() {
    return (
        <div className={classes.menu_list}>
            <a href="#" className={classes.menu_item}>
                <img src={back_img} width="30" alt="img" /><p>На главную</p>
            </a>
        </div>
    );
}
export default BackButton;