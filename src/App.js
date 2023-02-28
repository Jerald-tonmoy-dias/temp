import Header from './components/layout/Header';
import CartPage from './pages/CartPage';
import Homepage from './pages/Homepage';
import { useSelector } from "react-redux";

function App() {
  const global = useSelector((state) => state.global.value);

  return (

    <div>
      {/* < !--Navbar -- > */}
      <Header />
      {/* <!--Navbar ends-- > */}
      <main className="py-16">
        {global ? <Homepage /> : <CartPage />}
      </main>
    </div>

  );
}

export default App;
