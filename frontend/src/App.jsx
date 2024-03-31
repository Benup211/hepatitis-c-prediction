import { Box, Center, Heading } from '@chakra-ui/react'
import { PredictForm } from './components.jsx/predictForm'
function App() {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white' mb={'4'}>
        <Center color='white'>
          <Heading as='h1' fontSize={'1.5rem'}>Hepatitis C Prediction</Heading>
        </Center>
      </Box>
      <PredictForm/>
    </>
  )
}

export default App
