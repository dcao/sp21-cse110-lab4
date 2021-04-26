# Part 3

1. The code was reading in the values of the text boxes, which are strings,
   but was never converting them to numbers to add together. Thus, the 
   code was concatenating the strings instead.
2. Change `calculateSum(num1, num2)` to `calculateSum(Number(num1), Number(num2))`.
   See ss3.png.
3. `citylots.json`
4. `part2.js`
5. 11.15 MB
6. 2.95s
7. `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:88.0) Gecko/20100101 Firefox/88.0` (I'm using Firefox)
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. `application/json`
11. fetchData()