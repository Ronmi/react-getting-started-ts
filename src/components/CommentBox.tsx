import * as React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import * as model from "../comment";

export interface CommentBoxProps {
    data: model.Comment[];
}

export default class CommentBox extends React.Component<CommentBoxProps, {}> {
    render() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.props.data} />
		<CommentForm />
	    </div>
	);
    }
}
