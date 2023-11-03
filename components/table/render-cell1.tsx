"use client";
import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { users } from "./data";
import { ReportsProps } from "../utils/reports";

interface Props {
  user: ReportsProps;
  columnKey: string | React.Key;
}

export const RenderCell1 = ({ user, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey];

  switch (columnKey) {
    case "Bkg_Commit":
    case "Pay_Status":
      return (
        <Chip
          size="lg"
          variant="flat"
          color={cellValue === "Y" || cellValue === "P" ? "success" : "warning"}
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      );
    default:
      return <div>{cellValue}</div>;
  }
};
