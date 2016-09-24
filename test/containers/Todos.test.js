/*global React*/
/*global describe it*/
/*global expect*/
import { Todos } from "containers/Todos";
import { shallow } from "enzyme";

describe("containers/Todos", () => {
  it("renders without an issue", () => {
    const subject = <Todos />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

