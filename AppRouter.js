import Login from '../reactnav/Login';
import Registration from '../reactnav/Registration';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '../reactnav/NotFound';
import Header from './Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
                <Switch>
                    <Route path="/" component = {Login} exact = {true}></Route>
                    <Route path="/register/:id" component = {Registration}></Route>
                    <Route component = {NotFound}></Route>
                </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter