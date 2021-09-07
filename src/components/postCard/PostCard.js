import React from 'react';
import './postCard.css';

class PostCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="postcard-blocks">
                <div className="postcard">
                    <div className="postcard_authors">
                        <span className="create_name">{this.props.createName}</span>
                        <span className="create_date">{this.props.createDate}</span>
                    </div>
                    <div className="postcard_img">
                        <img className="postcard__img" src="https://picsum.photos/1200/200" alt=""/>
                    </div>
                    <div className="postcard_title">
                        <a href="#">{this.props.title}</a>
                    </div>
                </div>
            </div>
        )
    }
}

PostCard.defaultProps = {
    createName:'Автор неизвестен',
    createDate:'Дата не указано',
    title:'...'
}

export default PostCard;

