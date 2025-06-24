

const DATA_KEY = 'D_WORK_SESSION_STORAGE_KEY'
const LOGIN_KEY = `D_WORK_SESSION_LOGIN_KEY`


export function getSessionStorage(SessionKey = DATA_KEY){
    const item = sessionStorage.getItem(SessionKey);
    return item ? JSON.parse(item) : null;
}

export function setSessionStorage(items, SessionKey = DATA_KEY){
    SessionStorage.setItem(SessionKey, JSON.stringify(items));
}

export function clearSessionStorage(KEY = DATA_KEY){
    sessionStorage.removeItem(KEY);
}

export function getUserSessionStorage(){
    return getSessionStorage(LOGIN_KEY);
}

export function setUsetSessionStorage(userName){
    setSessionStorage(userName, LOGIN_KEY);
}

export function clearUserSessionStorage(){
    clearSessionStorage(LOGIN_KEY);
}