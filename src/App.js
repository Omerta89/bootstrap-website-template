import './App.css';
import MiddleColum from './Components/MiddleColum';
import SideColum from './Components/SideColum';


function App() {
  return (
    <div className="App">



      <div className="header">
        <h2>Header</h2>
        <h2>CSS Template using Float</h2>

      </div>



      <div className="row">
        <SideColum></SideColum>
        <MiddleColum>        
        </MiddleColum>
        <SideColum></SideColum>
      </div>




      <div className="footer">
        <p>Footer</p>
      </div>





    </div>
  );
}

export default App;
