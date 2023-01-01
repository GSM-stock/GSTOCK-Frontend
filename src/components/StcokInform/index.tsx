import { useState } from "react"
import { useRecoilState } from "recoil"
import { UserItem } from "../../atom/Atom"
import BuyForm from "./BuyForm"
import * as S from "./style"

export default function StcokInform({ stockInform }: { stockInform: boolean }) {
  const [itemCode, setItemCode] = useRecoilState(UserItem)

  const [selectMode, setSelectMode] = useState<"매수" | "매도" | "상세정보">(
    "매수"
  )
  return (
    <S.Layer action={stockInform}>
      <S.Nav>
        <S.SelectInforBtn
          onClick={() => setSelectMode("매수")}
          action={"매수" == selectMode ? "매수" : ""}
        >
          매수
        </S.SelectInforBtn>
        <S.SelectInforBtn
          onClick={() => setSelectMode("매도")}
          action={"매도" == selectMode ? "매도" : ""}
        >
          매도
        </S.SelectInforBtn>
        <S.SelectInforBtn
          onClick={() => setSelectMode("상세정보")}
          action={"상세정보" == selectMode ? "상세정보" : ""}
        >
          상세정보
        </S.SelectInforBtn>
      </S.Nav>
      <S.InformLayer>
        {itemCode.logo && <S.ItemImg src={itemCode.logo} />}
        <div>
          <h1>{itemCode.ko_name}</h1>
          <p>{itemCode.code}</p>
        </div>
      </S.InformLayer>
      <BuyForm />
    </S.Layer>
  )
}
