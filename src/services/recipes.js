const APP_ID = "f32b9a31"
const APP_KEY = "1aed731955d8568b338d0fbbbe81e18a"

const getRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`
  )
  const data = await response.json()
  return data
}

export default {
  getRecipes,
}
