type CollectionType = {
  _id: string;
  title: string;
  gifts: number;
  image: string;
};

type GiftType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  sizes: [string];
  colors: [string];
  createdAt: string;
  updatedAt: string;
};

type UserType = {
  clerkId: string;
  wishlist: [string];
  createdAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: Object;
  _id: string;
  customerClerkId: string;
  gifts: [OrderItemType]
  shippingRate: string;
  totalAmount: number
}

type OrderItemType = {
  gift: GiftType;
  color: string;
  size: string;
  quantity: number;
  _id: string;
}