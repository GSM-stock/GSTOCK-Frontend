import { atom } from "recoil"

type ItemType = {
  id: number
  code: string
  logo: string
  ko_name: string
  en_name: string
  market: string
}

type DataInformType = {
  price: number
  change: number
}

export const UserItem = atom<ItemType>({
  key: "userItem",
  default: {
    code: "035720",
    en_name: "Kakao",
    id: 2059,
    ko_name: "카카오",
    logo: "https://file.alphasquare.co.kr/media/images/stock_logo/kr/035720.png",
    market: "kospi",
  },
})

export const DataInform = atom<DataInformType>({
  key: "dataInform",
  default: {
    price: 0,
    change: 0,
  },
})

type DateType = {
  date: string
}

export const SelectDate = atom<DateType>({
  key: "date",
  default: {
    date: "day",
  },
})
