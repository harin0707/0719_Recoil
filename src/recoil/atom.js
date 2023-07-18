import {atom} from 'recoil';

export const userNameAtom = atom({
    key : 'userName',
    default: '홍길동'
})

export const emailAtom = atom({
    key:'email',
    default:'',
})

export const ownerAtom = atom({
    key : 'owner',
    default: 'dog'
})
