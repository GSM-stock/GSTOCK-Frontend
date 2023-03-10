import StockSideBar from "../StockSideBar"
import StcokHeader from "../StockHeader"
import * as S from "./style"
import StcokInform from "../StcokInform"
import { useState } from "react"
import MainStock from "../MainStock"

export default function StockPage() {
  // const [stockInform, setStockInform] = useState<boolean>(false)

  return (
    <S.Layer>
      <S.Section>
        <StockSideBar />
        <S.StcokSection>
          <StcokHeader
          // informHandle={() => setStockInform((prev) => !prev)}
          />
          <S.StcokLayer>
            <MainStock />
            <StcokInform
            // stockInform={stockInform}
            />
          </S.StcokLayer>
        </S.StcokSection>
      </S.Section>
    </S.Layer>
  )
}
