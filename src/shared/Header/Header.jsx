import logo from '../../assets/icons/atom.svg'
import profilePhoto from '../../assets/profile.png'
import logout from '../../assets/icons/logout.svg'
import classes from './Header.module.css'

function CommonHeader() {
    return (
        <header className={classes.header}>
            <p className={classes.title}>Виктодром</p>
            <img src={logo} width="40" alt="logo" />           
            <div className={classes.profile_nav}>
                <div className={classes.profile_info}>
                    <p>stoicismguy</p>
                    <img src={profilePhoto} width="40" alt="user_photo" className='h-auto'/>
                </div>              
                <img src={logout} width="20" alt="Leave_btn" />   
            </div>
        </header>
    );
}

export default CommonHeader;