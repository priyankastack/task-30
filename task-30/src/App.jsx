import { useState } from 'react'
import Header from './components/header.jsx';
import Form from './pages.jsx/form.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Form/>
      
    </>
  )
}

export default App;
