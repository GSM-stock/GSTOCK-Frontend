import * as S from "./style"
import * as SVG from "../../../public/svg"
import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [input, setInput] = useState("")

  useEffect(() => {
    const readMeta = async () => {
      try {
        const meta = await axios.get("https://www.kakaocorp.com/page/")
        console.log("kakao", meta)
      } catch (e) {
        console.log(e)
      }
    }
    readMeta()
  }, [])
  useEffect(() => {
    const readMeta = async () => {
      try {
        const meta = await axios.get("https://grig.gsm.dev/")
        console.log("ss", meta)
      } catch (e) {
        console.log(e)
      }
    }
    readMeta()
  }, [])
  return (
    <S.Layer>
      <S.Logo>
        <SVG.Logo size={36} />
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
