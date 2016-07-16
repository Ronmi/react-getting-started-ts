import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentBox from "./components/CommentBox.tsx";
import {data} from "./comment";

ReactDOM.render(
    <CommentBox data={data} />
    document.getElementById('content')
);
