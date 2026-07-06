# React Modal Component

A reusable and accessible **Modal (Dialog) Component** built using **React**. This project demonstrates state management, event handling, conditional rendering, and user interaction patterns commonly asked in frontend machine coding and product-based company interviews.

## 🚀 Features

- ✅ Open modal on button click
- ✅ Close modal on close button click
- ✅ Close modal by clicking outside the modal (overlay click)
- ✅ Close modal by pressing the **Escape (Esc)** key
- ✅ Conditional rendering using React
- ✅ Clean and reusable component structure
- ✅ Responsive centered modal UI

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS3

## 📂 Project Structure

```
src/
│── Modal.tsx
│── App.tsx
│── main.tsx
```

## 📖 How It Works

### Opening the Modal

When the **Open Modal** button is clicked:

- The `isOpen` state is updated to `true`.
- React re-renders the component.
- The modal is conditionally rendered.

### Closing the Modal

The modal can be closed in three different ways:

1. Clicking the **Close** button.
2. Clicking outside the modal (overlay).
3. Pressing the **Escape (Esc)** key.

All three interactions update the `isOpen` state back to `false`, causing React to remove the modal from the DOM.

## 🧠 Concepts Practiced

- React Functional Components
- useState Hook
- useEffect Hook
- Conditional Rendering
- Event Handling
- Keyboard Events
- Event Propagation
- Overlay Click Detection
- Component Reusability
- Clean UI Design

## 📸 Preview

> Add screenshots or a GIF here.

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/your-username/react-modal.git
```

Navigate to the project folder

```bash
cd react-modal
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

## 🎯 Learning Outcomes

Through this project, I learned:

- Managing UI state using React.
- Building reusable UI components.
- Handling keyboard and mouse events.
- Implementing overlay click detection.
- Using conditional rendering effectively.
- Writing clean and maintainable React code.
- Understanding common frontend interview patterns.

## 🚀 Future Improvements

- Prevent background scrolling when the modal is open.
- Focus trap for accessibility.
- Smooth open/close animations.
- React Portal implementation.
- Multiple modal support.
- Customizable modal sizes.
- Dark mode support.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

## 📄 License

This project is licensed under the MIT License.
