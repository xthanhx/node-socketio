const option: any = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
}

const fetcher = async (url: string) => {
  return await fetch(url)
}

fetcher.Post = async (url, data) => {
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

fetcher.Put = async (url, data) => {
  option.method = 'PUT'
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

fetcher.Delete = async (url, data) => {
  option.method = 'DELETE'
  option.body = JSON.stringify(data)
  return await fetch(url, option)
}

export default fetcher
