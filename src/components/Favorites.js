import React, { useState, useEffect } from "react"
import uniqid from "uniqid"
import Recipe from "./Recipe"
import { Container, Grid } from "@mui/material"

const Favorites = (favorites) => {
  const [favoritesRecipes, setfavoritesRecipes] = useState([])

  useEffect(() => {
    var retrievedObject = localStorage.getItem("receta")

    if (retrievedObject) {
      setfavoritesRecipes(JSON.parse(retrievedObject))
    }
  }, [])

  const addToFavorites = (recipe) => {
    console.log("Agregar a favoritos")
    let array = favoritesRecipes
    let addArray = true
    array.forEach((el, i) => {
      if (el.label === recipe.label) {
        array.splice(i, 1)
        addArray = false
      }
    })
    if (addArray) {
      array.push(recipe)
    }
    setfavoritesRecipes([...array])

    localStorage.setItem("receta", JSON.stringify(favoritesRecipes))
  }

  return (
    <div>
      <h2>Favorites</h2>
      <Container maxWidth='lg' sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent={"space-evenly"}>
          {favoritesRecipes.map((recipe) => {
            let id = uniqid()
            return (
              <Recipe
                key={id}
                recipe={recipe}
                id={id}
                addToFavorites={addToFavorites}
                favorites={favoritesRecipes}
              ></Recipe>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Favorites
