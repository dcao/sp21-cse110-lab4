# Part 1 Writeup

## Part 1a

1. The result of adding num1 and num2 is printed, preceded by "values added: ", if add is true.
2. The result of adding num1 and num2 is printed, preceded by "final result: ", if add is true.
3. The result of adding num1 and num2 is printed, preceded by "values added: ", if add is true.
4. An error is returned. `result` is only defined within the if block.
5. An error is returned. Cannot reassign to `result`.
6. An error is returned. `result` is only defined within the if block.

## Part 1b

1. The length of the `prices` list will be printed (in this case, 3). This is because
   i is declared as a `var` in the loop; before the for loop is exited, i will have
   a value equal to the length of the list.
2. The final discountedPrice in the output will be printed (in this case, 150). This
   is because `discountedPrice` is declared as a `var`, the last time it is assigned
   to is when discounting the last item in the prices list.
3. The last finalPrice in the output will be printed (in this case, also 150). This
   is by the same reasoning as 2, with the difference that this output will be rounded
   to two decimal places.
4. This function takes in a list of prices and a discount to apply to each. For each
   price in the prices list, it multiplies it by `1 - discount` to apply the discount,
   then rounds it to the nearest cent before pushing it to the result. The function returns
   a list of prices with that discount applied, with the prices being round to the
   nearest cent.
5. An error is returned. `i` is only defined inside the `for` loop, since it is
   `let`-bound.
6. An error is returned. `discountedPrice` is only defined inside the `for` loop,
   since it is `let`-bound.
7. The same thing that happened when finalPrice was `var`-bound, since the `let`
   binding is at the function scope.
8. The function returns the same thing that it did before; the only difference is how
   the variables are bound, but functionality is the same here.
9. An error is returned. `i` is only defined inside the `for` loop, since it is
   `let`-bound.
10. The length of the prices array will be printed, since `length` is defined in the
    function scope.
11. The function returns the a list of discounted prices, with the primary difference
    being that the values won't be rounded to the nearest cent.
12. a) `student.name`
    b) `student['Grad Year']`
    c) `student.greeting()`
    d) `student['Favorite Teacher'].name`
    e) `student.courseLoad[0]`
13. a) `'32'` - the 2 is cast to a string to match the type of '3', and the two are concatenated
    b) `1` - the '3' is cast to a number since subtraction doesn't make sense on strings. 3 - 2 = 1.
    c) `3` - `null` is converted to the number `0` to match the numeric type of `3`, and the two are added.
    d) `'3null'` - `null` is converted to the string `'null`' to match the string type of `3`, and the two are concatenated
    e) `4` - `true` is converted to the number `1` to match the numeric type of `3`, and the two are added.
    f) `0` - `false` and `null` are both converted to the number `0` since `+` can be a numeric operation
    g) `'3undefined'` - `undefined` is converted to the string `'undefined`' to match the string type of `3`, and the two are concatenated
    h) `NaN` - `undefined` is converted to the number `NaN`, and anything minus `NaN` is `NaN`.
14. a) `true` - `'2'` becomes the number `2`, which is larger than `1`.
    b) `false` - the character `2` has a larger ascii value than `1`, so `2` is considered larger.
    c) `true` - `'2'` becomes the number `2`, which is equal to `2`.
    d) `false` - the arguments aren't the same type and `===` doesn't do type conversion.
    e) `false` - `true` becomes the number `1`, which doesn't equal to `2`
    f) `true` - `Boolean(2)` is `true`, which is the same as `true`.
15. `==` does equality with type conversions. `===` doesn't convert types before comparing.
17. The `modifyArray` function applies the passed in `callback` to each element of the array
    and pushes it to a result array, before returning the result. The `callback` in this case
    multiplies its input by two. Thus, the result will be `[2, 4, 6]`.
19. 1
    4
    3
    2
