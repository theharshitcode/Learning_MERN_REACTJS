import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  return (
    <>
      <Navbar />
      <div className='cards'>
        <Card title='card1' description='hello this is card one!!!' />
        <Card title='card2' description='hello this is card two!!!' />
        <Card title='card3' description='hello this is card three!!!' />
        <Card title='card4' description='hello this is card four!!!' />
        <Card title='card5' description='hello this is card five!!!' />

      </div>
    </>
  )
}

export default App
