import fetch from 'node-fetch'

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

interface IStock {
  symbol: string
  sector: string
  securityType: string
  bidPrice: number
  bidSize: number
  askPrice: number
  askSize: number
  lastUpdated: number
  lastSalePrice: number
  lastSaleSize: number
  lastSaleTime: number
  volume: number
}

const checkValidBody = async ({ body, array }: { body: IStock[]; array: boolean }) => {
  if (body.length === 1 && array === false) {
    return true
  }
  if (body.length > 1 && array === true) {
    return true
  }
  return false
}

const getStock = async ({ ticker, apiKey }: { ticker: string; apiKey: string }): Promise<IStock> => {
  const url = `https://cloud.iexapis.com/stable/tops?token=${apiKey}&symbols=${ticker}`
  if (typeof apiKey !== 'string') throw new Error('API keyas not defined')

  const resp = await fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw new Error(err)
    })
  if (checkValidBody({ body: resp, array: false })) return resp[0] as IStock

  throw new Error('Query did not return a valid body')
}

const getStocks = async ({ tickers, apiKey }: { tickers: string[]; apiKey: string }): Promise<IStock[]> => {
  const stocks = ats(tickers)
  const url = `https://cloud.iexapis.com/stable/tops?token=${apiKey}&symbols=${stocks}`

  const resp = await fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw new Error(err)
    })

  if (checkValidBody({ body: resp, array: true })) return resp as IStock[]

  throw new Error('Query did not return a valid body')
}

export { getStock, getStocks }
