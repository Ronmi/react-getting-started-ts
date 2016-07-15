import * as React from "react";

// define properties used in Comment component
export interface CommentProps {
    author: string;
    children: React.ReactChild;
}

export default class Comment extends React.Component<CommentProps, {}> {
    render() {
	return (
	    <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              {this.props.children}
	    </div>
	);
    }
}
