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
    id: 0,
    code: "",
    logo: "",
    ko_name: "",
    en_name: "",
    market: "",
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
