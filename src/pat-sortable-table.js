import $ from "jquery";
import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("sortable-table");
parser.add_argument("target");

export default Base.extend({
    name: "sortable-table",
    trigger: ".pat-sortable-table",
    module_dt: undefined,

    async init(el, opts) {
        if (el.jquery) {
            el = el[0];
        }
        this.el = el;
        this.options = parser.parse(el, opts);
        this.module_dt = await import("datatables.net");

        $(el).DataTable({
            dom: '<"top"i>rt<"bottom"flp><"clear">',
        });
    },
});
