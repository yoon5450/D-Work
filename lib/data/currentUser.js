export function getCurrentUser(){
    return document.querySelector(".header-user-name")?.textContent.trim();
}