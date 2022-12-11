import './App.css';
import { Navbar } from './Pages/Shared/Navbar';
import { Footer } from './Pages/Shared/Footer';
import { Route } from "./routes";

function App() {
  return (
    <div>
      <Navbar />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
