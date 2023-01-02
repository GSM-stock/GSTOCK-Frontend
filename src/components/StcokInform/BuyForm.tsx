import { useState } from "react"
import { useRecoilValue } from "recoil"
import { DataInform } from "../../atom/Atom"
import * as S from "./style"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

export default function BuyForm({ mode }: { mode: string }) {
  const inForm = useRecoilValue(DataInform)
  const [amount, setAmount] = useState("")

  return (
    <S.BuyFormLayer>
      <S.BuyForm>
        <label htmlFor="price">
          <a>가격</a>
          <span>
            <input id="price" type="text" readOnly value={inForm.price} />
            <a>원</a>
          </span>
        </label>
        <label htmlFor="amount">
          <a>수량</a>
          <span>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
              autoComplete="off"
            />
            <a>주</a>
          </span>
        </label>
      </S.BuyForm>
      <S.BuyInform>
        <div>
          <p>주문총액</p>
          <p>
            <a>{inForm.price * Number(amount)}</a> 원
          </p>
        </div>
      </S.BuyInform>
      <S.BuyBtn
        onClick={() => {
          if (inForm.price * Number(amount) === 0)
            toast.error(`${mode}에 실패하였습니다.`)
          else {
            toast.success(`${mode}에 성공하였습니다.`)
          }
          setAmount("")
        }}
        colorMode={mode == "매수" ? "#FC4B4B" : "#4C79FF"}
      >
        {mode == "매수" ? "매수" : "매도"}
      </S.BuyBtn>
    </S.BuyFormLayer>
  )
}
