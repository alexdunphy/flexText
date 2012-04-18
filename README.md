# jQuery flexText - auto-height textareas

A lightweight (~800 bytes) jQuery version of the [A List Apart - Expanding textarea](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) concept for auto-height textareas, extended for additional browser compatibility, addressing a few browser bugs/issues. Tested and working fine in Safari Mac/iOS 5, Chrome, Firefox 3.6+, Opera, IE8+. (In IE7 the functionality is fine, but the textarea may not be pixel-perfect due to box-sizing browser incompatibilites).


## Usage

1. Add the CSS rules from style.css to your stylesheet.
2. Include JS files:
	* jQuery (v1.7+)
	* flexText plugin (jquery.flexText.min.js).
3. Inside a document ready function, call the flexText() method on textarea elements (specify which textareas with a class/id selector if preferred)
```javascript
$(function () {
	$('textarea').flexText();
});
```

## Requires

jQuery v1.7+

## References

Based on/extended from the concept by [Neil Jenkins](http://nmjenkins.com/) described in the A List Apart article, [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/)
