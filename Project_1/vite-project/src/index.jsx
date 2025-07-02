import "./style.css"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <p className="text-green-600">Header component</p>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)

