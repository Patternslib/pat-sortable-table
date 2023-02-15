// provide jquery
import jquery from "jquery";
global.$ = global.jQuery = jquery;

// Attach datatables to jQuery, as in tests it is not done by just importing.
window.dt = require("datatables.net")();
