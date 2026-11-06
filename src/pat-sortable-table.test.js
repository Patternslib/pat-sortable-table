import DataTable from "datatables.net-dt";
import Pattern from "./pat-sortable-table";
import events from "@patternslib/patternslib/src/core/events";

describe("pat-sortable-table", () => {
    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly and allows sorting", async () => {
        document.body.innerHTML = small_table;

        const instance = new Pattern(document.querySelector(".pat-sortable-table"));
        await events.await_pattern_init(instance);

        let td;

        await sort(".c1");
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 2 Data 1");
        expect(td[1].textContent).toBe("Row 2 Data 2");
        expect(td[2].textContent).toBe("Row 1 Data 1");
        expect(td[3].textContent).toBe("Row 1 Data 2");

        await sort(".c1");
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 1 Data 1");
        expect(td[1].textContent).toBe("Row 1 Data 2");
        expect(td[2].textContent).toBe("Row 2 Data 1");
        expect(td[3].textContent).toBe("Row 2 Data 2");

        await sort(".c2");
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 1 Data 1");
        expect(td[1].textContent).toBe("Row 1 Data 2");
        expect(td[2].textContent).toBe("Row 2 Data 1");
        expect(td[3].textContent).toBe("Row 2 Data 2");

        await sort(".c2");
        td = document.querySelectorAll(".pat-sortable-table td");
        expect(td[0].textContent).toBe("Row 2 Data 1");
        expect(td[1].textContent).toBe("Row 2 Data 2");
        expect(td[2].textContent).toBe("Row 1 Data 1");
        expect(td[3].textContent).toBe("Row 1 Data 2");
    });

    it("supports pattern options", async () => {
        document.body.innerHTML = small_table;
        const table = document.querySelector(".pat-sortable-table");
        table.setAttribute(
            "data-pat-sortable-table",
            `page-length: 1;
             page-length-menu: [1,2,3];
             language-info: Some _PAGE_ in _PAGES_;
             language-length-menu: _MENU_ per page;
             language-zero-records: nothing;
             language-search: find;
             language-search-placeholder: type term;`,
        );

        const instance = new Pattern(document.querySelector(".pat-sortable-table"));
        await events.await_pattern_init(instance);

        expect(document.querySelectorAll("tbody").length).toBe(1);
        expect(document.querySelector(".dt-info").textContent).toBe("Some 1 in 2");
        expect(
            document.querySelector(".dt-length").textContent.indexOf("per page") > -1,
        ).toBeTruthy();
        expect(document.querySelector(".dt-search").textContent).toBe("find");
        expect(
            document
                .querySelector(".dt-search input[type=search]")
                .getAttribute("placeholder"),
        ).toBe("type term");

        expect(
            Array.from(document.querySelectorAll(".dt-length option"), (option) =>
                Number(option.value),
            ),
        ).toEqual([1, 2, 3]);

        const input = document.querySelector(".dt-search input");
        input.value = "fantasy item";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        expect(document.querySelector("tbody").textContent).toContain("nothing");
    });
});

async function sort(selector) {
    const table = new DataTable(document.querySelector(".pat-sortable-table"));
    const drawn = new Promise((resolve) => table.one("draw", resolve));
    document.querySelector(selector).click();
    await drawn;
}

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
