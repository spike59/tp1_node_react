import './App.css';
import { HomePage } from './components/pages/home/home_page';
import { ContactPage } from './components/pages/contact/contact_page';
import { ProductPage } from './components/pages/product/product_page';
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
