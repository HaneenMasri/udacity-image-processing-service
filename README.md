# 🖼️ Professional Image Processing API
### Node.js | TypeScript | Express | Sharp | Jasmine

A high-performance backend service designed to process and resize images dynamically. This project serves as a showcase for writing **Production-Ready** code with a focus on Type Safety, Automated Testing, and Efficient Caching strategies.

---

## 🚀 Key Engineering Features
- **TypeScript Core:** Full type safety and modern ES6+ features for robust maintenance.
- **High-Performance Processing:** Leverages the **Sharp** library for ultra-fast image manipulation.
- **Intelligent Caching:** Implemented a thumb-based caching system to prevent redundant processing and minimize CPU usage.
- **Strict Quality Control:** - **Linting:** Integrated with **ESLint** & **Prettier**.
  - **Testing:** 100% test coverage for utilities and endpoints using **Jasmine** & **Supertest**.
- **Edge-Case Validation:** Robust error handling for invalid dimensions or missing assets.

---

## 🛠️ Architecture & Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Testing:** Jasmine, Supertest
- **Image Engine:** Sharp

---

## 📂 Project Structure
- `src/utilities/`: Core image processing logic.
- `src/tests/`: Unit and integration test suites.
- `assets/full/`: Original high-res source images.
- `assets/thumbs/`: Optimized, resized, and cached assets.

---

## ⚙️ Quick Start
1. `npm install`
2. `npm run build`
3. `npm run test` (To verify the API integrity)
4. `npm run start`

---

## 🔗 API Endpoint Example
`http://localhost:3000/api/images?filename=nature&width=300&height=300`
