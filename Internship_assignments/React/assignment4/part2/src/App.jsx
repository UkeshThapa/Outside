import './App.scss'
import Box from './Box.jsx'
import usePos from './hook/usePos'

function App() {
  return (
    <div className='app'>
      <Box color={'red'} shape="arrow-up"/>
      <Box color={'blue'} shape="circle"/>
      <Box color={'yellow'} shape="rectangle"/>
      <Box color={'green'} shape="square"/>
    </div>

  )
}

export default App
