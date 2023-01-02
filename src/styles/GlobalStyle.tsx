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
    width: 100%;
    height: 100%;
    max-width: 100vw;
    overflow: hidden;
    background: #fff;
  }

  body > #__next {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default function GlobalStyle() {
  return <Global styles={style} />
}
