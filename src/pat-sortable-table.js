import $ from "jquery";
import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

const parser = new Parser("sortable-table");
parser.addArgument("paging-type", "numbers", [
    "numbers",
    "simple",
    "simple_numbers",
    "full",
    "full_numbers",
    "first_last_numbers",
]);
parser.addArgument("page-length", 20);
parser.addArgument("page-length-menu", [10, 20, 50, 100]);
parser.addArgument("server-side", false);
parser.addArgument("ajax", "");
parser.addArgument("language-info", "Page _PAGE_ of _PAGES_");
parser.addArgument("language-info-empty", "Showing 0 to 0 of 0 entries");
parser.addArgument("language-info-filtered", "(filtered from _MAX_ total entries)"); // prettier-ignore
parser.addArgument("language-length-menu", "Show _MENU_ entries per page.");
parser.addArgument("language-zero-records", "No results found.");
parser.addArgument("language-search", "Search");
parser.addArgument("language-search-placeholder", "Search term");

export default Base.extend({
    name: "sortable-table",
    trigger: ".pat-sortable-table",

    async init() {
        this.options = parser.parse(this.$el, this.options);
        await import("datatables.net");

        if (window.__patternslib_import_styles) {
            import("datatables.net-dt/css/jquery.dataTables.css");
        }

        let pageLengthMenu = this.options.page["length-menu"];
        if (typeof pageLengthMenu === "string") {
            pageLengthMenu = JSON.parse(pageLengthMenu);
        }

        $(this.el).DataTable({
            dom: '<"data-table-top"if>rt<"data-table-bottom"lp><"data-table-clear">',
            retrieve: true,
            pagingType: this.options.pagingType,
            pageLength: this.options.page.length,
            aLengthMenu: pageLengthMenu,
            serverSide: this.options.serverSide,
            ajax: this.options.ajax,
            language: {
                info: this.options.language.info,
                infoEmpty: this.options.language["info-empty"],
                infoFiltered: this.options.language["info-filtered"],
                lengthMenu: this.options.language["length-menu"],
                zeroRecords: this.options.language["zero-records"],
                search: this.options.language.search,
                searchPlaceholder: this.options.language["search-placeholder"],
            },
        });
        $(this.el).on( 'draw.dt', function () {
            registry.scan(this); // initialize any patterns in the table
        });
    },
});
