import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [apiData, setapiData] = useState([])

  useEffect(() => {

    axios.get("/api/todos").then(
      (response) => {
        setapiData(response.data)
      }
    ).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>
      <h1>Connecting Backend With React (Front-end)</h1>
      <h2>Number of Data: {apiData.length} </h2>

      {apiData.map((data, index) => {
        return (
          <div key={data.id} >
            <h1>Created by UserID: {data.userId}</h1>
            <h2>Title: {data.title}</h2>
            <h2>isCompleted: {JSON.stringify(data.completed)}</h2>
          </div>
        )
      })}

    </>
  )
}

export default App
