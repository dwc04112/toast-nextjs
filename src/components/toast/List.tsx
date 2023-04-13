import {useRecoilValue} from "recoil";
import {Toast, toastSelector} from "@/store/toast";
import ToastItem from './Item';

const ToastList = () => {
    const toastList = useRecoilValue(toastSelector);
    return (
        <div className='toast-list-div'>
            {toastList.map((toast)=>(
                <ToastItem key={toast.id} {...toast} />
            ))}
        </div>
    )
}

export default ToastList;