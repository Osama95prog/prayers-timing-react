
import { Container } from '@mui/material'
import './App.css'
import MainContent from './component/MainContent'

function App() {
 

  return (
    <>
     <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <Container >
        <MainContent maxWidth="xl"/>
      </Container>
     </div>
    </>
  )
}

export default App
