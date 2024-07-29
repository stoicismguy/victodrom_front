import classes from './QuestionSettings.module.css'
import settings_svg from '../../../../assets/icons/settings-svgrepo-com.svg'


function QuestionSettings() {
    return (
        <div className={classes.settings_div}>
            <img src={settings_svg} width="40" alt="" className={classes.settings_svg}/>
            <ul className={classes.settings_list}>
                {/* <li className={classes.settings_item}><p>Доступ</p><select className={classes.settings_selector} name="access" id="access">
                <option value="public">публичный</option>
                <option value="private">приватный</option>
                </select>
                </li> */}

                <li className={classes.settings_item}><p>Тип вопроса</p><select className={classes.settings_selector} name="access" id="access">
                <option value="public">с выбором ответа</option>
                <option value="private">с вводом ответа</option>
                </select>
                </li>

            </ul>
        </div>
    );
}

export default QuestionSettings;