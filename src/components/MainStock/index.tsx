import dynamic from "next/dynamic"

export default function MainStock() {
  const MainStock = dynamic(
    // typescript에서 props를 전달할때 interface를 정의해줍니다.
    () => import("./main"), // Component로 사용할 항목을 import합니다.
    { ssr: false } // ssr옵션을 false로 설정해줍니다.
  )
  return <MainStock />
}
