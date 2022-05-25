import React from "react"
import { useLocation } from "react-router-dom"
import Box from "@mui/material/Box"

import { Typography, Link, List, ListItem, ListItemText, ListItemIcon, Grid } from "@mui/material"
import ArrowRight from "@mui/icons-material/ArrowRight"
import uniqid from "uniqid"

const FullRecipe = () => {
  const location = useLocation()
  const recipe = location.state
  const { calories, image, label, cuisineType, ingredientLines, mealType, totalTime, url } = recipe

  console.log(url)

  const sx_box_container = {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "none", md: "center" },
    alignItems: { xs: "center", md: "flex-start" },
    gap: "1rem",
    color: "#EFEFEF",
    textAlign: "center",
  }

  const sx_box_column = {
    width: { xs: "100%", md: "auto" },
    maxWidth: { xs: "100%", md: "500px" },
    textAlign: "center",
    backgroundColor: "#205375",
    padding: "1rem",
    border: "3px solid #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    borderRadius: "1rem",
  }

  return (
    <Box sx={sx_box_container}>
      <Box sx={sx_box_column}>
        <Box sx={{ width: "100%", position: "relative" }}>
          <Typography
            variant='h6'
            component='h2'
            sx={{ width: "80%", textAlign: "center", margin: "0 auto" }}
          >
            {label}
          </Typography>
        </Box>
        <img src={image} alt={label} style={{ borderRadius: "1rem" }}></img>
        <Box sx={{ textAlign: "justify" }}>
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
      </Box>
      <Box sx={sx_box_column}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
          }}
        >
          {ingredientLines.map((el) => (
            <ListItem key={uniqid()}>
              <ListItemIcon>
                <ArrowRight color='warning' />
              </ListItemIcon>
              <ListItemText primary={el} />
            </ListItem>
          ))}
        </List>
        <Link
          href={url}
          target='_blank'
          component='a'
          color='primary'
          underline='hover'
          variant='h6'
          sx={{ backgroundColor: "#F66B0E", borderRadius: "0.3rem", width: "100%" }}
        >
          Source
        </Link>
      </Box>
    </Box>
  )
}

export default FullRecipe
