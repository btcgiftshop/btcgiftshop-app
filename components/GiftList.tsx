import { getGifts } from "@/lib/actions/actions";
import GiftCard from "./GiftCard";

const GiftList = async () => {
  const gifts = await getGifts();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">New Gifts</p>
      {!gifts || gifts.length === 0 ? (
        <p className="text-body-bold">No gifts found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {gifts.map((gift: GiftType) => (
            <GiftCard key={gift._id} gift={gift} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GiftList;
