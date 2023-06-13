import React, { useState } from "react";
import Select from "react-select";
interface  PropsType {
apiEndPoint : string
}
export const SelectBox = ({apiEndPoint}:PropsType) => {
  const [selectedOption, setSelectedOption] = useState("none");
  const options = [
    { value: "none", label: "Select" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
  ];
  const handleTypeSelect = async (e:{value: string, label:string} | null) => {
    if(e)
    setSelectedOption(e.value);
  };
  const handleSearch = (e:string) => {
    //server side - api call here
    console.log("apiEndPoint",apiEndPoint,e);
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
