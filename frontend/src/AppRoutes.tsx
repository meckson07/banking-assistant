import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage/homepage"
import TransactionPage from "./pages/transactionpage/transactionpage"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/transaction" element={<TransactionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes