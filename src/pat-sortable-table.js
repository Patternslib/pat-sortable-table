import $ from "jquery";
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";
import DataTables from "datatables.net";

const parser = new Parser("sortable-table");
parser.add_argument("target");

export default Base.extend({
    name: "sortable-table",
    trigger: ".pat-sortable-table",

    init(el, opts) {
        if (el.jquery) {
            el = el[0];
        }
        this.el = el;
        this.options = parser.parse(el, opts);

        $(el).DataTable({
            dom: '<"top"i>rt<"bottom"flp><"clear">',
        });
    },
});
