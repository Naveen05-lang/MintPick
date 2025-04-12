import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import useProductStore from '../store/productStore';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CategoryListScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
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

  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH36fon2nYqHQp1lK-GgaUm6Ak3VIZKA_ew&s',
            }}
          />
          <Text style={styles.title}>
            <Text style={{ color: 'red' }}>Mint</Text>
            <Text style={{ color: '#007BFF' }}>Pick</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToCart} style={styles.cartIcon}>
          <Icon name="shopping-cart" size={24} color="#007BFF" />
        </TouchableOpacity>
      </View>

      
      <SearchBar value={search} onChange={setSearch} />
      
    
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item, index) => item?.category || index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
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
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  cartIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#e0f2f1',
    elevation: 5,
  },
  card: {
    backgroundColor: '#e0f2f1',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '48%',
    aspectRatio: 1, 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004d40',
  },
});

