import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 mt-28">
      <p className="text-heading1-bold mb-10">Gift Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center text-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={150}
                height={150}
                className="rounded-lg cursor-pointer mx-4"
              />
              <p className="text-body-bold pt-4">{collection.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
