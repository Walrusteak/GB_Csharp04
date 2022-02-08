'use strict';

// 1
//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
// Префиксный инкремент - а сначала увеличивается, а уже потом записывается в с

//пример 2
d = b++;
alert(d); //ответ: 1
// Постфиксный инкремент - сначала записывается значение, а уже потом увеличивается

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
// 1. а = 2
// 2. ++а -> а = 3
// 3. 2 + 3 = 5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
// 1. b = 2
// 2. 2 + 2 = 4
// 3. b++ -> b = 3
alert(a); //3
alert(b); //3


// 2



// 3



// 4



// 5



// 6
