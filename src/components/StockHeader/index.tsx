import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { UserItem } from "../../atom/Atom"
import * as S from "./style"
import * as SVG from "../../../public/svg"

export default function StcokHeader({
  informHandle,
}: {
  informHandle: () => void
}) {
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
  const [itemCode, setItemCode] = useRecoilState(UserItem)
  const [data, setData] = useState({
    price: "",
    change: 0,
  })

  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.alphasquare.co.kr/data/v2/price/current-price?code=" +
            itemCode.code
        )
        setData({
          price: data[itemCode.code].close.toFixed(2),
          change:
            (data[itemCode.code].prev_close / data[itemCode.code].close) * 100 -
            100,
        })
      } catch (e) {
        console.log(e)
      }
    }
    GetData()
  }, [itemCode])

  return (
    <S.Layer>
      <S.StockHeaderTitle>
        {itemCode.logo && <S.ItemImg src={itemCode.logo} />}

        <>
          <h1>{itemCode.ko_name}</h1>
          <p>{itemCode.code}</p>
        </>
        {data.price !== "" && (
          <S.StockValue valueColor={Math.sign(data.change) >= 0 ? true : false}>
            <h1>{data.price}</h1>
            <p>{data.change.toFixed(2)}</p>
          </S.StockValue>
        )}
      </S.StockHeaderTitle>
      <i onClick={() => informHandle()}>
        <SVG.SideButton />
      </i>
    </S.Layer>
  )
}
