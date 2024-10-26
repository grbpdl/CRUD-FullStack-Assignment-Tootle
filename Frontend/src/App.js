import React,{useState,useEffect} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UserCard from './components/UserCard';


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
  const onEditUser=()=>{
    
    
  }
  const onDeleteUser=()=>{
    
    
  }


  return (
    <div className='w-full min-h-screen bg-white dark:bg-black overflow-hidden'>
      <div className='flex justify-center  gap-2 h-auto'>
      <p className='text-3xl font-bold text-black dark:text-white p-2'>
        Crud Opreations
      </p>
      
    <div className='flex justify-end p-2'>

     <DarkModeSwitch

      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={handleThemeSwitch}
      size={40}
    />
    </div>
    </div>
    <div className='p-3'>

    <UserCard
          key="1"
          user={{
            "id": 1,
            "username": "JohnDoe",
            "email": "johndoe@example.com"
          }}
          onEdit={onEditUser}
          onDelete={onDeleteUser}
        />
    </div>
    </div>
  )
}

export default App
