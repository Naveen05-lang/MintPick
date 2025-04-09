import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import useProductStore from '../store/productStore';

export default function CategoryListScreen({ navigation }) {
  const { allProducts, fetchProducts } = useProductStore();

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts();
    }
  }, []);

  const categoryMap = {};
  allProducts?.forEach((product) => {
    if (
      product &&
      product.category &&
      product.thumbnail &&
      !categoryMap[product.category]
    ) {
      categoryMap[product.category] = product;
    }
  });

  const categories = Object.values(categoryMap);

  const handleCategoryPress = (category) => {
    navigation.navigate('ProductList', {
      selectedCategory: category,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop by Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item?.category || index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item.category)}
          >
            <Image
              source={{
                uri: item?.thumbnail || 'https://via.placeholder.com/60',
              }}
              style={styles.image}
            />
            <Text style={styles.cardText}>{item?.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: 'lightgrey',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 12,
    color: '#222',
  },
  card: {
    width: 100,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
});
