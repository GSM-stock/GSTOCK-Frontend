import styled from "@emotion/styled"

export const Position = styled.div`
  width: 100%;
  height: 100%;
  background: #fff48e;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Layout = styled.div`
  width: 84%;
  height: 86%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Banner = styled.div`
  width: 45%;
  height: 100%;
  background: #ffd162;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  gap: 20px;
  font-size: 14px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.35);
  position: absolute;
  transition: 1.3s ease-in-out;

  ${({ isLogin }: { isLogin: boolean | null }) => {
    if (isLogin === true) return "transform: translateX(0)"
    if (isLogin === false) return "transform: translateX(122.2%)"
  }}
`

export const Login = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.35);
`

export const Signup = styled(Login)`
  width: 70%;
  transition: 1.3s;

  ${({ isLogin }: { isLogin: boolean | null }) => {
    if (isLogin === true) return "width: 70%"
    if (isLogin === false) return "width: 45%"
  }}/* animation: animate 1.2s 1s ease-in-out alternate forwards; */
`

export const LoginBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 18px;

  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  > span {
    width: 100%;
    border: 1px solid #bcbcbc;
  }

  > div {
    display: flex;
    gap: 15px;

    > button {
      background: none;
      border: none;
      color: #4c79ff;
      font-size: 15px;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #ffd162;
  border: none;
  border-radius: 10px;
  font-size: 20px;
`
