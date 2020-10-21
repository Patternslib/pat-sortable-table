pat-sortable-table
==================

## Documentation

Pattern to create sort- and filterable tables.


### Options reference

Property | Default Value | Values | Type | Description
---------|---------------|--------|------|------------
paging-type | numbers | numbers simple simple_numbers full full_numbers first_last_numbers | String | Type of batch/paging navigation menu.
page-length | 20 | Any number | Integer | Number of items per page.
page-length-menu | [10, 20, 50, 100] | | Array of integers | Entries for the pagingation length menu.
language-info | "Page _PAGE_ of _PAGES_" | | String | Text for pagination.
language-info-empty | "Showing 0 to 0 of 0 entries" | | String | Info text when filtering leads to no results.
language-info-filtered | "(filtered from _MAX_ total entries)" | | String | Info text when filtering.
language-length-menu | "Show _MENU_ entries per page." | | String | Text for pagination.
language-zero-records | "No results found." | | String | Text shown when filtering leads to no results.
language-search | "Search" | | String | Label for the search field.
language-search-placeholder | "Search term" | | String | Placeholder for the search field.

