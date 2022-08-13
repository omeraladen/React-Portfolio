
import './App.scss';
import {Routes , Route} from 'react-router-dom'
import Layout from './component/Layout';
import Home from './component/Home/Home';
import About from './component/About/About'


function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        
     </Routes> 
    </>
  );
}

export default App;
