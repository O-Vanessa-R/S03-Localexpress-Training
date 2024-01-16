import Header from './Header/Header';

import './App.scss';
import Footer from './Footer/Footer';
import Content from './Content/Content';


function App() {

  console.log(import.meta.env.VITE_API_URL);
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
