import React from "react";
const Card = ({ArticleHeader,ArticleBody}) => {
    return (
      
            <div className="ui card"><div className="content">
                <div className="header">{ArticleHeader}</div>
        
                <div className="description">{ArticleBody}</div>
            </div>
      
</div>

    )
}

export default Card;