import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "../styles/GlobalStyles";

import Users from "../pages/Users/Users";
import ViewUser from "../pages/ViewUser/ViewUser";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/users" component={Users} />

                <Route path="/users/:id" component={ViewUser} />
            </Switch>
            
            <GlobalStyles />
        </BrowserRouter>
    );
}

export default Routes;