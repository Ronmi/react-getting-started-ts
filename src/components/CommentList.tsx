import * as React from "react";

// defined no property, since we don't need it now.
export default class CommentList extends React.Component<{}, {}> {
    render() {
	return (
	    <div className="commentList">
		Hello, world! I am a CommentList.
	    </div>
	);
    }
}

