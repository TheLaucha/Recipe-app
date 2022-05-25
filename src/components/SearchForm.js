import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const SearchForm = ({ setQuery }) => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const sx = {
    padding: "1rem",
    gap: "1rem",
    marginBottom: "2rem",
    display: "flex",
    alignItemns: "center",
    justifyContent: "center",
  }

  return (
    <Box component='form' className='search_form' onSubmit={handleSubmit} sx={sx}>
      <TextField
        variant='outlined'
        label='chicken'
        onChange={updateSearch}
        value={search}
      ></TextField>
      <Button variant='contained' color='secondary' size='large' type='submit'>
        Search
      </Button>
    </Box>
  )
}

export default SearchForm
