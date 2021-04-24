import React, { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import ConverterFormContainer from "../containers/ConverterFormContainer"

const Main = ({ mainLocation, historyLocation, currencies }) => {
  const location = useLocation()
  const history = useHistory()
  const [historyVisible, setHistoryVisible] = useState(false)

  useEffect(() => {
    if (location.pathname === historyLocation) {
      setHistoryVisible(true)
    } else {
      setHistoryVisible(false)
    }
  }, [location.pathname, historyLocation])

  function toggleHistory() {
    history.push(historyVisible ? mainLocation : historyLocation)
  }

  console.log(currencies)

  return (
    <>
      <div>currency converter</div>
      <ConverterFormContainer currencies={currencies} />

      <button onClick={toggleHistory}>Pokaż/ukryj historię</button>

      {historyVisible ? <div>Jest historia</div> : <div>Nie ma historii</div>}
    </>
  )
}

export default Main
