/**
 * jQuery flexText: Auto-height textareas
 * --------------------------------------
 * Requires: jQuery 1.7+
 * Usage example: $('textarea').flexText()
 * Info: https://github.com/alexdunphy/flexible-textareas
 */
 ;(function(b){function a(c){this.$textarea=b(c);this._init()}a.prototype={_init:function(){var c=this;this.$textarea.wrap('<div class="flex-text-wrap" />').before("<pre><span /><br /><br /></pre>");this.$span=this.$textarea.prev().find("span");this.$textarea.on("input propertychange keyup change",function(){c._mirror()});b.valHooks.textarea={get:function(d){return d.value.replace(/\r?\n/g,"\r\n")}};this._mirror()},_mirror:function(){this.$span.text(this.$textarea.val())}};b.fn.flexText=function(){return this.each(function(){if(!b.data(this,"flexText")){b.data(this,"flexText",new a(this))}})}})(jQuery);