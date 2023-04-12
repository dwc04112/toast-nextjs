import { atom } from "recoil";

export interface Toast {
    id?: string;
    content: string;
    duration?: number;
    bottom?: number;
}

const toastState = atom<Toast[]>({
    key: 'toastState',
    default: [{
        id: "initial value",
        content : "init data"
    }]
});

export { toastState };
