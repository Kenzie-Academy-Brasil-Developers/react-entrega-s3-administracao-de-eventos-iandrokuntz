import { useHistory } from "react-router";
import ProductList from "../../components/ProductList";
import "./style.css"

const Home = () => {

  const history = useHistory();

  return (
    <div>
      <h1>Drink Management</h1>
      <h3>Welcome, Choose a drink for your event</h3>
        <div className="Buttons">
            <button onClick={() => history.push("/wedding")}>Go to Wedding</button>
            <button onClick={() => history.push("/confraternization")}>Go to Confraternization</button>
            <button onClick={() => history.push("/graduation")}>Go to Graduation</button>
        </div>
      <h3>Drink Menu</h3>
      <ProductList />
    </div>
  )
}

export default Home;