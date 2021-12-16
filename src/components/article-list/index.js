import React from 'react'
import TypeHeader from './part/type-header'


class ArticleList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (<div className='article-list'>
            <TypeHeader></TypeHeader>
        </div>)
    }
}

export default ArticleList