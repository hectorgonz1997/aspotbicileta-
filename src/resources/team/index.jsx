import { extendTheme } from "@chakra-ui/react"


const Button={
  variants: {
    outline:{
      borderRadius: '0',
      textTransform: 'uppercase',
      fontWeight: 'light',
      letterSpacing: '1px',
      color: 'white',
      _hover:{
        color:'black'
      }
    }
  }
}

export const theme = extendTheme({components: {Button}});