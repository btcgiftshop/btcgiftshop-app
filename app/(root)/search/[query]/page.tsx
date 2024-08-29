import GiftCard from '@/components/GiftCard'
import { getSearchedGifts } from '@/lib/actions/actions'

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedGifts = await getSearchedGifts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for {decodedQuery}</p>
      {!searchedGifts || searchedGifts.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedGifts?.map((gift: GiftType) => (
          <GiftCard key={gift._id} gift={gift} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage