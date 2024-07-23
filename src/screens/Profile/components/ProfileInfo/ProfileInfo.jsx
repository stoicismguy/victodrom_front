import classes from './ProfileInfo.module.css'
import ProfileUsername from '../ProfileUsername/ProfileUsername';

function ProfileInfo() {
    return (
        <div className={classes.profile_info_div}>
            <ProfileUsername></ProfileUsername>
        </div>
    );
}

export default ProfileInfo