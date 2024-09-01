export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getGifts = async () => {
  const gifts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gifts`,
    { cache: 'no-store' }
  )
  return await gifts.json()
}

export const getGiftDetails = async (giftId: string) => {
  const gift = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gifts/${giftId}`,
    { cache: 'no-store' }
  )
  return await gift.json()
}

export const getSearchedGifts = async (query: string) => {
  const searchedGifts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedGifts.json()
}

export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
  return await orders.json()
}

export const getRelatedGifts = async (giftId: string) => {
  const relatedGifts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gifts/${giftId}/related`)
  return await relatedGifts.json()
}