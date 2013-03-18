ajax
====

Standalone AJAX library inspired by jQuery/zepto

## Installation

[![component](https://component.jit.su/component-badge.svg)](https://component.jit.su/refer/ForbesLindesay/ajax)

```
component-install ForbesLindesay/ajax
```

Then load using:

```JavaScript
var ajax = require('ajax');
```

Or load using a script tag (downloads are available [here](https://component.jit.su/ForbesLindesay/ajax/download))

```html
<script src="ajax.min.js"></script>
```

Then just refer to it in your script as `ajax`

## API

### ajax(url, settings)

**url** A string containing the URL to which the request is sent.
**settings** A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with `ajax.settings`. See ajax(settings) below for a complete list of all settings.

### ajax(settings)

**settings** A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with `ajax.settings`.

For a list of available settings see:

http://api.jquery.com/jQuery.ajax/

## License

  MIT

  If you find it useful, a payment via [gittip](https://www.gittip.com/ForbesLindesay) would be appreciated.

![viewcount](https://viewcount.jepso.com/count/ForbesLindesay/ajax.png)
