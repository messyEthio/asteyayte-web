import { AutoComplete, Input } from "antd";
import React from "react";

export default function SearchBar() {
  return (
    <AutoComplete>
      <Input
        className="flex w-full shadow-md"
        size="large"
        placeholder="Search companies e.g @company name"
      />
    </AutoComplete>
  );
}
