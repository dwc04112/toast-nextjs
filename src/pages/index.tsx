import {useRecoilState, useRecoilValue} from "recoil";
import {toastState} from "@/store/toast";
import useToast from "@/components/hooks/useToast";


export default function Home() {
    const [ toasts, setToast ] = useRecoilState(toastState);

    const { addToast } = useToast();
    const setData =()=> addToast({ content:'initial value'})
    const clipboard =()=> addToast({ content:'링크가 클립보드에 복사되었습니다.',duration:3000})
    const getData =()=> addToast({ content:'안녕하세요 Toast 말풍선 입니다',duration:7000, isTop: true})
    console.log(toasts)

    return (
    <div className='top-div'>
        <div>test button</div>
        <button onClick={setData}>button</button>
        <button onClick={clipboard}>clip</button>
        <button onClick={getData}>7s</button>
    </div>
  )
}
