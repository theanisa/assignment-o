
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02


---


# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 



## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🧠 React Basics (Answers)

### 1) What is JSX, and why is it used?
**JSX** is a syntax extension for JavaScript that looks like HTML. It is used in React to describe the UI structure in a readable way. Under the hood, JSX is compiled to `React.createElement` calls, which create the virtual DOM elements.

### 2) What is the difference between State and Props?
- **Props** are inputs passed from a parent component to a child component. They are read-only and cannot be changed by the receiving component.
- **State** is owned and managed inside a component. It can be updated using setters like `setState` (or `useState`), and updates cause the component to re-render.

### 3) What is the useState hook, and how does it work?
`useState` is a React Hook that provides a state variable and a setter function. When you call the setter, React re-renders the component with the new state.

Example:
```js
const [count, setCount] = useState(0);
setCount(count + 1);
```

### 4) How can you share state between components in React?
You can share state by lifting it up to a common parent component and passing the state + setter down via props. Another approach is using React Context (`createContext` / `useContext`) or a state management library like Redux.

### 5) How is event handling done in React?
React uses camelCase event props like `onClick`, `onChange`, etc. You pass a function as the event handler:

```jsx
<button onClick={() => console.log('clicked')}>Click me</button>
```

React wraps native browser events with a cross-browser synthetic event system.

---

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.


---


