import styled from "@emotion/styled"

type LayerType = {
  action: boolean
}

export const Layer = styled.div<LayerType>`
  transition: 0.5s;
  width: ${({ action }) => (action ? "0" : "284px")};
  visibility: ${({ action }) => (action ? "hidden" : "visible")};
  /* height: auto; */
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

//buyform

export const BuyFormLayer = styled.div`
  width: 100%;
  height: 100%;
`

export const BuyForm = styled.form`
  width: 100%;
  height: 150px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 218px;
      height: 42px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
    }
  }
`
