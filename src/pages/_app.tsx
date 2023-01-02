import "../styles/globals.css"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { Slide, toast, ToastContainer } from "react-toastify"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
        autoClose={1500}
      />
    </RecoilRoot>
  )
}
