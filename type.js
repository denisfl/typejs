'use strict';
var typeJS = {
    settings: {
        name: '.js__type',
        minWidth: 640,
        maxWidth: 1200,
        baseFont: 16,
        minFontSize: 12,
        maxFontSize: 24,
        fontRatio: 40
    },
    init: function(param) {
        var param = (typeof param != 'undefined') ? param : this.settings;

        this.updParams(param);
        this.resize(param);
    },
    updParams: function(param) {
        var self = this,

            el          = (typeof param['name']        != 'undefined') ? param['name']          : this.settings.name,
            baseFont    = (typeof param['baseFont']    != 'undefined') ? param['baseFont']      : this.settings.baseFont,
            fontRatio   = (typeof param['fontRatio']   != 'undefined') ? param['fontRatio']     : this.settings.fontRatio,
            minWidth    = (typeof param['minWidth']    != 'undefined') ? param['minWidth']      : this.settings.minWidth,
            maxWidth    = (typeof param['maxWidth']    != 'undefined') ? param['maxWidth']      : this.settings.maxWidth,
            minFontSize = (typeof param['minFontSize'] != 'undefined') ? (param['minFontSize'] / baseFont) : (this.settings.minFontSize / baseFont),
            maxFontSize = (typeof param['maxFontSize'] != 'undefined') ? (param['maxFontSize'] / baseFont) : (this.settings.maxFontSize / baseFont),

            elArray = document.querySelectorAll(el),
            elWidth = [],
            width = [],
            font = [],
            fontSize = [];

        for (var i = 0; i <= elArray.length - 1; i++) {
            elWidth[i] = elArray[i].offsetWidth;
            width[i] = elWidth[i] > maxWidth ?  maxWidth : elWidth[i] < minWidth ? minWidth : elWidth[i];
            font[i] = Math.floor(width[i] / fontRatio) / baseFont;
            fontSize[i] = font[i] > maxFontSize ?  maxFontSize : font[i] < minFontSize ? minFontSize : font[i];

            elArray[i].setAttribute('style', 'font-size: ' + fontSize[i] + 'em');
        }
    },
    resize: function(param) {
        var self = this;
        window.addEventListener('resize', function() {
            self.updParams(param);
        }, false);
    }
};

typeJS.init();
