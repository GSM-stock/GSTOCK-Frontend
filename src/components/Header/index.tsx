import * as S from "./style"
import * as SVG from "../../../public/svg"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [input, setInput] = useState("")

  return (
    <S.Layer>
      <S.Logo>
        <SVG.Logo />
      </S.Logo>
      <S.NavWrapper>
        {/* <S.Search active={searchToggle}>
          <S.Icon onClick={() => setSearchToggle((prev) => !prev)}></S.Icon>
          <S.Input>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </S.Input>
        </S.Search>
        <S.DarkModeBtn active={darkMode}>
          <i onClick={() => setDarkMode(!darkMode)}>
            <SVG.SunIcon />
            <SVG.Moon />
          </i>
        </S.DarkModeBtn>
        <Link href="#">
          <SVG.TrophyIcon />
        </Link>
        <Link href="#">
          <SVG.Human />
        </Link> */}
      </S.NavWrapper>
    </S.Layer>
  )
}
