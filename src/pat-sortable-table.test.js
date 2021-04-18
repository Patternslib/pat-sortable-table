import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./pat-sortable-table";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-sortable-table", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly and allows sorting", async (done) => {
        document.body.innerHTML = small_table;

        pattern.init(document.querySelector(".pat-sortable-table"));
        await utils.timeout(1);

        let td;

        document.querySelector(".c1").click();
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 2 Data 1");
        expect(td[1].textContent).toBe("Row 2 Data 2");
        expect(td[2].textContent).toBe("Row 1 Data 1");
        expect(td[3].textContent).toBe("Row 1 Data 2");

        document.querySelector(".c1").click();
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 1 Data 1");
        expect(td[1].textContent).toBe("Row 1 Data 2");
        expect(td[2].textContent).toBe("Row 2 Data 1");
        expect(td[3].textContent).toBe("Row 2 Data 2");

        document.querySelector(".c2").click();
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 1 Data 1");
        expect(td[1].textContent).toBe("Row 1 Data 2");
        expect(td[2].textContent).toBe("Row 2 Data 1");
        expect(td[3].textContent).toBe("Row 2 Data 2");

        document.querySelector(".c2").click();
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 2 Data 1");
        expect(td[1].textContent).toBe("Row 2 Data 2");
        expect(td[2].textContent).toBe("Row 1 Data 1");
        expect(td[3].textContent).toBe("Row 1 Data 2");

        done();
    });

    it("supports pattern options", async (done) => {
        document.body.innerHTML = small_table;
        const table = document.querySelector(".pat-sortable-table");
        table.setAttribute(
            "data-pat-sortable-table",
            `page-length: 1;
             page-length-menu: [1,2,3];
             language-info: Some _PAGE_ in _PAGES_;
             language-length-menu: _MENU_ per page;
             langugage-zero-records: nothing;
             language-search: find;
             language-search-placeholder: type term;`
        );

        pattern.init(document.querySelector(".pat-sortable-table"));
        await utils.timeout(1);

        expect(document.querySelectorAll("tbody").length).toBe(1);
        expect(document.querySelector(".dataTables_info").textContent).toBe(
            "Some 1 in 2"
        );
        expect(
            document
                .querySelector(".dataTables_length")
                .textContent.indexOf("per page") > -1
        ).toBeTruthy();
        expect(document.querySelector(".dataTables_filter").textContent).toBe("find");
        expect(
            document
                .querySelector(".dataTables_filter input[type=search]")
                .getAttribute("placeholder")
        ).toBe("type term");

        //// TODO: test filtering
        //const input = document.querySelector(
        //    ".dataTables_filter input[type=search]"
        //);
        //input.value = "fantasy item";
        //input.dispatchEvent(new Event("change"));
        //$(input).change();
        //console.log(document.body.innerHTML);

        done();
    });
});

const small_table = `
    <table class="pat-sortable-table">
        <thead>
            <tr>
                <th class="c1">Column 1</th>
                <th class="c2">Column 2</th>
            </tr>
        </thead>
        <tbody>
            <tr class="r1">
                <td class="r1c1">Row 1 Data 1</td>
                <td class="r2c2">Row 1 Data 2</td>
            </tr>
            <tr class="r2">
                <td class="r2c1">Row 2 Data 1</td>
                <td class="r2c2">Row 2 Data 2</td>
            </tr>
        </tbody>
    </table>
`;
