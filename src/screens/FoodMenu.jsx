import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Products from '../components/Products';

const foodProducts = [
          {
                    id: 1,
                    name: "Apple",
                    price: 1.99,
                    category: "Fruits",
                    description: "Fresh and juicy apple.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 2,
                    name: "Banana",
                    price: 0.79,
                    category: "Fruits",
                    description: "Ripe banana, a great source of potassium.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 3,
                    name: "Broccoli",
                    price: 2.49,
                    category: "Vegetables",
                    description: "Nutritious green broccoli florets.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 4,
                    name: "Chicken Breast",
                    price: 5.99,
                    category: "Meat",
                    description: "Boneless, skinless chicken breast.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 5,
                    name: "Salmon",
                    price: 9.99,
                    category: "Seafood",
                    description: "Fresh salmon fillet, rich in omega-3 fatty acids.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 6,
                    name: "Eggs",
                    price: 2.29,
                    category: "Dairy",
                    description: "Farm-fresh eggs.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 7,
                    name: "Tomato",
                    price: 0.89,
                    category: "Vegetables",
                    description: "Plump and ripe tomatoes.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 8,
                    name: "Yogurt",
                    price: 3.49,
                    category: "Dairy",
                    description: "Creamy and probiotic-rich yogurt.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 9,
                    name: "Cheese",
                    price: 4.99,
                    category: "Dairy",
                    description: "Assorted cheese varieties.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 10,
                    name: "Spinach",
                    price: 1.79,
                    category: "Vegetables",
                    description: "Fresh spinach leaves.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 11,
                    name: "Pasta",
                    price: 1.99,
                    category: "Grains",
                    description: "Assorted pasta shapes.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 12,
                    name: "Bread",
                    price: 2.49,
                    category: "Bakery",
                    description: "Freshly baked bread.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 13,
                    name: "Carrot",
                    price: 0.69,
                    category: "Vegetables",
                    description: "Crunchy and sweet carrots.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 14,
                    name: "Milk",
                    price: 2.19,
                    category: "Dairy",
                    description: "Full-fat, low-fat, and skim milk options.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 15,
                    name: "Potato",
                    price: 1.29,
                    category: "Vegetables",
                    description: "Versatile and starchy potatoes.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 16,
                    name: "Ground Beef",
                    price: 6.49,
                    category: "Meat",
                    description: "Lean ground beef.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 17,
                    name: "Orange",
                    price: 0.99,
                    category: "Fruits",
                    description: "Juicy and refreshing oranges.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 18,
                    name: "Avocado",
                    price: 1.79,
                    category: "Fruits",
                    description: "Creamy and nutritious avocados.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 19,
                    name: "Green Beans",
                    price: 1.59,
                    category: "Vegetables",
                    description: "Fresh green beans, a good source of fiber.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          },
          {
                    id: 20,
                    name: "Greek Yogurt",
                    price: 3.99,
                    category: "Dairy",
                    description: "Thick and creamy Greek yogurt.",
                    image: "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          }
];

const FoodMenu = () => {
          return (
                    // <ScrollView contentContainerStyle={styles.main} >
                              <FlatList 
                                        data={foodProducts}
                                        renderItem={({item}) => <Products product={item} />}
                                        numColumns={2}
                                        ItemSeparatorComponent={() => <View style={{borderBottomWidth : 0.5}} ></View>}
                                        keyExtractor={item => item.id.toString()}
                              />
                    // </ScrollView>
          )
}

export default FoodMenu

const styles = StyleSheet.create({
          main : {
                    flex: 1, justifyContent: 'center', paddingHorizontal: 20
          }
})