import axios from 'axios'
import qs from 'qs'

const protocol = 'http'
const host = '176.115.10.86'
const port = '9000'

const baseURL = `${protocol}://${host}:${port}`

const getPromise = (url, data, method) => axios({
  method: method || 'get',
  url,
  [method === 'post' ? 'data' : 'params']: qs.stringify(data),
  ...(
    sessionStorage.getItem('token')
      ?
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      : {}
  )
})

const api = {
  auth: {
    post: data => getPromise(`${baseURL}/auth`, data, 'post')
  },
  login: {
    post: data => getPromise(`${baseURL}/oauth/token`, data, 'post')
  },
  questions: {
    getQuestion: data => getPromise(`${baseURL}/api/questions/${data.id}`),
    getAllQuestions: data => getPromise(`${baseURL}/api/questions`, data), // mock
    getMyQuestions: data => getPromise(`${baseURL}/myquestions`, data),
    create: data => getPromise('./test.json', data, 'post'),
    edit: (id, data) => getPromise(`${baseURL}/api/questions/${id}`, data, 'put'),
    getCount: () => getPromise(`${baseURL}/api/questions/page/count`)
  },
  subjects: {
    get: () => getPromise(`${baseURL}/api/subjects`)
  },
  subject: {
    get: data => getPromise(data.url),
    create: data => getPromise(`${baseURL}/api/subjects/create`, data, 'post'),
    delete: data => getPromise(data.url, null, 'delete')
  },
  profile: {
    get: () => getPromise('./profile.json'),
    post: data => getPromise('./test.json', data, 'post')
  },
  image: {
    post: data => getPromise('http://localhost:3000', data, 'post')
  },
  user: {
    get: data => getPromise(data.url),
    delete: data => getPromise(data.url, null, 'delete'),
    post: data => getPromise(`${baseURL}/api/accounts/create`, data, 'post'),
    put: (id, data) => getPromise(`${baseURL}/api/accounts/user/${id}`, data, 'put'),
    me: () => getPromise(`${baseURL}/api/accounts/me`)
  },
  users: {
    get: () => getPromise(`${baseURL}/api/accounts/users`)
  }
}

export default api
