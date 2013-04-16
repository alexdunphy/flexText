# [jQuery flexText: auto-height textareas](http://alexdunphy.github.io/flexText/)

A lightweight (~800 bytes) jQuery version of the [A List Apart - Expanding textarea](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) concept for auto-height textareas, extended for additional browser compatibility, addressing a few browser bugs/issues. Tested and working fine in Safari Mac/iOS 5, Chrome, Firefox 3.6+, Opera, IE8+. (In IE7 the functionality is fine, but the textarea may not be pixel-perfect due to box-sizing browser limitations).

## Demo

See [the project page](http://alexdunphy.github.io/flexText/).

## Usage

1. Add the base CSS rules from style.css to your stylesheet (and add visual styling for your purposes).
2. Include the JS files:
	* jQuery (v1.7+)
	* flexText plugin (jquery.flexText.min.js).
3. Inside a document ready function, call the flexText() method on textarea elements:

````javascript
$(function () {
	$('textarea').flexText();
});
````

## Requires

jQuery v1.7+

## References

Based on/extended from the concept by [Neil Jenkins](http://nmjenkins.com/) described in the A List Apart article, [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/)
