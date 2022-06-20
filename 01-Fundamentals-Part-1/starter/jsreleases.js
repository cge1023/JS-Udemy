//A brief history of javascript
/* 
1995 Brendan Eich creates the very first version of JavaScript in just 10 days. It was called Mocha, but already had many fundamental features of modern JavaScript.

1996 Mocha changes to LiveScript and then to JavaScript, in order to attract Java developers. However, JavaScript has almost nothing to do with Java.
Microsoft launches IE, copying JavaScript from Netscape and calling it JScript;

1997 With a need to standardize the language, ECMA releases ECMAScript 1 (ES1), the first official standard for JavaScript (ECMAScript is the standard, JavaScript the language in practice);

2009 ES5(ECMAScript 5) is released with lots of great new features;

2015 ES6/ES2015 (ECMAScript 2015) was released : the biggest update to the language ever!
ECMAScript changes to an annual release cycle in order to ship less features per update
*/

//Backwards compatibility: don't break the web
/*
the JavaScript engine that is in our browser today is able to understand old code written 25 years ago, without having to rely on version numbers

Don't break the web : old features are never removed / not really new versions, just incremental updates(releases) / websites keep working forever
*/

//Not forwards compatible

//How to use modern JavaScript today
/* During development : Simply use the latest Google Chrome
During production : Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)
*/
