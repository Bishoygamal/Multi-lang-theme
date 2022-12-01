import React,{useContext} from "react";
import { Container } from "semantic-ui-react";
import { LangContext } from "../context/languageContext";

const Wrapper = ({children})=>{
    const {userLanguage,themeType} =useContext(LangContext)
    return(
        //receive uselanguage and themetype from context to change theme direction and colors 
        <Container>
        <div className={userLanguage +" "+ themeType}>
            {children}
        </div>
        </Container>
    )
}

export default Wrapper;