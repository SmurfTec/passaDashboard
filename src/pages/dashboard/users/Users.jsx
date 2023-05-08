import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  UserRowData,
  DataTable,
  Pagination,
} from "../../../components";

function Users() {
  const userHeader = [
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Join On",
  ];
  const properties = ["id", "fname", "lname", "email", "phone", "joinon"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = UserRowData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-primary">
      <Header />
      <div className="bg-primary lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-6 font-semibold text-xl ">Users</h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-4 px-6">
          <NavBoxes
            title="Total Users"
            counts="1000"
            ratio="24"
            duration="Overall"
          />
          <NavBoxes
            title="Total Distributors"
            counts="500"
            ratio="24"
            duration="Overall"
          />
          <NavBoxes
            title="Total Players"
            counts="500"
            ratio="24"
            duration="Overall"
          />
        </div>
        <div
          className="rounded-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Players"
            placeholder="Search User By Name , Id or email"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <DataTable
              bodyData={currentItems}
              tableHeader={userHeader}
              properties={properties}
            />
          </div>

          <div className="px-10 py-4 flex justify-between">
            <p className="text-textWhite font-semibold font-[Barlow]">
              Showing {itemsPerPage} out of {UserRowData.length}
            </p>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={UserRowData.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Users };