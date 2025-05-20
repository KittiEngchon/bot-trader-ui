/* style.css */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0d1117;
  color: #c9d1d9;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  background: #161b22;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  color: #58a6ff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  font-weight: bold;
  margin-bottom: 4px;
}

input, select, button {
  padding: 10px;
  font-size: 1em;
  border-radius: 8px;
  border: 1px solid #30363d;
  background-color: #0d1117;
  color: #c9d1d9;
}

input:focus, select:focus {
  outline: none;
  border-color: #58a6ff;
}

button {
  background-color: #238636;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #2ea043;
}

.status {
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  background-color: #21262d;
  font-size: 0.95em;
  word-break: break-word;
}
