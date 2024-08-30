const NODE_ENV = process.env.NODE_ENV || 'development'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
const API_URL_LOCAL = process.env.NEXT_PUBLIC_API_URL_LOCAL

const configMap = {
  development: {
    API_URL: API_URL_LOCAL || API_URL,
  },
  production: {
    API_URL,
  },
  test: {
    API_URL,
  },
}

const config = configMap[NODE_ENV]

export default config
