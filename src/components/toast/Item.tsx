import {Toast} from "@/store/toast";
import { useEffect, useState } from 'react';


const ToastItem = (props : Toast) => {
  const { content, duration, bottom, isTop } = props;
  const [isClosing, setIsClosing] = useState(false);
  useEffect(()=>{
     const toastTimeout = setTimeout(()=>{
         setIsClosing(true);
         clearTimeout(toastTimeout);
     }, duration ?? 1000)
  });

  return (
      <div className={isTop ? "toast-content-top":"toast-content-bottom"}
           style={{
               position: "absolute",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               width: "450px",
               height: "60px",
               fontSize: "22px",
               fontWeight: 700,
               backgroundColor: "rgba(50,50,50,0.4)"
           }}
      >
          {content}
          <style jsx>{`
              .toast-content-bottom{
                bottom: ${bottom ?? 26}px;
                left: 26px;
                animation: 0.3s forwards;
                color: white;
                border-radius: 30px;
              }
              .toast-content-top{
                Top: ${bottom ?? 26}px;
                right: 26px;
                animation: 0.3s forwards;
                color: white;
                border-radius: 30px;
              }
          `}</style>
      </div>
  )
}

export default ToastItem;