"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export function DataTable({ columns, rows }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key} className={col.className}>
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow
            key={row.id ?? i}
            className="odd:bg-[#EDEDED] odd:hover:bg-[#EDEDED] even:bg-white"
          >
            {columns.map((col) => (
              <TableCell key={col.key} className={col.cellClassName}>
                {col.render ? col.render(row[col.key], row, i) : row[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
