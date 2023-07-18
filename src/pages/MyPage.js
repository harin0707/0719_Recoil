import React from 'react'
import { userNameAtom } from '../recoil/atom'
import {useRecoilValue} from 'recoil';

const MyPage = () => {
    const user = useRecoilValue(userNameAtom);
    
    return (
    <div>welcome {user}</div>
    )
}

export default MyPage