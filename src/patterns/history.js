define([
    'require',
    '../lib/dist/history.js/scripts/bundled/html4+html5/jquery.history',
    '../logging'
], function(require) {
    require('../src/../lib/dist/history.js/scripts/bundled/html4+html5/jquery.history');
    var log = require('../logging').getLogger('history');
    var History = window.History;

    History.Adapter.bind(window, 'statechange', function() {
        var State = History.getState();
        log.debug("Changed history state:", State);
        if (State.data.selector) {
            //$(State.data.selector).html(State.data.content);
            // TODO: we could implement undo manager for injection
        } else {
            window.location = State.url;
        }
    });

    return {
        markup_trigger: '.record-history',
        initialised_class: '.record-history',
        register_jquery_plugin: true,
        init: function($el, opts) {
            $el.bind('inject', function(event, options) {
                log.debug("passed options to record history from inject:", options);
                var url = options.$trigger_el.attr('href'),
                    title = options.$trigger_el.attr('title') || null;

                // TODO: provide option to select for extracting title, by default: document.title
                History.pushState({selector: $el.attr('id') || $el.selector}, title, url);
            });
        }
    };
});
