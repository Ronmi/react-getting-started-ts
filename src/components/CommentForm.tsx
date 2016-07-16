import * as React from "react";

export interface CommentFormState {
    author?: string;
    text?: string;
}

export default class CommentForm extends React.Component<{}, CommentFormState> {
    constructor(props?: {}, context?: any) {
	super(props, context);

	this.state = {
	    author: "",
	    text: ""
	};
    }

    handleAuthorChange(e:Event) {
	this.setState({author: (e.target as HTMLInputElement).value});
    }

    handleTextChange(e:Event) {
	this.setState({text: (e.target as HTMLInputElement).value});
    }

    handleSubmit(e:Event) {
	e.preventDefault();
	var author = this.state.author.trim();
	var text = this.state.text.trim();
	if (!text || !author) {
	    return;
	}
	// TODO: send request to the server
	this.setState({author: '', text: ''});
    }

    render() {
	return (
	    <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
		<input
		    type="text"
		    placeholder="Your name"
		    value={this.state.author}
		    onChange={this.handleAuthorChange.bind(this)} />
		<input
		    type="text"
		    placeholder="Say somethind..."
		    value={this.state.text}
		    onChange={this.handleTextChange.bind(this)} />
		<input type="submit" value="Post" />
	    </form>
	);
    }
};
