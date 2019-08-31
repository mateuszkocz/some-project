import { storiesOf } from "@storybook/react"
import React from "react"
import Header from "./header"

storiesOf(`Layout|Dashboard/Header`, module)
  .add("default", () => {
    return <Header siteTitle="Money Manager" />
  })
  .add("new", () => {
    return <Header siteTitle="Money Manager New" />
  })
