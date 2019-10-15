const Koa = require("koa");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
const http = require("http");
const { schema } = require("./graphql");

module.exports = function server() {
  console.log("creating server...🚀");
  const app = new Koa();

  app.use(
    mount(
      "/api",
      graphqlHTTP({
        graphiql: true,
        schema
      })
    )
  );

  const httpServer = http.createServer(app.callback());

  httpServer.listen(9000, () => {
    console.log("app running on port 9000");
  });

  console.log("server created!!👍");
};
