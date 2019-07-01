interface IAPI {
  url: string
  type: 'get' | 'post' | 'put' | 'delete'
}

export const getStarships: IAPI = { url: `starships`, type: 'get' }

export const getStarship: IAPI = { url: `starships/:id`, type: 'get' }
