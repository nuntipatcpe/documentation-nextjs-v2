# React Router DOM V6

## install

```
npm install react-router-dom
```

## Configuring Routes

```
import { BrowserRouter
        , Routes
        , Route
    } from "react-router-dom";
```

```
 <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
            </Route>
        </Route>
    </Routes>
  </BrowserRouter>
```

- **Router**

```
<BrowserRouter>
    <></>
</BrowserRouter>
```

- **Routes**

First page

```
<Routes>
    <Route index element={<Home />} />
</Routes>
```

or

```
oute path="/" element={<Team />} />
```

Path other

```
<Routes>
     <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
    </Route>
</Routes>
```

## Navigation

**Link** tag

```
import { Link } from "react-router-dom";
```

```
<Link to="/pathname"> </Link>
```

**useNavigate** to do it yoursel

```
import { useNavigate } from "react-router-dom";
```

```
function(e){
    let navigate = useNavigate();
    if(e){
        navigate.(`/path`);
    }
}
```

```
function(e){
    let navigate = useNavigate();
    if(e){
        navigate.(-1);
    }
}
```

## Reading URL Parameters

- Set Route **:id**

```
<Route path='/Products/:id' element={<Products/>} />
```

- useParams

  ```
  import{useParams} from 'react-router-dom'
  ```

  ```
  const {id} = useParams();
  ```

- useMatch **check URL /:id**

  ```
  import { useMatch } from "react-router-dom";
  ```

  :id

  ```
  const match = useMatch("/stock/edit/:id");
  ```

  id

  ```
  match.params.id
  ```

- history
  ```
  history.back();
  ```

## Not Found Routes

set path =**" \* "**

```
 <Route path="*" element={<NotFound />} />
```
