import React from 'react';

const Comments = React.createClass({
    renderComment(comments, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comments.user}</strong>
                    {comments.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    },

    render(){
        return (
            <div className="comments">
               {this.props.postComments.map(this.renderComment)}
               <form ref="commentsForm" className="comment-form">
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden />
               </form>
            </div>
        );
    }
});

export default Comments;