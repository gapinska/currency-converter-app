import React, { useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import { useForm } from "react-hook-form"
import moment from "moment"

const ConverterFormContainer = ({ currencies }) => {
  const [baseCurrency, setBaseCurrency] = useState("PLN")
  const [conversionCurrency, setConversionCurrency] = useState("USD")
  const [conversedValue, setConversedValue] = useState(null)
  const [conversionHistory, setConversionHistory] = useState([])

  console.log(moment())
  console.log(moment().format("LLLL"))

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }))

  const classes = useStyles()

  const handleChangeBaseCurrency = (event) => {
    setBaseCurrency(event.target.value)
  }

  const handleChangeConversionCurrency = (event) => {
    setConversionCurrency(event.target.value)
  }

  const handleClickConversion = () => {}

  const onSubmit = (values) => {
    console.log(values)
    setTimeout(() => {
      setError(
        "amount",
        { message: "Błąd z kwotą po sekundzie" },
        { shouldFocus: true }
      )
    }, 1000)
  }

  return (
    <div className="main-container">
      <div className="currency-selct">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            className="field"
            label="Wpisz kwotę"
            {...register("amount", { required: "Wpisz kwotę" })}
          />
          {errors.amount && errors.amount.message}

          <TextField id="standard-basic" className="field" label="Wynik" />

          <div>
            {/* <TextField
              id="standard-select-currency"
              select
              label="Select"
              //value={baseCurrency}
              //onChange={handleChangeBaseCurrency}
              helperText="Please select currency"
              
            > */}

            <TextField
              id="standard-select-currency"
              select
              label="Select"
              //value={baseCurrency}
              //onChange={handleChangeBaseCurrency}
              helperText="Please select currency"
              {...register("currencyFrom", { required: "Wybierz walutę" })}
            >
              {Object.values(currencies).map((currency) => (
                <MenuItem key={currency.id} value={currency.id}>
                  {currency.id}
                </MenuItem>
              ))}
            </TextField>
            {errors.currencyFrom && errors.currencyFrom.message}
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              //value={baseCurrency}
              //onChange={handleChangeBaseCurrency}
              helperText="Please select currency"
              {...register("currencyTo", { required: "Wybierz walutę" })}
            >
              {Object.values(currencies).map((currency) => (
                <MenuItem key={currency.id} value={currency.id}>
                  {currency.id}
                </MenuItem>
              ))}
            </TextField>
            {errors.currencyTo && errors.currencyTo.message}
          </div>
          <button type="submit">KONWERTUJ</button>
        </form>
      </div>
    </div>
  )
}

export default ConverterFormContainer
