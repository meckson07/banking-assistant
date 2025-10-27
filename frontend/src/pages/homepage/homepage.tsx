import { NavLink } from 'react-router-dom'
import './homepage.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="home-page-heading">Welcome to Banking Assistant</h1>
            <ul className="options-list">
                <li className="nav-options">
                    <NavLink className="nav-button" to="transaction">Money Deposit / WithDrawl</NavLink>
                    </li>
                <li className="nav-options">
                    <NavLink className="nav-button" to="transaction">Check Bank Balance</NavLink>
                    </li>
                <li className="nav-options">
                    <NavLink className="nav-button" to="transaction">Check Transactions</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HomePage