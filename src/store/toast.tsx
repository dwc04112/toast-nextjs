import {atom, selector} from "recoil";

export interface Toast {
    id?: string;
    content: string;
    duration?: number;
    bottom?: number;
}

const toastState = atom<Toast[]>({
    key: 'toastState',
    default: []
});

const toastSelector = selector({
    key: 'toastSelector',
    get: ({get}) => {
        return get(toastState);
    },
})

export { toastState, toastSelector };
