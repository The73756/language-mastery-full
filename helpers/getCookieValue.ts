export const getCookieValue = (cookieName: string) => {
  const cookiesArray = document.cookie.split('; ')
  for (const element of cookiesArray) {
    const cookie = element.split('=')
    if (cookie[0] === cookieName) {
      return cookie[1]
    }
  }
  return null
}
