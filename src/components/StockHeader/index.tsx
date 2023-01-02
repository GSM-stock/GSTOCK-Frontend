import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { DataInform, SelectDate, UserItem } from "../../atom/Atom"
import * as S from "./style"
import * as SVG from "../../../public/svg"

export default function StcokHeader() {
  //   {
  //   informHandle,
  // }: {
  //   informHandle: () => void
  // }
  type DataType = {
    code: string
    dt: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    volume_valued: number
    upper_limit_price: number
    lower_limit_price: number
    prev_close: number
  }
  const itemCode = useRecoilValue(UserItem)
  const [inForm, setInForm] = useRecoilState(DataInform)
  const [date, setDate] = useRecoilState(SelectDate)

  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.alphasquare.co.kr/data/v2/price/current-price?code=" +
            itemCode.code
        )
        setInForm({
          price: data[itemCode.code].close,
          change:
            100 -
            (data[itemCode.code].prev_close / data[itemCode.code].close) * 100,
        })
      } catch (e) {
        console.log(e)
      }
    }
    GetData()
  }, [itemCode, setInForm])

  return (
    <S.Layer>
      <S.StockHeaderTitle>
        {itemCode.logo && <S.ItemImg src={itemCode.logo} />}

        <>
          <h1>{itemCode.ko_name}</h1>
          <p>{itemCode.code}</p>
        </>
        {inForm.price !== 0 && (
          <>
            <S.StockValue valueColor={inForm.change >= 0 ? true : false}>
              <h1>{inForm.price.toFixed(2)}</h1>
              <p>
                {inForm.change >= 0
                  ? "+" + inForm.change.toFixed(2)
                  : inForm.change.toFixed(2)}
                %
              </p>
            </S.StockValue>
            <S.ChangeGrp>
              <S.SelectBtn
                select={date.date === "day"}
                onClick={() => setDate({ date: "day" })}
              >
                일
              </S.SelectBtn>
              <S.SelectBtn
                select={date.date === "week"}
                onClick={() => setDate({ date: "week" })}
              >
                주
              </S.SelectBtn>
              <S.SelectBtn
                select={date.date === "month"}
                onClick={() => setDate({ date: "month" })}
              >
                월
              </S.SelectBtn>
              <S.SelectBtn
                select={date.date === "year"}
                onClick={() => setDate({ date: "year" })}
              >
                년
              </S.SelectBtn>
            </S.ChangeGrp>
          </>
        )}
      </S.StockHeaderTitle>
      {/* <i
      onClick={() => itemCode.code && informHandle()}
      >
        <SVG.SideButton />
      </i> */}
    </S.Layer>
  )
}
