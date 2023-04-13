import {useRecoilState} from "recoil";
import {Toast, toastState} from "@/store/toast";

const useToast = () => {
    const [data, setData] = useRecoilState(toastState);

    const getToastId = () => String(new Date().getTime());

    const removeToast = (toastId : Toast['id']) => {
        setData((prev) => prev.filter((toast) => toast.id !== toastId))
    }
    const addToast = (toast : Toast) => {
        toast.id = getToastId()
        setData((prev) => [...prev, {...toast, id: toast.id, isTop: (toast.isTop ?? false) }])
        setTimeout(() => removeToast(toast.id), 600 + (toast.duration ?? 1000))
    }
    return {data, addToast}
}

export default useToast;