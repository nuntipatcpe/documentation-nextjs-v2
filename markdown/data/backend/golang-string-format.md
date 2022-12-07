---
title: "Golang"
popular: 0
name: "String format"
---

# String format

- Default value **%v**

- Boolean **%t**

- Integer **%d** base 10

- String **%s**

- Floating **%f** **%.2f** **%.0f**

## General

- %#v a Go-syntax representation of the value

- %T a Go-syntax representation of the type of the value

- %% a literal percent sign; consumes no value

## Integer:

- %b base 2

- %c the character represented by the corresponding Unicode code point

- %o base 8

- %q a single-quoted character literal safely escaped with Go syntax.

- %x base 16, with lower-case letters for a-f

- %X base 16, with upper-case letters for A-F

- %U Unicode format: U+1234; same as "U+%04X"

## Floating-point and complex constituents

- %b decimalless scientific notation with exponent a power of two,in the manner of strconv.FormatFloat with the 'b' format,e.g. -123456p-78

- %e scientific notation, e.g. -1.234456e+78

- %E scientific notation, e.g. -1.234456E+78

- %F synonym for %f

- %g %e for large exponents, %f otherwise. Precision is discussed below.

- %G %E for large exponents, %F otherwise

- %x hexadecimal notation (with decimal power of two exponent), e.g. -0x1.23abcp+20

- %X upper-case hexadecimal notation, e.g. -0X1.23ABCP+20

## String and slice of bytes (treated equivalently with these verbs):

- %q a double-quoted string safely escaped with Go syntax

- %x base 16, lower-case, two characters per byte

- %X base 16, upper-case, two characters per byte
