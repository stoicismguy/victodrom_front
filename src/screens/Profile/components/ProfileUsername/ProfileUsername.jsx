import profile_png from '../../../../assets/profile.png'
import classes from './ProfileUsername.module.css'

function ProfileUsername() {
    return (
        <div className={classes.profile_username}>
            <img src={profile_png} alt="photo" width="144" className={classes.profile_img}/>
            <div className={classes.username_div}>
                <div>
                    <p className={classes.username_label}>Имя</p>
                    <input className={classes.username_input} type="text" value="Даниил админ"/>
                </div>
                <div>
                    <p className={classes.username_label}>Никнейм</p>
                    <input className={classes.username_input} type="text" value="stoicismguy"/>
                </div>
                <button type="button" className={classes.save_button}>Сохранить</button>            
            </div>
        </div>
    );
}

export default ProfileUsername;