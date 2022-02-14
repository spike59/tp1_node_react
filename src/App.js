import './App.css';
import { HomePage } from './components/pages/home/home_page';
import { ContactPage } from './components/pages/contact/contact_page';
import { ProductPage } from './components/pages/product/product_page';
import { UsersComponent} from './components/pages/admin/users_component';
import { UserComponent } from './components/pages/auth/UserComponent'
import { LoginPage } from './components/pages/auth/login_page';
import { AdminPage } from './components/pages/admin/admin_page';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UsersComponent />} />
        <Route path="/user/:id" element={<UserComponent />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
