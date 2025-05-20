import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import components 
import Punjabi from './food/punjabi';
import SouthIndian from './food/south_indian';
import Gujarati from './food/gujarati';
import FastFood from './food/fast_food';
import Menu from './food/menu';
import PageNotFound from './food/pagenotfound';
//create routing function 
function MyRoutes()
{
    return (<BrowserRouter>
        <Routes>
            <Route index path='/' element={<Menu />} />
            <Route path='/punjabi' element={<Punjabi />} />
            <Route path='/south-indian' element={<SouthIndian />} />
            <Route path='/fast-food' element={<FastFood />} />
            <Route path='/gujarati' element={<Gujarati />} />
            {/* 404 Route */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);