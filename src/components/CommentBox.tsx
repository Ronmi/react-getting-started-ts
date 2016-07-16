import * as React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import * as model from "../comment";


export interface CommentBoxProps {
    url: string;
}

export interface CommentBoxState {
    data: model.Comment[];
}

export default class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
    constructor(props?: CommentBoxProps, context?: any) {
	super(props, context);
	this.state = {data:[]};
    }

    componentDidMount() {
	$.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    cache: false,
	    success: (data:any) => {
		this.setState({data: data as model.Comment[]});
	    },
	    error: (xhr:JQueryXHR, status:string, err:string) => {
		console.error(this.props.url, status, err);
	});
    }

    render() {
	return (
	    <div className="commentBox">
		<h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm />
	    </div>
	);
    }
}
