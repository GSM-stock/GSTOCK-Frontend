import styled from "@emotion/styled"

export const Layer = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    margin-right: 20px;
    cursor: pointer;
  }
`

export const StockHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
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

type StockValueType = {
  valueColor: boolean
}

export const StockValue = styled.div<StockValueType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  h1 {
    color: ${(e) => (!e.valueColor ? "#3959B9" : "#B93939")};
  }
  p {
    color: ${(e) => (!e.valueColor ? "#3959B9" : "#B93939")};
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
