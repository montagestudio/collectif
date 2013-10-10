var Montage = require("montage/core/core").Montage,
    Converter = require("montage/core/converter/converter").Converter;

exports.HistoryItemNameConverter = Converter.specialize({

    constructor: {
        value: function HistoryItemNameConverter() {
            return this.super();
        }
    },

    allowPartialConversion: {
        value: false
    },

    convert: {value: decodeURI},
    revert: {value: encodeURI}

});
