const KEY = 'D_WORK_SESSION_STORAGE_KEY'


export function getSessionStorage(){
    const item = JSON.parse(sessionStorage.getItem(KEY));
    return item ? JSON.parse(item) : null;
}

export function setSessionStorage(items){
    return setSessionStorage.setItem(KEY, JSON.stringify(items));
}

export function clearSessionStorage(){
    sessionStorage.removeItem(KEY);
}