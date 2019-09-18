export function getUserInfo() {
    return JSON.parse(localStorage.getItem('x-auth-user')) || {}
}

export function setUserInfo(userInfo) {
  return localStorage.setItem('x-auth-user', JSON.stringify(userInfo));
}

export function clearUserInfo() {
  localStorage.removeItem('x-auth-user')
}