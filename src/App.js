import './App.css';
import { HomePage } from './components/home_page/home_page';
import { ContactPage } from './components/contact_page/contact_page';
import { ProductPage } from './components/product_page/product_page';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
