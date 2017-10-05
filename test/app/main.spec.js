
/**
 * Specs for chigai's simple test server.
 * It should provide two API Endpoints,
 * - "/static" for static content
 * - "/random" for random aka changing content
 *
 * Chigai hashes the uri and options to identify matching screenshots.
 * We need an uri wich returns changing contnet for proper testing.
 *
 *
 * @copyright 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 */

/* eslint-env mocha */
var app = require("./../../app/main.js");
var request = require("supertest");

	describe("The chigai test server", function () {
		it("should provide an endpoint \"/static\" displaying static text", function (done) {
			request(app.listen())
				.get("/static")
				.expect((ctx) => {
					if (!ctx.res.text.includes("STATIC")) {
						throw new Error();
					}
				})
				.end(done);
		});
		it("should provide an endpoint \"/random\" displaying random text", function (done) {
			request(app.listen())
				.get("/random")
				.expect((ctx) => {
					if (!ctx.res.text.includes("RANDOM")) {
						throw new Error();
					}
				})
				.end(done);
		});
	});
