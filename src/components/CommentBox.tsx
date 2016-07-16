import * as React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import * as model from "../comment";


export interface CommentBoxProps {
    url: string;
    pollInterval: number;
}

export interface CommentBoxState {
    data: model.Comment[];
}

export default class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
    constructor(props?: CommentBoxProps, context?: any) {
	super(props, context);
	this.state = {data:[]};
    }

    loadComments() {
	$.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    cache: false,
	    success: (data:any) => {
		this.setState({data: data as model.Comment[]});
	    },
	    error: (xhr:JQueryXHR, status:string, err:string) => {
		console.error(this.props.url, status, err);
	    }
	});
    }

    handleCommentSubmit(c:model.Comment) {
	let comments = this.state.data;
	c.id = Date.now();
	this.setState({data: comments.concat([c])});

	$.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    type: 'POST',
	    data: c,
	    success: (data:any) => {
		this.setState({data: data as model.Comment[]});
	    },
	    error: (xhr:JQueryXHR, status:string, err:string) => {
		this.setState({data: comments});
		console.error(this.props.url, status, err.toString());
	    }
	});
    }

    componentDidMount() {
	this.loadComments();
	setInterval(() => {this.loadComments()}, this.props.pollInterval);
    }

    render() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
	    </div>
	);
    }
}
