import Router from "next/router"
import { ChangeEvent, LegacyRef, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as SVG from "../../../public/svg"
import * as S from "./style"

interface LoginType {
  id: string
  pw: string
}

interface SignupType extends LoginType {
  pwCheck: string
}

export default function UserPage() {
  const [isLogin, setLogin] = useState<boolean | null>(null)
  const [loginInfo, setLoginInfo] = useState<LoginType>({
    id: "",
    pw: "",
  })
  const [signupInfo, setSignupInfo] = useState<SignupType>({
    id: "",
    pw: "",
    pwCheck: "",
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  const onSubmit = () => {
    setLogin(true)
  }
  const onError = (err: any) => {
    if (err.id) return alert(err.id.message)
    if (err.pw) return alert(err.pw.message)
    if (err.pwCheck) return alert(err.pwCheck.message)

    console.log("tlqkf")
    setLogin(true)
  }

  const onSubmit2 = () => {
    Router.push("/stock")
  }
  const onError2 = (err: any) => {
    if (err.id) return alert(err.id.message)
    if (err.pw) return alert(err.pw.message)

    console.log("tlqkf")
    Router.push("/stock")
  }

  return (
    <S.Position>
      <S.Layout>
        <S.Signup isLogin={isLogin}>
          <S.LoginBox onSubmit={handleSubmit(onSubmit, onError)}>
            <S.Input
              type="text"
              placeholder="ID"
              {...register("id", {
                required: "이메일을 입력하지 않았습니다.",
              })}
            />
            <S.Input
              type="password"
              placeholder="password"
              {...register("pw", {
                required: "비밀번호를 입력하지 않았습니다.",
              })}
            />
            <S.Input
              type="password"
              placeholder="password check"
              {...register("pwCheck", {
                required: "비밀번호가 일치하지 않습니다.",
              })}
            />
            <S.ButtonContainer>
              <S.Button type="submit">Sign Up</S.Button>
            </S.ButtonContainer>
          </S.LoginBox>
        </S.Signup>
        <S.Login>
          <S.LoginBox onSubmit={handleSubmit(onSubmit2, onError2)}>
            <SVG.SmartBulb />
            <S.Input
              placeholder="ID"
              {...register("id2", {
                required: "이메일을 입력하지 않았습니다.",
              })}
            />
            <S.Input
              placeholder="password"
              type="password"
              {...register("pw2", {
                required: "비밀번호를 입력하지 않았습니다.",
              })}
            />
            <S.ButtonContainer>
              <S.Button type="submit">Login</S.Button>
              <span />
              <div>
                <span>Don&apos;t have an account?</span>
                <button type="button" onClick={() => setLogin(false)}>
                  Sign Up
                </button>
              </div>
            </S.ButtonContainer>
          </S.LoginBox>
        </S.Login>
        <S.Banner isLogin={isLogin}>
          <SVG.Logo size={1.8} />
          <h1>한국 모의 주식 투자 서비스</h1>
        </S.Banner>
      </S.Layout>
    </S.Position>
  )
}

// ;`&apos;`
