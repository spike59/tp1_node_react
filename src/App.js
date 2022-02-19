import './App.css';
import { HomePage } from './components/pages/home/home_page';
import { ContactPage } from './components/pages/contact/contact_page';
import { ProductPage } from './components/pages/product/product_page';
import { UsersComponent} from './components/pages/admin/users_component';
import { UserComponent } from './components/pages/auth/UserComponent';
import { RegisterPage } from './components/pages/auth/register_page';
import { LoginPage } from './components/pages/auth/login_page';
import { LogoutPage } from './components/pages/auth/logout_page';
import { AdminPage } from './components/pages/admin/admin_page';
import { ValidationPage } from './components/pages/auth/validationPage';
import { ErrorPage } from './components/pages/error_page';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/user" element={<UsersComponent />} />
        <Route exact path="/user/:id" element={<UserComponent />} />
        <Route path="/admin" element={<AdminPage role="Admin"/>} />
        <Route path="/dataAdmin" element={<AdminPage role="DataAdmin"/>} />
        <Route path="/account/validation" element={<ValidationPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
