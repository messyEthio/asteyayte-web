import { AutoComplete, Input } from "antd";
import React from "react";

export default function SearchBar() {
  return (
    <AutoComplete>
      <Input
        className="flex w-full"
        size="large"
        placeholder="Search @company_name"
      />
    </AutoComplete>
  );
}
