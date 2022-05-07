import {
    BrowserRouter,
    Routes,
    Navigate,
    Route
} from 'react-router-dom';
import { Navigation } from './Navigation';
import { Home } from './Home';
import { Form } from './Form';
import { Buttons } from './Buttons';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/'>
                    <Route index element={ <Home /> } />
                    <Route path='form' element={ <Form /> } />
                    <Route path='buttons' element={ <Buttons /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}