import {useRecoilState, useRecoilValue} from "recoil";
import {toastSelector, toastState} from "@/store/toast";
import useToast from "@/components/hooks/useToast";


export default function Home() {
    const [ toasts, setToast ] = useRecoilState(toastState);
    const toastList = useRecoilValue(toastSelector);

    const { addToast } = useToast();
    const setData =()=> addToast({ content:'hello'})
    const getData =()=> addToast({ content:'hello',duration:7000})
    console.log(toasts)

    const returnList = () => {
      return toastList.map( toastData => (
          <div
            key={toastData.id}
          >
              <div>{toastData.id}</div>
              <div>{toastData.content}</div>
              <div>{toastData.duration}</div>
          </div>
      ))
    }

    return (
    <div>
      <div>init</div>
        <button onClick={setData}>button</button>
        <button onClick={getData}>7s</button>
        {returnList()}
    </div>
  )
}
