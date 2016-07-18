/// <reference path="../../typings/globals/mocha/index.d.ts" />

import * as React from "react";
import { shallow, render } from "enzyme";
import CommentList from "../../src/components/CommentList";
import Comment from "../../src/components/Comment";
import * as model from "../../src/comment";
import { expect } from "chai";

describe("<CommentList data=2_comments />", () => {
    let data = [
        {id: 1, author: "test1", text: "text1"},
        {id: 2, author: "test2", text: "text2"},
    ];
    const list = <CommentList data={data} />;
    it("has exactly two <Comment>.", () => {
	const wrapper = shallow(list);
        expect(wrapper.find(Comment)).to.have.length(2);
    });
});
