import React, { useState } from "react";
import Select from "react-select";

export const SelectBox = () => {
  const [selectedOption, setSelectedOption] = useState("none");
  const options = [
    { value: "none", label: "Select" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
  ];
  const handleTypeSelect = async (e:any) => {
    setSelectedOption(e.value);
  };
  const handleSearch = (e:string) => {
    //server side - api call here
    console.log("search", e);
  };
  return (
    <div>
      <Select
        options={options}
        onChange={handleTypeSelect}
        onInputChange={handleSearch}
        value={options.filter(function (option) {
          return option.value === selectedOption;
        })}
        isClearable
        isSearchable
      />
    </div>
  );
}
