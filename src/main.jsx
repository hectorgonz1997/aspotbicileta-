import React from 'react'
import { ChakraProvider,} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { theme } from './resources/team/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
