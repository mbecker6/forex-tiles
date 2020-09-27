window.onload = function() {
    var widgets = document.getElementsByClassName('forex-widget')
    for (let widget of widgets) {
        var pair = widget.getAttribute('widget-pair')
        var interval = widget.getAttribute('widget-interval')
        var id = widget.getAttribute('id')

        new TradingView.widget(
            {
            "autosize": true,
            "symbol": `FX:${pair}`,
            "interval": interval,
            "timezone": "Europe/Berlin",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": id,
            "hide_side_toolbar": false,
            "studies": [
                "MAExp@tv-basicstudies"
            ]
          }
        )
    }
}

function cycle() {
    let pairs = ['EURUSD', 'USDJPY', 'GBPUSD', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD', 'EURGBP', 'EURJPY', 'EURCHF']
    index = 0;
    var widget = document.getElementById('widget');
    setInterval(() => {
        widget.setAttribute('widget-pair', pairs[index]);
        if (index == pairs.length) {
            index = 0;
        } else {
            index += 1;
        }

        var pair = widget.getAttribute('widget-pair');
        var interval = widget.getAttribute('widget-interval');
        var id = widget.getAttribute('id');

        new TradingView.widget(
            {
            "autosize": true,
            "symbol": `FX:${pair}`,
            "interval": interval,
            "timezone": "Europe/Berlin",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": id,
            "hide_side_toolbar": false,
            "studies": [
                "MAExp@tv-basicstudies"
            ]
          }
        );
    }, 60000)
}
