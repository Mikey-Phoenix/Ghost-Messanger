import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import { sileo, Toaster } from "sileo";
import Home from './pages/home'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Profile from './pages/profilePage'
import Messages from './pages/messages'
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import { useTheme } from "./context/themeContext"
// import { initTheme } from "./theme/themeToggle";
// initTheme();

function App() {
  // const [count, setCount] = useState(0)
  // const theme = useTheme()
  // console.log(theme.theme)

  return (
    <BrowserRouter>
          <Toaster position="top-center" options={{fill: "var(--surface-bg-hover)", styles:{description: "text-(--grey-400) montserrat-100 font-bold"}}} />
        {/* {theme == "light" ? (
          
        ) : (
          <Toaster position="top-center" theme='dark' />
        )} */}
        {/* <Header /> */}
      
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/messages" element={<Messages />} />
          </Route>


          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
