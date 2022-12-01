import React, { useContext } from "react";
import { langOption } from '../languages';
import { LangContext } from "../context/languageContext";
import { Button, Dropdown } from 'semantic-ui-react'

const Switcher = () => {
    const { userLanguageChange, changeTheme } = useContext(LangContext);
    const handleChange = (e, { value }) => {
        userLanguageChange(value)
    };

    const handleButtonClick = (type) => {
        changeTheme(type)
    }

    return (
        <div className="lang-switcher">

            <Dropdown className='icon' button icon='world' floating
                labeled onChange={handleChange}
                text='Select Language' options={langOption} />

            <div className="theme-select">
                <label>Choose theme  </label>
                <Button.Group>
                    <Button color="black" onClick={() => handleButtonClick('black')}></Button>

                    <Button.Or />
                    <Button color="orange" onClick={() => handleButtonClick('orange')}></Button>
                    <Button.Or />
                    <Button color="purple" onClick={() => handleButtonClick('purple')}></Button>
                </Button.Group>
            </div>
        </div>
    )
}

export default Switcher