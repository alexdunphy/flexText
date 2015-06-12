/**
 * jQuery flexText: Auto-height textareas
 * --------------------------------------
 * Requires: jQuery 1.7+
 * Usage example: $('textarea').flexText()
 * Info: https://github.com/alexdunphy/flexible-textareas
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {

    // Constructor
    function FT(elem) {
        this.$textarea = $(elem);

        this._init();
    }
    
    var cssGlobWrapper = {
            position: 'relative',
            padding: '0',
            outline: '0'
        },
        cssGlobPre = {
			margin: '0',
			border: '0',
			outline: '0',
            width: '100%',
			visibility: 'hidden',
            'white-space': 'pre-wrap',
			'box-sizing': 'border-box'            
        },
        cssGlobTextArea = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
			height: '100%',
			resize: 'none',
			margin: '0',
            'box-sizing': 'border-box'
        };

    FT.prototype = {
        _init: function () {
            var _this = this,
                cssPre = this.$textarea.css([
                    'border','outline','padding',
                    'font','letter-spacing','word-spacing',
					'text-align','text-decoration',
                    'text-indent','text-transform'
                ]),
				cssWrapper = this.$textarea.css(['margin']);

			cssWrapper['min-height'] = this.$textarea.outerHeight();
			
            // Insert wrapper elem & pre/span for textarea mirroring
            this.$textarea.wrap('<div />').before('<pre aria-hidden="true" role="presentation"><span /><br /></pre>');

            this.$span = this.$textarea.prev().find('span');

            this.$textarea.parent().css(cssGlobWrapper).css(cssWrapper);
            this.$textarea.prev().css(cssGlobPre).css(cssPre);
            this.$textarea.css(cssGlobTextArea);

            // Add input event listeners
            // * input for modern browsers
            // * propertychange for IE 7 & 8
            // * keyup for IE >= 9: catches keyboard-triggered undos/cuts/deletes
            // * change for IE >= 9: catches mouse-triggered undos/cuts/deletions (when textarea loses focus)
            this.$textarea.on('input propertychange keyup change', function () {
                _this._mirror();
            });

            // jQuery val() strips carriage return chars by default (see http://api.jquery.com/val/)
            // This causes issues in IE7, but a valHook can be used to preserve these chars
            $.valHooks.textarea = {
                get: function (elem) {
                    return elem.value.replace(/\r?\n/g, "\r\n");
                }
            };

            // Mirror contents once on init
            this._mirror();
        }

        // Mirror pre/span & textarea contents
        ,_mirror: function () {
            this.$span.text(this.$textarea.val());
        }
    };

    // jQuery plugin wrapper
    $.fn.flexText = function () {
        return this.each(function () {
            // Check if already instantiated on this elem
            if (!$.data(this, 'flexText')) {
                // Instantiate & store elem + string
                $.data(this, 'flexText', new FT(this));
            }
        });
    };

}));