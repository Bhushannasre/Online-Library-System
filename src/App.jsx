import Headers from "./components/Headers"
import BrowserBook from "./components/BrowserBook"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"



function App() {
return(
  <Provider store={appStore}>
    <Headers></Headers>
    <Outlet></Outlet>
  </Provider>
)
}

export default App
