import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
   <div style={{textAlign:'center'}}>
      <NavBar/>

      <ItemListContainer greetings={'Nuestros Productos'}/>

   </div>
  );
}

export default App;
