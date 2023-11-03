"use client";
import React from "react";
import { report } from "../../components/utils/reports";
import { TableWrapper } from "../../components/table/table";

let reportcol: any = [];

for (const [key, val] of Object.entries(report[0])) {
  reportcol.push({ key: key, label: key.toUpperCase() });
}

export default function Reports() {
  return <TableWrapper users={report} columns={reportcol} page="report" />;
}
