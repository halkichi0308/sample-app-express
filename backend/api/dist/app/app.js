"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("../User/UserController");
// creates koa app, registers all controller routes and returns you koa app instance
const app = routing_controllers_1.createKoaServer({
    controllers: [UserController_1.UserController] // we specify controllers we want to use
});
// run koa application on port 3000
app.listen(3000);
//# sourceMappingURL=app.js.map