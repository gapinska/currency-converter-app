import React, { useEffect, useState } from "react"
import { BASE_URL, MAIN_DATA } from "./constants/urlConstants"
import axios from "axios"
import "./App.css"

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function getData() {
      const promise = axios.get(BASE_URL + MAIN_DATA)
      const response = await promise
      setData(response.data.results)
    }

    getData()
  })
  return <div className="App"></div>
}

export default App
