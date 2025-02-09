import "./style/main.scss";
import Form from "./components/Form";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className='container' id={theme}>
      {/* <ToggleButton onChange={toggleTheme} checked={theme === "dark"} /> */}
      <div className='card'>
        <Form />
      </div>
    </div>
    </ThemeContext.Provider>
  )

}

export default App
