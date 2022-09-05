import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
function App() {
  return (
    <div>
       <header>
          <Header/>
        </header>
        <section>
          <Body/>
        </section>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
