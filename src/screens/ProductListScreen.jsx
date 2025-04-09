import React, { useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useProductStore from '../store/productStore';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

export default function ProductListScreen({ route, navigation }) {
  const {
    fetchProducts,
    loading,
    error,
    setSearch,
    search,
    setSort,
    setCategory,
    category,
    loadMore,
    getFilteredSortedSearchedProducts,
  } = useProductStore();

  const selectedCategory = route?.params?.selectedCategory;

  const filteredProducts = getFilteredSortedSearchedProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const clearCategoryFilter = () => {
    setCategory('all');
    navigation.setParams({ selectedCategory: null });
  };

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChange={setSearch} />

      <View style={styles.pickerRow}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={useProductStore.getState().sort}
            onValueChange={(itemValue) => setSort(itemValue)}
            style={styles.picker}
            dropdownIconColor="#000"
          >
            <Picker.Item label="Sort by" value="default" color="#000" />
            <Picker.Item label="A-Z" value="az" color="#000" />
            <Picker.Item label="Z-A" value="za" color="#000" />
            <Picker.Item label="Price: Low to High" value="low-high" color="#000" />
            <Picker.Item label="Price: High to Low" value="high-low" color="#000" />
          </Picker>
        </View>

        {!selectedCategory && (
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={useProductStore.getState().category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={styles.picker}
              dropdownIconColor="#000"
            >
              <Picker.Item label="All Categories" value="all" color="#000" />
              <Picker.Item label="Men's Clothing" value="men's clothing" color="#000" />
              <Picker.Item label="Women's Clothing" value="women's clothing" color="#000" />
              <Picker.Item label="Jewelery" value="jewelery" color="#000" />
              <Picker.Item label="Electronics" value="electronics" color="#000" />
              <Picker.Item label="Beauty" value="beauty" color="#000" />
            </Picker>
          </View>
        )}
      </View>

      {/* Show selected category and clear button */}
      {selectedCategory && (
        <View style={styles.selectedInfo}>
          <Text style={styles.selectedText}>Category: {selectedCategory}</Text>
          <TouchableOpacity onPress={clearCategoryFilter}>
            <Text style={styles.clearBtn}>Clear</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.listContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : error ? (
          <Text style={{ color: '#000' }}>{error}</Text>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductCard product={item} />}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator /> : null}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fefefe',
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 5,
  },
  pickerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  picker: {
    height: 52,
    width: '100%',
    color: '#000',
    fontSize: 14,
    paddingLeft: 8,
  },
  selectedInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textTransform: 'capitalize',
  },
  clearBtn: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContainer: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
});
