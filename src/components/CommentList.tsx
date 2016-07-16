import * as React from "react";
import Comment from "./Comment";
import * as model from "../comment";

export interface CommentListProps {
    data: model.Comment[];
}

// defined no property, since we don't need it now.
export default class CommentList extends React.Component<CommentListProps, {}> {
    render() {
	let nodes = this.props.data.map((c:model.Comment) => {
	    return (
		<Comment author={c.author} key={c.id}>
		    {c.text}
		</Comment>
	    );
	});
	return (
	    <div className="commentList">
		{nodes}
	    </div>
	);
    }
}
