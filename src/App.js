import './App.css';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Products } from './components/products';
import {Footer} from './components/footer';
import { GenderMenu } from './components/gender_menu';
import { CategoryMenu } from './components/category_menu';
import {Contact} from './components/contact';
import {FilterMenu} from './components/filter_menu';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Nav/>
      <Header/>
      <FilterMenu gender_id="1" category_id="1" />
      {/* <GenderMenu/>
      <CategoryMenu/> */}
      <Products/>
      <Footer/>
    </>
  );
}
function ContactPage() {
  return (
    <>
      <Nav/>
      <Header/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default App;
