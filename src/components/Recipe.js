import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Typography, Button } from "@mui/material"
import "./Recipe.css"
import { Link } from "react-router-dom"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

const Recipe = ({ recipe, id, addToFavorites, favorites }) => {
  const { calories, label, image, cuisineType, ingredientLines, mealType, totalTime, url } = recipe

  const filter = favorites.filter((el) => el.label === label)

  const handleFavorites = (e) => {
    addToFavorites(recipe)
  }

  const sx = {
    backgroundColor: "#205375",
    border: "1px solid #000",
    borderRadius: "1rem",
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    color: "#EFEFEF",
  }

  const sx_favorite_icon = {
    position: "absolute",
    top: "0",
    right: "0",
    fontSize: "2rem",
    color: filter.length > 0 ? "#F66B0E" : "#fff",

    "&:hover": {
      cursor: "pointer",
      transition: "all 0.2s",
      color: "#F66B0E",
    },
  }

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={sx}>
        <Box sx={{ width: "100%", position: "relative" }}>
          <Link to={`/Recipe-app/recipe/${id}`} state={recipe}>
            <Typography
              variant='h6'
              component='h2'
              sx={{ width: "80%", textAlign: "center", margin: "0 auto", color: "#fff" }}
            >
              {label}
            </Typography>
          </Link>
          {filter.length > 0 ? (
            <FavoriteIcon sx={sx_favorite_icon} onClick={handleFavorites}></FavoriteIcon>
          ) : (
            <FavoriteBorderIcon
              sx={sx_favorite_icon}
              onClick={handleFavorites}
            ></FavoriteBorderIcon>
          )}
        </Box>
        <Box>
          <Typography variant='body1' component='p'>
            <Typography variant='overline' component='span' sx={{ fontWeight: "bold" }}>
              Meal Type:{" "}
            </Typography>
            {mealType}
          </Typography>
          <Typography variant='body1' component='p'>
            <Typography variant='overline' component='span' sx={{ fontWeight: "bold" }}>
              Cuisine Type:{" "}
            </Typography>
            {cuisineType}
          </Typography>
          <Typography variant='body1' component='p'>
            <Typography variant='overline' component='span' sx={{ fontWeight: "bold" }}>
              Calories:{" "}
            </Typography>
            {calories}
          </Typography>
          <Typography variant='body1' component='p'>
            <Typography variant='overline' component='span' sx={{ fontWeight: "bold" }}>
              Total time:{" "}
            </Typography>
            {totalTime}
          </Typography>
        </Box>
        <img src={image} alt={label} style={{ borderRadius: "1rem" }}></img>
        <Link to={`/Recipe-app/recipe/${id}`} state={recipe}>
          <Button variant='contained' color='secondary' fullWidth>
            Receta Completa
          </Button>
        </Link>
      </Box>
    </Grid>
  )
}

export default Recipe
