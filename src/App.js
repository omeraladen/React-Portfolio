
import './App.scss';
import {Routes , Route} from 'react-router-dom'
import Layout from './component/Layout';
import Home from './component/Home/Home';
import Work from './component/Work/mywork';
import Contact from './component/Contact/Contact'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='work' element={<Work/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
        
     </Routes> 
    </>
  );
}

export default App;
