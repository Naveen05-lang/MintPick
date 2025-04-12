This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.




# MintPick

A modern, scalable React Native application that brings together e-commerce functionalities using the power of Firebase authentication, state management with Zustand, and robust navigation with React Navigation. MintPick is designed to deliver a smooth user experience for browsing products, managing user sessions, and dynamically filtering and sorting items.

---

## 🚀 Project Overview

**MintPick** is a mobile application designed for product discovery and shopping. It allows users to create an account, sign in, and explore a curated list of products across multiple categories. With a focus on performance and simplicity, the app leverages best-in-class libraries to create an intuitive interface and dynamic browsing experience.

---

## 💡 Key Features

- **User Authentication:**  
  Secure sign-up, sign-in, and sign-out functionality powered by [Firebase Authentication](https://firebase.google.com/).  
  *Key File:* `authService.js`

- **Product Browsing:**  
  Display a list of products using dynamic product cards that show images, titles, and prices.  
  *Key Components:* `ProductCard`, `ProductListScreen`, `CategoryListScreen`

- **Search & Filtering:**  
  Integrated search bar and category filtering allow users to quickly locate and sort products.  
  *Key Components:* `SearchBar` and built-in filtering in the Zustand store

- **State Management:**  
  Global state is managed using [Zustand](https://github.com/pmndrs/zustand) for effortless data flow, handling pagination, filtering, and sorting.
  
- **Navigation:**  
  Smooth navigation across screens with [React Navigation](https://reactnavigation.org/), including stack navigation for sign-up, sign-in, category list, and detailed product listings.

---

## ⚙️ Tech Stack & Dependencies

- **React Native (v0.79.0):**  
  The framework used for building the mobile application with native-like performance.

- **React (v19.0.0):**  
  Core library enabling component-driven development.

- **Firebase:**
  - `@react-native-firebase/app` (v21.13.0)  
  - `@react-native-firebase/auth` (v21.13.0)  
  Enables user authentication and app integration with Firebase services.

- **React Navigation:**
  - `@react-navigation/native` (v7.1.6)
  - `@react-navigation/native-stack` (v7.3.10)  
  Provides effortless routing and navigation between screens.

- **UI & Icon Libraries:**
  - `react-native-vector-icons` (v10.2.0)  
    For scalable icons throughout the application.
  - `@react-native-picker/picker` (v2.11.0)  
    For selecting filters like sorting and categories.

- **State Management:**
  - `zustand` (v5.0.3)  
    Simple and efficient state management with minimal boilerplate.

- **Networking:**
  - `axios` (v1.8.4)  
    Used for fetching product data from external APIs (here, from [dummyjson.com](https://dummyjson.com)).

- **Development & Tooling:**
  - Babel, ESLint, Prettier, and Jest among others to enforce code quality, formatting, and testing best practices.
  - TypeScript support for type safety (v5.0.4).

---

## 🛠️ Project Structure

```bash
MintPick/
├── auth/
│   └── authService.js         # Authentication methods using Firebase Auth
├── components/
│   ├── ProductCard.js         # Displays product details with image, title, and price
│   └── SearchBar.js           # Custom search component with integrated icons
├── screens/
│   ├── CategoryListScreen.js  # Display categories and navigation to product list
│   ├── ProductListScreen.js   # List of products with search, sort, and pagination
│   ├── SignInScreen.js        # Sign in UI and logic
│   └── SignUpScreen.js        # Sign up UI and logic with validation
├── store/
│   └── productStore.js        # State management using Zustand for product data
├── App.js                     # Entry point integrating navigation and screen flow
└── package.json               # Dependencies, scripts, and project metadata










📱 React Native Firebase E-Commerce App
Role: React Native Developer
Tech Stack: React Native (CLI), Firebase Authentication, Zustand, AsyncStorage, DummyJSON API, React Navigation

Description:
Built a feature-rich mobile e-commerce application with user authentication, category-based product browsing, filtering, sorting, searching, and shopping cart functionality.

Key Features:

🔐 Authentication: Email/password sign-up and login with Firebase Auth; secure logout with navigation state reset.

🛍️ Category Browsing: Horizontal category scroll view with dynamic navigation to product listings.

🔎 Search & Filter: Real-time product search, category filters, and sorting (price, A-Z, Z-A).

🛒 Shopping Cart: Add to cart feature with total price calculation using Zustand for global state management.

🔄 State Persistence: Cart and theme preferences persisted with AsyncStorage.

🔄 Pagination & Infinite Scroll: Smooth product listing experience with lazy loading from DummyJSON API.

🌙 Theme & Localization (Optional): Supports light/dark mode and multilingual support using Context API.

Responsibilities:

Designed and implemented UI components using React Native styles and Flexbox.

Integrated Firebase Authentication and handled user session flow.

Created modular and reusable components (ProductCard, SearchBar, etc.).

Managed application state efficiently using Zustand without external boilerplate.

Ensured a smooth UX with navigation and persistent login/session management.











🛒 Full-Stack React Native E-Commerce App with Firebase & Zustand
Role: Full-stack Mobile Developer
Tech Stack: React Native CLI · Firebase Authentication · Zustand · React Navigation · AsyncStorage · DummyJSON API

Project Overview:
Built a production-grade, full-stack e-commerce mobile app from scratch, delivering a seamless user experience with secure authentication, real-time product filtering, dynamic cart management, and personalized browsing—all with a minimalist, high-performance architecture.

🚀 What Makes This Project Stand Out
✅ Authentication-Driven Navigation Flow
Implemented Firebase Email/Password auth with custom route guards and persistent login using AsyncStorage, ensuring a secure and smooth user session.

✅ Zustand-Powered Global State (No Redux, No Boilerplate)
Used Zustand for lightweight yet powerful state management—handling cart logic, filtering, and sorting globally with minimal overhead and max performance.

✅ Category-Driven UI Experience
Designed an Amazon-style UI with category tiles → product list → product cards → cart. Implemented a dynamic navigation stack using React Navigation v6.

✅ Custom Search & Filtering Logic
Integrated real-time product search, category-based filtering, and sorting (Low to High, A-Z, Z-A), optimized with controlled components and debounce techniques.

✅ Scalable & Modular Architecture
Organized codebase using clean separation of concerns (auth, store, screens, components). Ensured easy scaling for features like wishlist, reviews, and payments.

✅ Responsive UX Design
Crafted a highly responsive UI using Flexbox & custom component styling—supporting both dark/light modes and adaptive layout for different devices.

🧩 Key Modules Developed
auth/: Firebase logic (signup, login, session observer)

store/: Zustand state slices for products, filters, cart

components/: Reusable cards, search bar, buttons

screens/: Auth flow, Category list, Product grid, Cart

utils/: Price calculation, filtering logic, formatting

🌟 Impact & Takeaways
“This project helped me bridge the gap between concept and production-ready mobile development—focusing not just on features, but real-world scalability, clean architecture, and optimal user flow.”