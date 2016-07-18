/// <reference path="../../typings/globals/mocha/index.d.ts" />

import * as React from "react";
import { shallow } from "enzyme";
import Comment from "../../src/components/Comment";
import * as model from "../../src/comment";
import { expect } from "chai";

describe("<Comment />", () => {
    const wrapper = shallow(<Comment author="test">*test* html</Comment>);
    it("has exactly one h2 and one span.", () => {
        expect(wrapper.find("h2")).to.have.length(1);
        expect(wrapper.find("span")).to.have.length(1);
    });
});
