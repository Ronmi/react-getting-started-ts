/// <reference path="../../typings/globals/mocha/index.d.ts" />

import * as React from "react";
import { shallow, render } from "enzyme";
import Comment from "../../src/components/Comment";
import { expect } from "chai";

describe("<Comment author=\"test\">*test* html</Comment>", () => {
    const comment = <Comment author="test">*test* html</Comment>;
    it("has exactly one h2 and one span.", () => {
	const wrapper = shallow(comment);
        expect(wrapper.find("h2")).to.have.length(1);
        expect(wrapper.find("span")).to.have.length(1);
    });

    it("has author name in the h2.", () => {
	const wrapper = shallow(comment);
        expect(wrapper.find("h2").text()).to.equal("test");
    });

    it("executes remarkable on comment and puts result in the span.", () => {
	const wrapper = render(comment);
	expect(wrapper.find("span em")).to.have.length(1);
    });

    it("has comment in the span (ignore heading and trailing space characters due to HTML spec).", () => {
	const wrapper = render(comment);
	expect(wrapper.find("span").text().trim()).to.equal("test html");
    });
});
