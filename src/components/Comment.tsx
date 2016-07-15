import * as React from "react";
// TODO: fix the type definitions of remarkable.js
declare class Remarkable{render(str:string):string};

// define properties used in Comment component
export interface CommentProps {
    author: string;
    children?: React.ReactNode;
}

export default class Comment extends React.Component<CommentProps, {}> {
    rawMarkup():{__html:string} {
	let md = new Remarkable();
	let html = md.render(this.props.children.toString());
	return {
	    __html: html
	};
    }

    render() {
	return (
	    <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              <span dangerouslySetInnerHTML={this.rawMarkup()} />
	    </div>
	);
    }
}
