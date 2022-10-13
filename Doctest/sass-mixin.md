# Mixin

```
@mixin nameMixin {
  
}
```
## Usage
```
@mixin btn{
  
}
```

```
nav {
  @include btn;
}
```
or

```
@mixin btn( $x, $y : 10px, $y : 20px){
  
}
```

```
nav {
  @include btn(10px,0);
}
```


