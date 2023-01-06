import axios from 'axios'

const api = axios.create({
  // baseURL: process.env.REACT_APP_API,
  baseURL: 'http://localhost:3333',
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {id: 3, name: 'Lucas', username: 'Kjeldritt'},
    }
    const response = await api.post('/validate', { token });
    return response.data;
  },
  signin: async (username: string, password: string) => {
    return {
      user: {id: 3, name: 'Lucas', username: 'Kjeldritt'},
      token: '987654321'
    }
    const response = await api.post('/signin', { username, password });
    return response.data;
  },
  logout: async () => {
    return { status: true }
    const response = await api.post('/logout')
    return response.data
  }
})