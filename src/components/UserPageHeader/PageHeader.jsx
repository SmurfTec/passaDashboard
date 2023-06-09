import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PlayersDropdown } from "../dropdowns/PlayersDropdown";
import { ListFilter } from "lucide-react";

const PageHeader = ({
  title,
  placeholder,
  dropDown,
  filter,
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col z-0 sm:flex-row justify-between px-5 py-5">
      <div className="mb-4 sm:mb-0">
        <h4 className="text-textWhite text-2xl font-[Barlow] font-semibold">
          {title}
        </h4>
      </div>
      <div className="flex lg:flex-row flex-col gap-3 relative  mx-2">
        <div className="bg-secondry rounded-2xl flex items-center sm:w-[23rem]">
          <button className="pl-3 ">
            <BiSearch color="white" size={20} />
          </button>

          <input
            type="text"
            value={value}
            onChange={setValue}
            id="input-group-1"
            className="outline-0  bg-secondry  text-white  text-sm  rounded-2xl  block w-full pl-2 p-2.5   "
            placeholder={placeholder}
          />
        </div>

        {/* <PlayersDropdown /> */}
        {/* <div className="text-white items-center justify-between bg-navyBlue rounded-3xl px-4 py-2  cursor-pointer    flex">
          <ListFilter size={20} />
          <div className="px-2 font-semibold w-full">Filters</div>
        </div> */}
      </div>
    </div>
  );
};

export { PageHeader };
