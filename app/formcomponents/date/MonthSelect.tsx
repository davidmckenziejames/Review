import React from "react";
import { Select } from "@chakra-ui/react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

const options: JSX.Element[] = [];
for (let year = currentYear; year >= 2023; year--) {
  const endMonth = year === currentYear ? currentMonth : 12;
  const startMonth = year === 2023 ? 1 : endMonth;

  for (let month = endMonth; month >= startMonth; month--) {
    options.push(
      <option key={`${year}-${month}`} value={`${year}-${month}`}>
        {`${new Intl.DateTimeFormat("en-US", {
          month: "long",
          year: "numeric",
        }).format(new Date(year, month - 1))}`}
      </option>
    );
  }
}

const MonthSelect = () => {
  return <Select placeholder="Select option">{options}</Select>;
};

export default MonthSelect;
