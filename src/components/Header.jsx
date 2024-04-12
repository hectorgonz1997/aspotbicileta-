import {Box, Button, Flex, Heading,Stack} from '@chakra-ui/react'
import bgImage from '../assets/banner-desktop.jpg'
import bgImageMobile from '../assets/banner-mobile.jpg'

function Header() {
  return (
    <>
      <Box h='50vh' bg='gray' bgImage={[`url(${bgImageMobile})`, null, `url(${bgImage})`]} bgRepeat='no-repeat' bgSize='cover'>
        <Flex direction='column' alignItems='center'  justify='center' h='100%' bg='rgb(0 0 0 / 40%)' p={['0% 4%', null,'0 20%']}>
          <Heading color='white' textTransform='uppercase' textAlign='center' fontWeight='light' letterSpacing='5px'>Domina el terreno</Heading>
          <Stack direction={{ base:'column', md:'row' }} spacing='40px' marginTop='30px' w={['100%', null, 'auto']}>
            <Button variant='outline' size='lg'>Ver detalles</Button>
              <Button variant='outline' size='lg'><a href="https://youtu.be/-EtJlo1VLMU?si=tPRHka-QgbI2cWAx">Ver video</a></Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Header;