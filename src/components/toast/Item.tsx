import {Toast} from "@/store/toast";
import { useEffect, useState } from 'react';


const ToastItem = (props : Toast) => {
  const { content, duration, bottom } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(()=>{
     const toastTimeout = setTimeout(()=>{
         setIsClosing(true);
         clearTimeout(toastTimeout);
     }, duration ?? 1000)
  });

  return (
      <div className='toast-content-div'>
          {content}
          <style jsx>{`
              .toast-content-div{
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: ${bottom ?? 26}px;
                left: 26px;
                animation: 0.3s forwards;
                background-color: rgba(50,50,50,0.4);
                width: 450px;
                height: 60px;
                font-size: 22px;
                font-weight: 700;
                color: white;
                border-radius: 30px;
              }
          `}</style>
      </div>
  )
}

export default ToastItem;