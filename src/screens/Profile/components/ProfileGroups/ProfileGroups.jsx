import classes from './ProfileGroups.module.css'

function ProfileGroups() {
    return (
        <div className={classes.profile_groups_div}>
            <ul className='flex flex-wrap gap-1 w-full *:rounded-full *:border *:border-indigo-400 *:bg-indigo-200 *:px-2 *:py-0.5'>
                <li>Some</li>
                <li>FAg</li>
                <li>PRO</li>
                <li>Simple</li>
            </ul>
        </div>
    );
}

export default ProfileGroups