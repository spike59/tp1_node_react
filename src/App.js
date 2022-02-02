import './App.css';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Products } from './components/products';
import {Footer} from './components/footer';
import { GenderMenu } from './components/gender_menu';
import { CategoryMenu } from './components/category_menu';
import {Contact} from './components/contact';
import {FilterMenu} from './components/filter_menu';
function App() {
  return (
    <div className="App">
      <p>bonjour</p>
          <Nav/>
          <Header/>
          <FilterMenu gender_id="1" category_id="1" />
          {/* <GenderMenu/>
          <CategoryMenu/> */}
          <Products/>
          {/* <Contact/> */}
          <Footer/>
    </div>
  );
}

export default App;
