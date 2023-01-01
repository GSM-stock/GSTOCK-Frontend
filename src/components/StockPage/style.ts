import styled from "@emotion/styled"

export const Layer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  padding: 20px;
`

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const StcokSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const StcokLayer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  overflow: hidden;
`

export const MainStock = styled.div`
  width: 100%;
  height: auto;
  background: red;
`
