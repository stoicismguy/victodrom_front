import MenuItem from './MenuItem';
import BackButton from './BackButton';
import classes from './MenuList.module.css'

import svg_profile from '../../assets/icons/m_profile.svg'
import svg_my_quiz from '../../assets/icons/m_my.svg'
import svg_solved from '../../assets/icons/m_solved.svg'
import svg_create from '../../assets/icons/plus2.svg'
import svg_groups from '../../assets/icons/tag.svg'


function MenuList () {

    const buttons = [
        {
            href: "/profile/me",
            image: svg_profile,
            text: "Профиль",
            name: 'me'
        },
        {
            href: "/profile/my-quizzes",
            image: svg_my_quiz,
            text: "Мои викторины",
            name: 'my-quizzes'
        },
        {
            href: "/profile/solved-quizzes",
            image: svg_solved,
            text: "Пройденные викторины",
            name: 'solved-quizzes'
        },
        {
            href: "/quiz/create",
            image: svg_create,
            text: "Создать викторину",
            name: 'create'
        },
        {
            href: "/profile/groups",
            image: svg_groups,
            text: "Мои группы",
            name: 'groups'
        },
    ]
    const link = window.location.href.split("/")
    const active_button_name = link[link.length-1];

    return (
        <div className={classes.menu_div}>
            <ul className={classes.menu_list}>
                {buttons.map((item) => {
                    return <MenuItem href={item.href} image={item.image} text={item.text} active={active_button_name === item.name ? true : false}></MenuItem>
                })}
            </ul>
            <BackButton></BackButton>
        </div>   
    );
}
export default MenuList