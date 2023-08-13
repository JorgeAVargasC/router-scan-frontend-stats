import axios from 'axios'

const URL_ENDPOINT = import.meta.env.VITE_URL_ENDPOINT
const CONTENT_TYPE = import.meta.env.VITE_CONTENT_TYPE
const API_KEY = import.meta.env.VITE_API_KEY
const DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE
const DATABASE = import.meta.env.VITE_DATABASE
const COLLECTION = import.meta.env.VITE_COLLECTION

const configBasic = {
  baseURL: URL_ENDPOINT,
  timeout: 9000000, // 15 minutes
  headers: {
    'Content-Type': `application/${CONTENT_TYPE}`,
    Accept: `application/${CONTENT_TYPE}`,
    'api-key': API_KEY,
  },
}

const baseBody = {
  dataSource: DATA_SOURCE,
  database: DATABASE,
  collection: COLLECTION,
}

const rget = async (endpoint) => {
  const config = { ...configBasic, headers: { ...configBasic.headers } }
  return await axios.create(config).get(endpoint)
}

const rpost = async (endpoint, data) => {
  const config = { ...configBasic, headers: { ...configBasic.headers } }
  return await axios.create(config).post(endpoint, { ...baseBody, ...data })
}

export { rget, rpost }
