import styled from "@emotion/styled"

type LayerType = {
  actio: boolean
}

export const Layer = styled.div`
  transition: 0.5s;
  width: 284px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
`

export const Nav = styled.nav`
  width: 100%;
  height: 62px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

type SelectInforBtn = {
  action: string
}

export const SelectInforBtn = styled.h1<SelectInforBtn>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  cursor: pointer;
  ${({ action }) => {
    switch (action) {
      case "매수":
        return "color:#B93939;border-bottom: 1px solid #b93939;"
      case "매도":
        return "color:#3959B9;border-bottom: 1px solid #3959B9;"
      case "상세정보":
        return "color:#B9AC39;border-bottom: 1px solid #B9AC39;"
      default:
        return "color:#000000;"
    }
  }};
  white-space: nowrap;
`
export const InformLayer = styled.div`
  width: 100%;
  height: 119px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  white-space: nowrap;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #bcbcbc;
  }
`
export const ItemImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
`

export const ModeForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

//buyform

export const BuyFormLayer = styled.div`
  width: 217px;
  height: 100%;
`

export const BuyForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    width: 218px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 38px;
    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: #ababab;
    }
    span {
      position: relative;
      width: 100%;
      height: auto;
      a {
        width: auto;
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
      input {
        width: 100%;
        height: 42px;
        background: #ffffff;
        border: 1px solid #d9d9d9;
        text-align: right;
        padding: 0 30px;
      }
    }
    :nth-child(1) {
      input {
        :focus {
          outline: none;
        }
      }
    }
  }
`

export const BuyInform = styled.div`
  margin-top: 89px;
  width: 100%;
  height: auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: #ababab;
  > p {
    font-size: 13px;
    width: 100%;
    text-align: end;
    a {
      color: #b93939;
    }
  }
  div {
    width: 100%;
    height: auto;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    a {
      color: #000000;
    }
  }
`

type BuyBtnType = {
  colorMode: string
}

export const BuyBtn = styled.button<BuyBtnType>`
  width: 100%;
  height: 40px;
  background: ${({ colorMode }) => colorMode};
  outline: none;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
`
