import { useStaticQuery } from "gatsby"
import filterImageString from "./filterImageString"
import handleHexToRgba from "./handleHexToRgba"
import useFilterImage from "./useFilterImage"

describe("Utils", () => {
  // beforeAll(() => {
  //   useStaticQuery.mockImplementationOnce(({ render }) =>
  //     render({
  //       query: {
  //         allImageSharp: {
  //           nodes: {
  //             gatsbyImageData: {
  //               layout: "constrained",
  //               backgroundColor: "#d8e8e8",
  //               images: {
  //                 fallback: {
  //                   src: "/static/88516d843c2753253de2e76f7533b876/3832f/default.jpg",
  //                   srcSet:
  //                     "/static/88516d843c2753253de2e76f7533b876/fdd27/default.jpg 480w,\n/static/88516d843c2753253de2e76f7533b876/93fdb/default.jpg 960w,\n/static/88516d843c2753253de2e76f7533b876/3832f/default.jpg 1920w",
  //                   sizes: "(min-width: 1920px) 1920px, 100vw",
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     })
  //   )
  // })

  it("Return a string of rgba", () => {
    expect(handleHexToRgba("#fff", 1)).toBe("rgba(255,255,255, 1)")
  })

  it("Filter image src to file name", () => {
    expect(
      filterImageString(
        "https://www.google.com/logos/doodles/2021/fathers-day-2021-august-08-6753651837109004-law.gif"
      )
    ).toBe("fathers-day-2021-august-08-6753651837109004-law.gif")
  })

  // it("Image query hook", () => {
  //   expect(useFilterImage("default")).not.toBe(undefined)
  // })
})
