import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
function sortBy(data, key, dir) {
    const sign = dir === "asc" ? 1 : -1;
    return [...data].sort((a, b) => {
        const va = a[key], vb = b[key];
        if (va == null && vb == null)
            return 0;
        if (va == null)
            return -1 * sign;
        if (vb == null)
            return 1 * sign;
        if (typeof va === "number" && typeof vb === "number")
            return (va - vb) * sign;
        return String(va).localeCompare(String(vb)) * sign;
    });
}
export function DataTable({ data, columns, loading, selectable, onRowSelect, emptyMessage = "No data", }) {
    const [sort, setSort] = React.useState({
        key: null,
        direction: "asc",
    });
    const [selected, setSelected] = React.useState(new Set());
    const sorted = React.useMemo(() => {
        if (!sort.key)
            return data;
        return sortBy(data, sort.key, sort.direction);
    }, [data, sort]);
    function toggleSort(key) {
        setSort((s) => s.key !== key
            ? { key, direction: "asc" }
            : { key, direction: s.direction === "asc" ? "desc" : "asc" });
    }
    function toggleRow(idx) {
        if (!selectable)
            return;
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            onRowSelect?.(Array.from(next).map((i) => sorted[i]));
            return next;
        });
    }
    function toggleAll() {
        if (!selectable)
            return;
        setSelected((prev) => {
            const all = new Set();
            if (prev.size !== sorted.length)
                sorted.forEach((_, i) => all.add(i));
            onRowSelect?.(Array.from(all).map((i) => sorted[i]));
            return all;
        });
    }
    return (_jsx("div", { className: "w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [_jsx("thead", { className: "bg-gray-50 dark:bg-gray-800", children: _jsxs("tr", { children: [selectable && (_jsx("th", { className: "w-12 px-4 py-3 text-left", children: _jsx("input", { "aria-label": "Select all rows", type: "checkbox", checked: selectable &&
                                        selected.size === sorted.length &&
                                        sorted.length > 0, onChange: toggleAll }) })), columns.map((col) => (_jsx("th", { scope: "col", className: "px-4 py-3 text-left text-sm font-semibold", children: _jsxs("button", { className: "inline-flex items-center gap-1 hover:underline", disabled: !col.sortable, "aria-disabled": !col.sortable, onClick: () => col.sortable && toggleSort(col.dataIndex), children: [col.title, col.sortable && sort.key === col.dataIndex && (_jsx("span", { "aria-live": "polite", children: sort.direction === "asc" ? "▲" : "▼" }))] }) }, col.key)))] }) }), _jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-800", children: loading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "px-4 py-8 text-center", children: "Loading..." }) })) : sorted.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "px-4 py-8 text-center text-gray-500", children: emptyMessage }) })) : (sorted.map((row, i) => (_jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-900", children: [selectable && (_jsx("td", { className: "w-12 px-4 py-3", children: _jsx("input", { "aria-label": `Select row ${i + 1}`, type: "checkbox", checked: selected.has(i), onChange: () => toggleRow(i) }) })), columns.map((col) => (_jsx("td", { className: "px-4 py-3 text-sm", children: col.render
                                    ? col.render(row[col.dataIndex], row, i)
                                    : String(row[col.dataIndex] ?? "") }, col.key)))] }, i)))) })] }) }));
}
