let apiUrl
const apiUrls = {
  production: 'https://syntax-typing-practice.herokuapp.com/',
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
