import logo from '../../assets/icons/atom.svg'
import profilePhoto from '../../assets/profile.png'
import logout from '../../assets/icons/logout.svg'
import classes from './Header.module.css'

import { Link } from 'react-router-dom'

function CommonHeader() {
    return (
        <header className={classes.header}>
            <Link to="/">
                <p className={classes.title}>Виктодром</p>
            </Link>
            <Link to="/">
                <img src={logo} className={classes.logo} width="40" alt="logo" />     
            </Link>       
            <div className={classes.profile_nav}>
                <Link className={classes.profile_info} to='/profile'>
                    <p className={classes.username}>stoicismguy</p>
                    <img src={profilePhoto} width="40" alt="user_photo" className='h-auto'/>
                </Link>              
                <img src={logout} width="20" alt="Leave_btn" />   
            </div>
        </header>
    );
}

export default CommonHeader;