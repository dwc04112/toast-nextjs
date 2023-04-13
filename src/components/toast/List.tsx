import {useRecoilValue} from "r정ecoil";
import {toastSelector, toastState} from "@/store/toast";
import ToastItem from './Item';

const ToastList = () => {
    const toastList = useRecoilValue(toastSelector);

    return (
        <div className='toast-list-div'>
            {toastList.map((toast)=>(
                <ToastItem key={toast.id} {...toast} />
            ))}
            <style jsx>{`
              .toast-list-div{
                  bottom: 0;
                  left: 0;
                  position: fixed;
                  z-index: 100;
              }
            `}</style>
        </div>
    )
}

export default ToastList;