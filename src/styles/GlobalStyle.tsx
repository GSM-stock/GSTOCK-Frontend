import React from "react"
import { Global, css } from "@emotion/react"
import "react-toastify/dist/ReactToastify.css"

const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default function GlobalStyle() {
  return <Global styles={style} />
}
