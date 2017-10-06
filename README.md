# chigai-mock-server [![Build Status](https://travis-ci.org/martinkr/chigai-mock-server.svg?branch=master)](https://travis-ci.org/martinkr/chigai-mock-server)
Modern visual regression testing with ```puppeteer``` and ```blink-diff```

## Visual regression testing
Visual regression testing: compare your current state against your baseline.
It's nothing new. We've done this for ages. Comparing two images. Looking at the current version and the previous one. Searching for the difference. On our own. Manually.

Well, Chiagi does this automatically. It takes a screenshot from a given URI and compares it to the previous version.

## Automated. Always
Chigai is designed to be used in your tests. You can use it in your favourite testrunner. As a regression tool. If your layout changes, it won't go on unnoticed.

# How to use this?
Chigai uses the chigai-mock-server module for running tests against a deterministic url.
It provides one endpoint for static, never changing content.
It provides one endpoint for random changing content.


# Tech Stack
- ECMAScript 2018 on ```nodejs v8.5.0```
- ```koa v2.3.0```
- Complete testsuite based on ```mocha v3.5.2```and ```chai v4.1.2```

## Resources
- [Koa](http://koajs.com/)


## License
Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright (c) 2017 Martin Krause <github@mkrause.info> [http://martinkr.github.io)](http://martinkr.github.io)
