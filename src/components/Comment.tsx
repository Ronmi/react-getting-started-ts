import * as React from "react";
// TODO: fix the type definitions of remarkable.js
declare class Remarkable{render(str:string):string};

// define properties used in Comment component
export interface CommentProps {
    author: string;
    children?: React.ReactNode;
}

export default class Comment extends React.Component<CommentProps, {}> {
    render() {
	let md = new Remarkable();
	return (
	    <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              {md.render(this.props.children.toString())}
	    </div>
	);
    }
}
