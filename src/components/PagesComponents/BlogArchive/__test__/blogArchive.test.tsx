import React from "react"
import renderer from "react-test-renderer"
import BlogArchive from "../index"

describe("Blog Archive", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BlogArchive />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
