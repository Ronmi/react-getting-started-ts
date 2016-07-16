import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentBox from "./components/CommentBox.tsx";
import {data} from "./comment";

ReactDOM.render(
    <CommentBox url="http://127.0.0.1:4000/api/comments" />,
    document.getElementById('content')
);
