/**
 * @module app/main
 *
 * @description
 * "Chigai: css regression made simple"
 * A server who acts as an endpoint for the specs
 * It should provide two API Endpoints,
 * - "/static" for static content
 * - "/random" for random aka changing content
 *
 * Chigai hashes the uri and options to identify matching screenshots.
 * We need an uri wich returns changing contnet for proper testing.
 *
 * @copyright 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 */


const route = require("koa-route");
const Koa = require("koa");
const app = new Koa();

const static = (ctx) => {
	ctx.body = `<h1>STATIC</h1>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;
};
const random = (ctx) => {
	ctx.body = `<h1>
	RANDOM
	<hr/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	<hr/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	${Math.floor(Math.random() * 1000000000000000000000)}<br/>
	<hr/>
	</h1>`;
};

app.use(route.get("/static", static));
app.use(route.get("/random",random));

// use port 3000
let port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

if(!module.parent){ app.listen(port); }

// console.log("Application started. Listening on port:" + port);

module.exports = app;
