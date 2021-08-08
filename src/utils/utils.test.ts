import filterImageString from "./filterImageString"
import handleHexToRgba from "./handleHexToRgba"

test("Return a string of rgba", () => {
  expect(handleHexToRgba("#fff", 1)).toBe("rgba(255,255,255, 1)")
})

test("Filter image src to file name", () => {
  expect(
    filterImageString(
      "https://www.google.com/logos/doodles/2021/fathers-day-2021-august-08-6753651837109004-law.gif"
    )
  ).toBe("fathers-day-2021-august-08-6753651837109004-law.gif")
})
