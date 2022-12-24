import styled from "@emotion/styled"

type ActiveType = {
  active: boolean
}

export const Layer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 2px solid #000000;
`

export const NavWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Search = styled.div<ActiveType>`
  position: relative;
  width: ${(e) => (e.active ? "360px" : "50px")};
  height: 50px;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 0 0 5px #2573ef;
  overflow: hidden;
  border: 1px solid black;
`

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 60px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #000000;
    border-radius: 50%;
    transform: translate(-4px, -4px);
  }
  ::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 16px;
    background: #000000;
    transform: translate(8px, 8px) rotate(315deg);
  }
`

export const Input = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 10px 10px;
  }
`
export const DarkModeBtn = styled.div<ActiveType>`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      transition: 0.7s;
      :nth-of-type(1) {
        transform: ${({ active }) =>
          active ? "scale(1) rotate(0deg)" : "scale(0) rotate(150deg)"};
      }
      :nth-of-type(2) {
        transform: ${({ active }) =>
          active ? "scale(0) rotate(150deg)" : "scale(1) rotate(-100deg)"};
      }
    }
  }
`
