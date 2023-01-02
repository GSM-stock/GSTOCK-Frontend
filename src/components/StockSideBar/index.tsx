import { useEffect, useRef, useState } from "react"
import * as S from "./style"
import * as SVG from "../../../public/svg"
import axios from "axios"
import { useRecoilState, useSetRecoilState } from "recoil"
import { UserItem } from "../../atom/Atom"

export default function StockSideBar() {
  type ListType = {
    id: number
    code: string
    logo: string
    ko_name: string
    en_name: string
    market: string
    is_alive?: boolean | null
    type?: string | null
    type_specs?: string[] | null
    sector?: string | null
    industry?: string | null
    currency?: string | null
    country_code?: string | null
    aliases?: any
  }
  const [sideBatToggle, setSideBatToggle] = useState(false)
  const [search, setSearch] = useState("")
  const [item, setItem] = useState<ListType[]>([
    {
      id: 0,
      code: "",
      logo: "",
      ko_name: "",
      en_name: "",
      market: "",
      is_alive: false,
      type: "",
      type_specs: null,
      sector: "",
      industry: "",
      currency: "",
      country_code: "",
      aliases: null,
    },
  ])

  const setUserItem = useSetRecoilState(UserItem)

  const searchRef = useRef<any>(null)
  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.alphasquare.co.kr/data/v2/stock/stocks?keyword=" + search
        )
        setItem(data.data)
      } catch (e) {
        console.log(e)
      }
    }
    GetData()
  }, [search])

  return (
    <>
      <S.Layer active={sideBatToggle}>
        <S.SearchLayer>
          <S.SearchWrapper active={sideBatToggle}>
            <i onClick={() => setSideBatToggle(true)}>
              <SVG.AddIcon />
            </i>
            <S.SearchInput
              type="text"
              placeholder={"종목검색"}
              ref={searchRef}
              onFocus={() => {
                !sideBatToggle && searchRef.current.blur()
              }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </S.SearchWrapper>
          {sideBatToggle && item.length != 0 && (
            <S.SearchItemList>
              {item.map((e, index) => {
                return (
                  e.logo && (
                    <S.Item
                      key={index}
                      onClick={() => {
                        setSearch("")
                        setUserItem({
                          id: e.id,
                          code: e.code,
                          logo: e.logo,
                          ko_name: e.ko_name,
                          en_name: e.en_name,
                          market: e.market,
                        })
                      }}
                    >
                      <S.ItemImg src={e.logo} />
                      <div>
                        <h1>{e.ko_name}</h1>
                        <p>{e.code}</p>
                      </div>
                    </S.Item>
                  )
                )
              })}
            </S.SearchItemList>
          )}
        </S.SearchLayer>
        <S.ItemList
          onClick={() => setSideBatToggle(!sideBatToggle)}
        ></S.ItemList>
      </S.Layer>
    </>
  )
}
