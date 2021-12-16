import classNames from 'classnames';
import React from 'react';

class TypeHeader extends React.Component {
    constructor(){
        super()
        this.state= {
            currentType:'全部',
            typeNameList: ['全部','精华','分享','问答','招聘','客户端测试']
        }
    }
    render(){
        const typeList = this.state.typeNameList.map(name => <li className= {
            classNames({
                'type-header__list-item':true,
                'is-active': this.state.currentType === name
            })
        }>{name}</li>)
        return (<div className='type-header'>
            <ul>{typeList}</ul>
        </div>)
    }
}

export default TypeHeader