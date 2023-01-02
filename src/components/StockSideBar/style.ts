import styled from "@emotion/styled"

type SideToggleType = {
  active: boolean
}

export const Layer = styled.div<SideToggleType>`
  width: ${({ active }) => (active ? "320px" : "113px")};
  height: 100%;
  transition: 0.5s;
  min-width: 16%;
`

export const ItemList = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`

export const SearchLayer = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
type SearchInputType = {
  active: boolean
}

export const SearchWrapper = styled.div<SearchInputType>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  transition: 0.5s;
  i {
    transition: 0.5s;
    position: absolute;
    top: 0;
    left: ${(e) => (e.active ? "-100%" : "0")};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    gap: 10px;
    padding-right: 10px;
  }
  input {
    transition: 0.5s;
    left: ${(e) => (e.active ? "0" : "100%")};
  }
`

export const SearchInput = styled.input`
  position: absolute;
  top: 0;

  left: 100%;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  padding: 20px;
  display: flex;

  ::placeholder {
    transition: 0.5s;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
  }
  :focus {
    border: 1px solid black;
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`

export const SearchItemList = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  width: 100%;
  height: 360px;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`

export const Item = styled.div`
  width: auto;
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-bottom: 1px solid #d9d9d9;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: auto;
    height: 100%;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      color: #000000;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #000000;
    }
  }
`

export const ItemImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
`
