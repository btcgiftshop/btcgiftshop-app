import Gallery from "@/components/Gallery"
import GiftCard from "@/components/GiftCard"
import GiftInfo from "@/components/GiftInfo"
import { getGiftDetails, getRelatedGifts } from "@/lib/actions/actions"

const GiftDetails = async ({ params }: { params: { giftId: string } }) => {
  const giftDetails = await getGiftDetails(params.giftId)
  const relatedGifts = await getRelatedGifts(params.giftId)

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery giftMedia={giftDetails.media} />
        <GiftInfo giftInfo={giftDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related Gifts</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedGifts?.map((gift: GiftType) => (
            <GiftCard key={gift._id} gift={gift} />
          ))}
        </div>
      </div>
    </>
  )
}

export const dynamic = "force-dynamic";

export default GiftDetails