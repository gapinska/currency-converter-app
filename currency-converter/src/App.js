import React, { useEffect, useState } from "react"
import { BASE_URL, MAIN_DATA } from "./constants/urlConstants"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MAIN_LOCATION, HISTORY_LOCATION } from "./constants/urlConstants"
import Main from "./components/Main"
import axios from "axios"
import data from "./data/data.json"
import "./App.css"

function App() {
  const [currencies, setCurrencies] = useState(null)
  useEffect(() => {
    //   async function getData() {
    //     const response = await axios.get(BASE_URL + MAIN_DATA)
    //     setCurrencies(response.data.results)
    //   }

    //   getData()
    setCurrencies(data.results)
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route path={[MAIN_LOCATION, HISTORY_LOCATION]}>
          {!!currencies && (
            <Main
              currencies={currencies}
              mainLocation={MAIN_LOCATION}
              historyLocation={HISTORY_LOCATION}
            />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
