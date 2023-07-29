import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import Login from "./Login";
import Form from "./Form";
function App()
{
    const {authIsReady,user} = useAuthContext()
    console.log("This is the user",user)
    return (
        <div>
        {authIsReady && (
            <BrowserRouter>
            <Routes>
            <Route path = "/" element={user?<Form/>:<Login/>}/>
            </Routes>
            </BrowserRouter>
        )}
    </div>
    )
}
export default App