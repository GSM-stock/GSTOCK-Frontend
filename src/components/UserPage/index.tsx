import { useState } from "react"
import * as SVG from "../../../public/svg"
import * as S from "./style"

export default function UserPage() {
  const [isLogin, setLogin] = useState<boolean | null>(null)

  return (
    <S.Position>
      <S.Layout>
        <S.Login>
          <S.LoginBox>
            <S.Input placeholder="ID" />
            <S.Input type="password" placeholder="password" />
            <S.Input type="password" placeholder="password check" />
            <S.ButtonContainer>
              <S.Button onClick={() => setLogin(true)}>Sign Up</S.Button>
            </S.ButtonContainer>
          </S.LoginBox>
        </S.Login>
        <S.Signup isLogin={isLogin}>
          <S.LoginBox>
            <SVG.SmartBulb />
            <S.Input placeholder="ID" />
            <S.Input type="password" placeholder="password" />
            <S.ButtonContainer>
              <S.Button>Login</S.Button>
              <span />
              <div>
                <span>Don&apos;t have an account?</span>
                <button onClick={() => setLogin(false)}>Sign Up</button>
              </div>
            </S.ButtonContainer>
          </S.LoginBox>
        </S.Signup>
        <S.Banner isLogin={isLogin}>
          <SVG.Logo size={1.8} />
          <h1>한국 모의 주식 투자 서비스</h1>
        </S.Banner>
      </S.Layout>
    </S.Position>
  )
}

// ;`&apos;`
