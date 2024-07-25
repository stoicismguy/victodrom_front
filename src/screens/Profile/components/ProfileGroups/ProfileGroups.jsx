import classes from './ProfileGroups.module.css'

function ProfileGroups() {
    return (
        <div className={classes.profile_groups_div}>
            <ul className={classes.groups_list}>
                <li>Some</li>
                <li>FAg</li>
                <li>PRO</li>
                <li>Simple</li>
            </ul>
        </div>
    );
}

export default ProfileGroups