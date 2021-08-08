import React from "react"
import renderer from "react-test-renderer"
import Scroll from "../index"

describe("Scroll", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Scroll />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
