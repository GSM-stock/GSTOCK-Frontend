import { atom } from "recoil"

type ItemType = {
  id: number
  code: string
  logo: string
  ko_name: string
  en_name: string
  market: string
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
