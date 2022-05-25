import React from "react"
import { useState, useEffect } from "react"
import SearchForm from "./SearchForm"
import Recipe from "./Recipe"
import { Container, Grid } from "@mui/material"
import recipesService from "../services/recipes"
import uniqid from "uniqid"

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState([])

  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    const getRecipes = async () => {
      const data = await recipesService.getRecipes(query)
      console.log(data)
      setRecipes(data.hits)
    }
    getRecipes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  useEffect(() => {
    let favoritesRecipes = localStorage.getItem("receta")
    if (favoritesRecipes) {
      setFavorites(JSON.parse(favoritesRecipes))
    }
  }, [])

  const addToFavorites = (recipe) => {
    console.log("Agregar a favoritos")
    let array = favorites
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
    setFavorites([...array])

    localStorage.setItem("receta", JSON.stringify(favorites))
  }

  return (
    <div>
      <SearchForm setQuery={setQuery}></SearchForm>

      <Container maxWidth='lg' sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent={"space-evenly"}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => {
              let id = uniqid()
              return (
                <Recipe
                  key={id}
                  recipe={recipe.recipe}
                  id={id}
                  addToFavorites={addToFavorites}
                  favorites={favorites}
                ></Recipe>
              )
            })
          ) : (
            <p>No hay recetas</p>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default Home
