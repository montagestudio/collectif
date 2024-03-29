var Montage = require("montage/core/core").Montage,
    Converter = require("montage/core/converter/converter").Converter,
    HistoryItem = require("./history-item").HistoryItem;

exports.HistoryItemConverter = Converter.specialize({

    constructor: {
        value: function HistoryItemConverter() {
            return this.super();
        }
    },

    allowPartialConversion: {
        value: false
    },

    convert: {
        value: function (url) {
            return HistoryItem.create().initWithUrl(url);
        }
    },

    revert: {
        value: function (historyItem) {
            return historyItem.url;
        }
    }
});
