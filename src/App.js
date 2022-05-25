import "./App.css"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import FullRecipe from "./components/FullRecipe"
import Layout from "./components/Layout"
import Home from "./components/Home"
import NoMatch from "./components/NoMatch"
import Favorites from "./components/Favorites"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#112B3C",
    },
    secondary: {
      main: "#F66B0E",
    },
    info: {
      main: "#205375",
    },
    warning: {
      main: "#EFEFEF",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='recipe/:recipeName' element={<FullRecipe />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
