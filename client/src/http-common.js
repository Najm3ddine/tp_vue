import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:5050/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
