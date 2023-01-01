import * as S from "./style"

export default function BuyForm() {
  return (
    <S.BuyFormLayer>
      <S.BuyForm>
        <label htmlFor="price">
          가격
          <input id="price" type="text" />
        </label>
        <label htmlFor="price">
          수량
          <input id="price" type="text" />
        </label>
      </S.BuyForm>
    </S.BuyFormLayer>
  )
}
