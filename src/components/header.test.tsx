import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import React from "react"
import Header from "./header"

test("renders correctly", () => {
  const siteTitle = "Finances Manager"
  const { getByText } = render(<Header siteTitle={siteTitle} />)
  expect(getByText(siteTitle)).toBeInTheDocument()
})
