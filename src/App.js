import './App.css';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Products } from './components/products';
import {Footer} from './components/footer';
import { GenderMenu } from './components/gender_menu';
import { CategoryMenu } from './components/category_menu';
import {Contact} from './components/contact';

function App() {
  return (
    
    <div className="App">
      <p>bonjour</p>
          <Nav/>
          <Header/>  
          <GenderMenu/>
          <CategoryMenu/>
          <Products/>
          {/* <Contact/> */}
          <Footer/>
    </div>
  );
}

export default App;
