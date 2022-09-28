const option: any = {
  headers: {
    'Content-Type': 'application/json'
  },
}

type AnyObject = {
  [key: string]: any
}

const fetcher = async (url: string) => {
  return await fetch(url)
}

fetcher.Post = async (url: RequestInfo | URL, data: AnyObject) => {
  option.method = 'POST'
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

fetcher.Put = async (url: RequestInfo | URL, data: AnyObject) => {
  option.method = 'PUT'
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

fetcher.Delete = async (url: RequestInfo | URL, data: AnyObject) => {
  option.method = 'DELETE'
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

export default fetcher
