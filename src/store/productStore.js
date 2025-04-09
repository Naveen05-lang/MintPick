import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

const useProductStore = create((set, get) => ({
  allProducts: [],
  displayedProducts: [],
  loading: false,
  error: null,
  search: '',
  sort: 'default',
  category: 'all',
  page: 1,
  perPage: 10,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(BASE_URL);
      const allProducts = res.data.products || [];

      set({
        allProducts,
        page: 1,
        displayedProducts: allProducts.slice(0, 10),
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  setSearch: (search) => {
    set({ search, page: 1 });
    get().applyFilters();
  },

  setSort: (sort) => {
    set({ sort, page: 1 });
    get().applyFilters();
  },

  setCategory: (category) => {
    set({ category, page: 1 });
    get().applyFilters();
  },

  loadMore: () => {
    const { page, perPage } = get();
    const nextPage = page + 1;
    set({ page: nextPage });
    get().applyFilters();
  },

  applyFilters: () => {
    const { allProducts, search, sort, category, page, perPage } = get();

    let result = [...allProducts];

    // Filter by category
    if (category !== 'all') {
      result = result.filter((item) => item.category === category);
    }

    // Filter by search in title
    if (search.trim()) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    switch (sort) {
      case 'low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    // Paginate
    const paginated = result.slice(0, page * perPage);
    set({ displayedProducts: paginated });
  },

  getFilteredSortedSearchedProducts: () => {
    return get().displayedProducts;
  },
}));

export default useProductStore;
