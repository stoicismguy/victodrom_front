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
            href: "me",
            image: svg_profile,
            text: "Профиль",
            link_name: ""
        },
        {
            href: "my-quizzes",
            image: svg_my_quiz,
            text: "Мои викторины",
            link_name: ""
        },
        {
            href: "#",
            image: svg_solved,
            text: "Пройденные викторины",
            link_name: "solved-quizzes"
        },
        {
            href: "#",
            image: svg_create,
            text: "Создать викторину",
            link_name: "create"
        },
        {
            href: "#",
            image: svg_groups,
            text: "Мои группы",
            link_name: "groups"
        },
    ]


    return (
        <div className={classes.menu_div}>
            <ul className={classes.menu_list}>
                {buttons.map((item) => {
                    return <MenuItem href={item.href} image={item.image} text={item.text}></MenuItem>
                })}
            </ul>
            <BackButton></BackButton>
        </div>   
    );
}
export default MenuList