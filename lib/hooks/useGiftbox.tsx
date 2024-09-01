import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface GiftboxItem {
  item: GiftType;
  quantity: number;
  color?: string; // ? means optional
  size?: string; // ? means optional
}

interface GiftboxStore {
  giftboxItems: GiftboxItem[];
  addItem: (item: GiftboxItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearGiftbox: () => void;
}

const useGiftbox = create(
  persist<GiftboxStore>(
    (set, get) => ({
      giftboxItems: [],
      addItem: (data: GiftboxItem) => {
        const { item, quantity, color, size } = data;
        const currentItems = get().giftboxItems; // all the items already in giftbox
        const isExisting = currentItems.find(
          (giftboxItem) => giftboxItem.item._id === item._id
        );

        if (isExisting) {
          return toast("Item already in giftbox");
        }

        set({ giftboxItems: [...currentItems, { item, quantity, color, size }] });
        toast.success("Item added to giftbox", { icon: "🛒" });
      },
      removeItem: (idToRemove: String) => {
        const newGiftboxItems = get().giftboxItems.filter(
          (giftboxItem) => giftboxItem.item._id !== idToRemove
        );
        set({ giftboxItems: newGiftboxItems });
        toast.success("Item removed from giftbox");
      },
      increaseQuantity: (idToIncrease: String) => {
        const newGiftboxItems = get().giftboxItems.map((giftboxItem) =>
          giftboxItem.item._id === idToIncrease
            ? { ...giftboxItem, quantity: giftboxItem.quantity + 1 }
            : giftboxItem
        );
        set({ giftboxItems: newGiftboxItems });
        toast.success("Item quantity increased");
      },
      decreaseQuantity: (idToDecrease: String) => {
        const newGiftboxItems = get().giftboxItems.map((giftboxItem) =>
          giftboxItem.item._id === idToDecrease
            ? { ...giftboxItem, quantity: giftboxItem.quantity - 1 }
            : giftboxItem
        );
        set({ giftboxItems: newGiftboxItems });
        toast.success("Item quantity decreased");
      },
      clearGiftbox: () => set({ giftboxItems: [] }),
    }),
    {
      name: "giftbox-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGiftbox;

