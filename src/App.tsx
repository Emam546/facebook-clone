import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/protector";
import SingUp from "./pages/singUp2";
function App() {
    const [user, setuser] = useState(undefined);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Protected/>}>
                    <Route path="/home" element={<h1>home</h1>}/>
                    <Route path="*" element={<h1>undefined</h1>}/>
                </Route>
                {/* <Route path="/" element={<SingUp setUser={setuser}/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
