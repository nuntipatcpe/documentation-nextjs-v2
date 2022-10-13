## Router V.5

- if use Switch **React Router DOM V5**

```
npm install react-router-dom@5.2.0
```

- import

```
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";
```
- Create Router

```
<Router>
  <></>
</Router>
```
- Create Switch
- exact is first path

```
<Router>
  <Switch>
    <Route path="/" exact>
      <></>
    </Route>
  </Switch>
</Router>
```
- Create Link

```
<Router>
  <Link to="/pathname"> </Link>
  <Routes>
    <></>
  </Routes>
</Router>
```