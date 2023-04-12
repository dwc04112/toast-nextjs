import {useRecoilState} from "recoil";
import { toastState } from "@/store/toast";
import {useEffect} from "react";


export default function Home() {
    const [ toasts, setToast ] = useRecoilState(toastState);
    const setData = () =>{
        setToast((prev)=>[...prev,{id:"32", bottom:32, content: "hello", duration:3000}])
    }

    console.log(toasts)
    return (
    <>
      <div>init</div>
        <button onClick={setData}>button</button>
    </>
  )
}
