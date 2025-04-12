import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product) => {
    const existingItem = get().cartItems.find(item => item.id === product.id);
    if (existingItem) return;

    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== id),
    }));
  },

  clearCart: () => set({ cartItems: [] }),

  getTotalPrice: () => {
    return get().cartItems.reduce((total, item) => total + item.price, 0);
  },
}));

export default useCartStore;
