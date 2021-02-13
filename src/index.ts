import axios from 'axios'
import { Quote } from './types'

const ats = (arr: string[]): string => {
  let str = ''
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== 0) {
      str += `,${arr[i]}`
    } else {
      str += arr[i]
    }
  }
  return str
}

const tokenString = (accessKey: string): string => {
  const token = `token=${accessKey}`
  return token
}

const getStock = async ({ ticker, apiKey }: { ticker: string; apiKey: string }): Promise<Quote> => {
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/batch?types=quote&range=1m&${tokenString(apiKey)}`
  if (typeof apiKey !== 'string') throw new Error('API key not defined')
  console.log(url)
  const stock = axios
    .get(url)
    .then(res => {
      const { data } = res
      const { quote } = data
      return quote as Quote
    })
    .catch(err => {
      throw new Error(err)
    })

  return stock
}

const getStocks = async ({
  tickers,
  apiKey
}: {
  tickers: string[]
  apiKey: string
}): Promise<Record<string, { quote: Quote }>> => {
  const stocks = ats(tickers)
  const url = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${stocks}&types=quote&range=1m&${tokenString(
    apiKey
  )}`
  if (typeof apiKey !== 'string') throw new Error('API key is not defined')

  const stock = axios
    .get(url)
    .then(res => {
      const { data } = res

      return data as Record<string, { quote: Quote }>
    })
    .catch(err => {
      throw new Error(err)
    })

  return stock
}

export { getStock, getStocks }
