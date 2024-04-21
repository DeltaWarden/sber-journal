import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import homePage from './components/pages/home/homePage'
import Header from "./components/base/header/header"
import NotFoundPage from './components/pages/notfound/NotFoundPage';
import Profile from './components/base/profile/profile'
import Lk from './components/pages/lk/lk';
import {PrivateRoute} from './components/utils'
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from './keycloak'
// import { useKeycloak } from "@react-keycloak/web";



function App() {
  // const { keycloak, initialized } = useKeycloak();

  return (
    <>
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/lk' Component={Lk}></Route>
          <Route path='/' Component={homePage}></Route>
          <Route path='*' Component={NotFoundPage}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
    </>
  )
}

export default App;
