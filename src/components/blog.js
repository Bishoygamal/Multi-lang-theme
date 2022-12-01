import React,{useContext} from "react";
import { Grid } from "semantic-ui-react";
import { LangContext } from "../context/languageContext";
import Card from "./card";

const Blog = ()=>{
    const {currentLang} =useContext(LangContext)
    return(
       
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <h1>{currentLang.WelcomeMessage}</h1>
                </Grid.Column>
                <Grid.Column>
                    <Card ArticleHeader={currentLang.articleTitle} ArticleBody={currentLang.articleBody}/>
                </Grid.Column>
            </Grid.Row>
         
        </Grid>
    )
}

export default Blog;