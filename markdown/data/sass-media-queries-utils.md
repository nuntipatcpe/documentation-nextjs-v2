---
title: "Sass"
popular: 0
name: "Media Queries"
---

# Media Queries

- \_breakpoint.scss -> **Max-width**

  ```
  $breakpoints: (
  "xs": 300px,
  "sm": 480px,
  "md": 720px,
  "lg": 960px,
  "xl": 1200px,
  );

  @mixin xs {
    @media (max-width: map-get($breakpoints,"xs")) {
        @content;
    }
  }
  @mixin sm {
    @media (max-width: map-get($breakpoints,"sm")) {
        @content;
    }
  }
  @mixin md {
    @media (max-width: map-get($breakpoints,"md")) {
        @content;
    }
  }
  @mixin lg {
    @media (max-width: map-get($breakpoints,"lg")) {
        @content;
    }
  }
  @mixin xl {
    @media (max-width: map-get($breakpoints,"xl")) {
        @content;
    }
  }

  @mixin breakpoint($bp: 0) {
    @media (max-width: $bp) {
        @content;
    }
  }
  ```

- \_breakpoint.scss -> **min-width**

  ```
  $breakpoints: (
  "xs": 0,
  "sm": 480px,
  "md": 720px,
  "lg": 960px,
  "xl": 1200px,
  );

  @mixin xs {
    @media (min-width: map-get($breakpoints,"xs")) {
        @content;
    }
  }
  @mixin sm {
    @media (min-width: map-get($breakpoints,"sm")) {
        @content;
    }
  }
  @mixin md {
    @media (min-width: map-get($breakpoints,"md")) {
        @content;
    }
  }
  @mixin lg {
    @media (min-width: map-get($breakpoints,"lg")) {
        @content;
    }
  }
  @mixin xl {
    @media (min-width: map-get($breakpoints,"xl")) {
        @content;
    }
  }

  @mixin breakpoint($bp: 0) {
    @media (min-width: $bp) {
        @content;
    }
  }

  ```

  Useage

  ```
  @include xs {
    background-color: #000;
  }
  @include sm {
    background-color: #ccc;
  }
  @include md {
    background-color: yellow;
  }
  @include lg {
    background-color: salmon;
  }
  @include xl {
    background-color: green;
  }
  ```
