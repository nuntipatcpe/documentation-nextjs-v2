# Use 

- **@use'./path';** 

## usage

- _color.scss

```
$color-1:#ccc
```
- _navBar.scss

```
@use './utils/color'
```

```
.navBar{
    background-color: color$.color-1;
}
```
or

```
@use './utils/color' as col
```

```
.navBar{
    background-color: col$.color-1;
}
```
or

```
@use './utils/color' as *
```

```
.navBar{
    background-color: $.color-1;
}
```