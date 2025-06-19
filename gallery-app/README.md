# 📸 Flickr Gallery App (React Native)

A minimal yet powerful React Native app that showcases recent and searched images from Flickr. Built for internship evaluation — with features like image caching, pagination, search, offline view, and modal image previews.

---

## ✨ Features

- 🖼️ **Image Gallery** (Home)
  - Shows recent Flickr images via API.
  - Supports infinite scrolling with pagination.
  - Tap an image to view full-size in a modal.

- 📥 **Offline Caching**
  - Caches image URLs and displays them offline.
  - Smart re-fetch only if API response changes.

- 🔍 **Search Functionality**
  - Search for images using keywords (e.g., cats, dogs).
  - Uses a separate screen with built-in navigator.
  - Includes Snackbar with retry on failure.

- 🌙 **Dark Theme**
  - Consistent dark-themed UI for better aesthetics.

- 📱 **Built with React Native**
  - Fully responsive for mobile devices.
  - Uses `react-navigation` (Drawer Navigator).
  - `react-native-paper` for Snackbar alerts.

---

## 🔧 Tech Stack

- **React Native**
- **Flickr API**
- **AsyncStorage** for caching
- **Axios** for HTTP requests
- **React Navigation** (Drawer + Modal)
- **react-native-paper** for UI components

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone git@github.com:your-username/gallery-app.git
cd gallery-app
```
---
### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the App
```bash
npx react-native run-android
# or for iOS (requires macOS + Xcode)
npx react-native run-ios
```