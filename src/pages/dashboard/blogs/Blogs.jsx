import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  DataTable,
  BlogsData,
  Pagination,
} from "../../../components";

function Blogs() {
  const BlogHeader = ["Title", "Description", "publish", "", ""];
  const properties = ["title", "description", "publish", "view"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BlogsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-primary">
      <Header />
      <div className="bg-primary lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-6 font-semibold text-xl ">Blogs</h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-4 px-6">
          <NavBoxes
            title="Total Blogs"
            counts="1000"
            ratio="24"
            duration="Overall"
          />
          <NavBoxes title="Blogs" counts="10" ratio="24" duration="Overall" />
          <NavBoxes title="Add new Blog" counts="" ratio="" duration="" />
        </div>
        <div
          className="rounded-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Players"
            placeholder="Search User By Name, Id or email"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto">
            <DataTable
              bodyData={currentItems}
              tableHeader={BlogHeader}
              properties={properties}
            />
          </div>
          <div className="px-10 py-4 flex justify-between">
            <p className="text-textWhite font-semibold font-[Barlow]">
              Showing {itemsPerPage} out of {BlogsData.length}
            </p>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={BlogsData.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Blogs };