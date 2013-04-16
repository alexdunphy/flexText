/**
 * jQuery flexText: Auto-height textareas
 * --------------------------------------
 * Requires: jQuery 1.7+
 * Usage example: $('textarea').flexText()
 * Info: https://github.com/alexdunphy/flexible-textareas
 */
;(function ($) {

    // Constructor
    function FT(elem) {
        this.$textarea = $(elem);

        this._init();
    }

    FT.prototype = {
        _init: function () {
            var _this = this;

            // Insert wrapper elem & pre/span for textarea mirroring
            this.$textarea.wrap('<div class="flex-text-wrap" />').before('<pre><span /><br /><br /></pre>');

            this.$span = this.$textarea.prev().find('span');

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

})(jQuery);