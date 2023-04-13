import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot} from "recoil";
import ToastList from "@/components/toast/List";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
          <ToastList />
        <Component {...pageProps} />
      </RecoilRoot>
  )
}
