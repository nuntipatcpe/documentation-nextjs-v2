# Forward

**@forward './path'** 
- create **_index.scss**
- export all file in folder **utils**

- utils
    - _font.scss
    - _color.scss
    - _shadow.scss

- _index.scss

```
@forward './font';
@forward './color';
@forward './shadow';
@forward './mixin';
```

## usage

```
@use "../util/index.scss";
```
```
@use "../util/index.scss" as ut;
```
```
@use "../util/index.scss" as *;
```