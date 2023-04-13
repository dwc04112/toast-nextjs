
import useToast from "@/components/hooks/useToast";


export default function Home() {
    const { addToast } = useToast();
    const leftBottom =()=> addToast({ content:'initial value'})
    const clip =()=> addToast({ content:'링크가 클립보드에 복사되었습니다.',duration:3000})
    const rightTop =()=> addToast({ content:'안녕하세요 Toast 말풍선 입니다',duration:7000, isTop: true})


    return (
    <div className='top-div'>
        <div>test button</div>
        <button onClick={leftBottom}>leftBottom</button>
        <button onClick={clip}>clip</button>
        <button onClick={rightTop}>rightTop</button>
    </div>
  )
}
