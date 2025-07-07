import { useState, useEffect } from 'react'

import './App.css'
import Cards from './components/Cards'
import './components/Card.css'

function App() {
  // const [Data, setData] = useState(null)
  // const [fetcher, setfetcher] = useState('https://jsonplaceholder.typicode.com/posts')
   const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // for loading state
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();
        setUsers(json);
        setLoading(false);

      } catch (error) {
        setError(`finding Error ${error}`);
        setLoading(false);
      }
    };

    fetchdata();
  }, [])
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {users.map(card => {
        return (
          <div className="card ">
            <div key={card.id} className='title'>
              <span className="id m-4">{card.id}</span>
              {card.title}
              <div className="body">{card.body}</div>
              </div>
            {/* <div className='disc'>{card.disc}</div> */}
          </div>
        )
      })}


    </>
  )
}

export default App
