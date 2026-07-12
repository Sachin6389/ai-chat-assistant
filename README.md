# 🤖 AI Chat Assistant Frontend

A modern, responsive AI Chat Assistant frontend built with **React**, **Vite**, and **Tailwind CSS**. This application provides an intuitive user interface for interacting with an AI chatbot powered by a Flask backend and the Groq API.

---

# 📌 Project Description

The AI Chat Assistant Frontend is a single-page web application that allows users to communicate with an AI assistant in real time. It connects to a Flask backend through REST APIs to send user messages, receive AI-generated responses, view chat history, and manage conversations.

The project focuses on creating a clean, fast, and responsive user experience while demonstrating frontend development using modern React technologies.

---

# ✨ Features

* 💬 Real-time AI chat interface
* ⚡ Fast development with Vite
* 🎨 Responsive UI using Tailwind CSS
* 📜 View chat history
* 🗑️ Clear conversation history
* 📱 Mobile-friendly design
* 🔄 REST API integration with Flask backend
* 🧭 Multi-page navigation using React Router
* 🧩 Reusable React components

---

# 🛠 Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* Axios
* React Router DOM
* Lucide-react

### Backend (Integrated)

* Flask
* Groq API
* Python

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

# 📁 Project Structure

```text
ai-chat-assistant-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │          └── assets.js
│   │   
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── History.jsx
│   │   ├── Container.jsx
│   │   └── About.jsx
│   │   ├── Logo.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
└── .env
```

---

# ⚙ Installation Instructions

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-chat-assistant.git
```

## 2. Navigate to the project folder

```bash
cd ai-chat-assistant
```

## 3. Install dependencies

```bash
npm install
```
---

# 🔧 Setup Instructions

## Step 1: Configure the Backend API

Update the backend API URL in your Axios configuration or API file.

Example:

```javascript
VITE_API_URL = "";
```
---

## Step 2: Start the Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

# 🚀 Usage Guide

1. Start the Flask backend server.
2. Start the React frontend using `npm run dev`.
3. Open your browser.
4. Navigate to `http://localhost:5173`.
5. Type a message in the chat box.
6. Click the **Send** button.
7. Receive AI-generated responses instantly.
8. View previous conversations on the **History** page.
9. Clear the chat history when needed.

---

# 🌐 Backend API Endpoints

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| GET    | `/`        | Backend status        |
| POST   | `/chat`    | Send a message to AI  |
| GET    | `/history` | Retrieve chat history |
| DELETE | `/clear`   | Clear chat history    |

---

# 📷 Example Outputs

## Home Page

* Header with application logo
* Chat interface
* Input field
* Send button
* AI responses displayed in chat bubbles
* Footer

---

## History Page

* Displays previous conversations
* Scrollable message history
* Clear History option

---

## Example Conversation

**User**

```text
What is Artificial Intelligence?
```

**AI**

```text
Artificial Intelligence (AI) is the simulation of human intelligence by machines, enabling them to perform tasks such as learning, reasoning, problem-solving, and decision-making.
```

---

# 📦 Dependencies

```text
react
react-dom
react-router-dom
axios
tailwindcss
vite
lucide-react
```

Install all dependencies using:

```bash
npm install
```

---

# 📱 Responsive Design

The application is optimized for:

* Desktop
* Laptop
* Mobile Devices

---


