import React,{useState,useEffect} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const App = () => {
  const [theme, setTheme] = useState("light")
  const [isDarkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    if(theme==="dark")
    {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
    else
    {
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    }
  }, [theme])

  const handleThemeSwitch=()=>{
    setTheme(theme==="dark"?"light":"dark");
    
  }


  return (
    <div className='w-full h-screen bg-white dark:bg-black'>
      
    <div>

     <DarkModeSwitch

      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={handleThemeSwitch}
      size={80}
    />
    </div>
    <div>
      serar
    </div>
    </div>
  )
}

export default App
