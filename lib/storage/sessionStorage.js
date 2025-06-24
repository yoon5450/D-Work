

import { LOGIN_KEY, DATA_KEY} from '../constant/constant.js'

export function getSessionStorage(SessionKey = DATA_KEY){
    const item = sessionStorage.getItem(SessionKey);
    return item ? JSON.parse(item) : null;
}

export function setSessionStorage(items, SessionKey = DATA_KEY){
    sessionStorage.setItem(SessionKey, JSON.stringify(items));
}

export function clearSessionStorage(KEY = DATA_KEY){
    sessionStorage.removeItem(KEY);
}

export function getUserSessionStorage(){
    return getSessionStorage(LOGIN_KEY);
}

export function setUserSessionStorage(userName){
    setSessionStorage(userName, LOGIN_KEY);
}

export function clearUserSessionStorage(){
    clearSessionStorage(LOGIN_KEY);
}