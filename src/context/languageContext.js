import React,{createContext,useState} from "react";
import {allLang} from '../languages'

export const LangContext = createContext({
    userLanguage: 'en',
    // allLang: allLang.English
})

export function LanguageProvider({children}){
  
    const [userLanguage, setUserLanguage] = useState('en')
    const [currentLang,setCurrentLang]=useState(allLang['en'])
    const [themeType,setThemeType]=useState('light');

    //
    const provider = {
        userLanguage,
        currentLang,
        userLanguageChange : (selected)=>{   
            setUserLanguage(selected);
            setCurrentLang(allLang[selected])
           
        },
        themeType,
        changeTheme(brand){
            setThemeType(brand)
        }


    }
    return (
        <LangContext.Provider value={provider}>
                 {children}
        </LangContext.Provider>
    )
}