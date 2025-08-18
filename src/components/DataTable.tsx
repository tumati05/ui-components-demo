import React from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  emptyMessage?: string;
}

type SortState<T> = { key: keyof T | null; direction: "asc" | "desc" };

function sortBy<T>(data: T[], key: keyof T, dir: "asc" | "desc") {
  const sign = dir === "asc" ? 1 : -1;
  return [...data].sort((a, b) => {
    const va = a[key],
      vb = b[key];
    if (va == null && vb == null) return 0;
    if (va == null) return -1 * sign;
    if (vb == null) return 1 * sign;
    if (typeof va === "number" && typeof vb === "number")
      return (va - vb) * sign;
    return String(va).localeCompare(String(vb)) * sign;
  });
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
  emptyMessage = "No data",
}: DataTableProps<T>) {
  const [sort, setSort] = React.useState<SortState<T>>({
    key: null,
    direction: "asc",
  });
  const [selected, setSelected] = React.useState<Set<number>>(new Set());

  const sorted = React.useMemo(() => {
    if (!sort.key) return data;
    return sortBy(data, sort.key, sort.direction);
  }, [data, sort]);

  function toggleSort(key: keyof T) {
    setSort((s) =>
      s.key !== key
        ? { key, direction: "asc" }
        : { key, direction: s.direction === "asc" ? "desc" : "asc" }
    );
  }

  function toggleRow(idx: number) {
    if (!selectable) return;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      onRowSelect?.(Array.from(next).map((i) => sorted[i]));
      return next;
    });
  }

  function toggleAll() {
    if (!selectable) return;
    setSelected((prev) => {
      const all = new Set<number>();
      if (prev.size !== sorted.length) sorted.forEach((_, i) => all.add(i));
      onRowSelect?.(Array.from(all).map((i) => sorted[i]));
      return all;
    });
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {selectable && (
              <th className="w-12 px-4 py-3 text-left">
                <input
                  aria-label="Select all rows"
                  type="checkbox"
                  checked={
                    selectable &&
                    selected.size === sorted.length &&
                    sorted.length > 0
                  }
                  onChange={toggleAll}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-3 text-left text-sm font-semibold"
              >
                <button
                  className="inline-flex items-center gap-1 hover:underline"
                  disabled={!col.sortable}
                  aria-disabled={!col.sortable}
                  onClick={() =>
                    col.sortable && toggleSort(col.dataIndex as keyof T)
                  }
                >
                  {col.title}
                  {col.sortable && sort.key === col.dataIndex && (
                    <span aria-live="polite">
                      {sort.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-4 py-8 text-center"
              >
                Loading...
              </td>
            </tr>
          ) : sorted.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-4 py-8 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                {selectable && (
                  <td className="w-12 px-4 py-3">
                    <input
                      aria-label={`Select row ${i + 1}`}
                      type="checkbox"
                      checked={selected.has(i)}
                      onChange={() => toggleRow(i)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm">
                    {col.render
                      ? col.render(row[col.dataIndex], row, i)
                      : String(row[col.dataIndex] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
