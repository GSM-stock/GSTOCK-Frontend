import { useState } from "react"
import { useRecoilState } from "recoil"
import { UserItem } from "../../atom/Atom"
import BuyForm from "./BuyForm"
import * as S from "./style"

export default function StcokInform() {
  // { stockInform }: { stockInform: boolean }
  const [itemCode, setItemCode] = useRecoilState(UserItem)

  const [selectMode, setSelectMode] = useState<"매수" | "매도">("매수")
  return (
    <>
      <S.Layer
      //  actio={stockInform}
      >
        <S.Nav>
          <S.SelectInforBtn
            onClick={() => setSelectMode("매수")}
            action={"매수" === selectMode ? "매수" : ""}
          >
            매수
          </S.SelectInforBtn>
          <S.SelectInforBtn
            onClick={() => setSelectMode("매도")}
            action={"매도" === selectMode ? "매도" : ""}
          >
            매도
          </S.SelectInforBtn>
        </S.Nav>
        <S.InformLayer>
          {itemCode.logo && <S.ItemImg src={itemCode.logo} />}
          <div>
            <h1>{itemCode.ko_name}</h1>
            <p>{itemCode.code}</p>
          </div>
        </S.InformLayer>
        <S.ModeForm>
          {(selectMode == "매수" || selectMode == "매도") && (
            <BuyForm mode={selectMode} />
          )}
        </S.ModeForm>
      </S.Layer>
    </>
  )
}
