# Image Processing API 📸

## 📝 Overview
This project is a professional-grade **Image Processing API** built with **Node.js**, **Express**, and **TypeScript**. It allows users to resize images dynamically by passing parameters (filename, width, height) through the URL. The project follows high-quality software engineering standards, including **Unit Testing**, **Caching**, and **Linting**.

---

## 🚀 Key Features

* **Dynamic Resizing:** Uses the `Sharp` library to process images with high performance.
* **Smart Caching:** If a requested image size already exists in the `assets/thumbs` folder, the API serves it directly from the cache to save processing power.
* **TypeScript Implementation:** Written entirely in TypeScript for enhanced type safety and maintainability.
* **Input Validation:** Validates URL parameters (width, height, and filename) and handles errors gracefully.
* **Automated Testing:** Full test suite using `Jasmine` and `Supertest` to ensure the API and the processing logic work as expected.
* **Code Quality:** Integrated with `ESLint` and `Prettier` for consistent and clean code formatting.

---

## 📂 Project Structure Explained

* **`src/index.ts`**: The main entry point of the server.
* **`src/routes/`**: Contains the route handlers. `images.ts` manages the resizing requests.
* **`src/utilities/`**: Contains the core logic (`imageProcessor.ts`) for image manipulation using Sharp.
* **`src/tests/`**: Contains unit tests for the image utility and integration tests for the endpoints.
* **`assets/full/`**: Place your original images here.
* **`assets/thumbs/`**: This is where the processed (resized) images are automatically saved (cached).

---

## 🛠️ How to Get Started

### 1. Install Dependencies
```bash
npm install
2. Build the Project (Compile TS to JS)
Bash
npm run build
3. Run the Server
Bash
npm run start
4. Run Tests
Bash
npm run test
5. Check Code Quality (Linting)
Bash
npm run lint
🧪 API Usage
Once the server is running (usually at http://localhost:3000), you can request an image like this:

URL Template:
http://localhost:3000/api/images?filename=[NAME]&width=[NUMBER]&height=[NUMBER]

Example:
http://localhost:3000/api/images?filename=nature&width=300&height=300

🛡️ Validation & Error Handling
The API is designed to handle the following cases:

Missing parameters: Returns a 400 Bad Request.

Invalid dimensions: Returns an error if width or height are not positive numbers.

Missing original file: Returns a 404 Not Found if the image doesn't exist in assets/full.

👩‍💻 Developed By
Haneen Al-Masri
Computer Engineering Graduate