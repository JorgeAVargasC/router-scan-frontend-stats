import { rpost } from './axios.instances'

const serviceFindMultipleDocuments = async () => {
  const {data} = await rpost('action/find')
  return data.documents
}

export { 
  serviceFindMultipleDocuments
}
