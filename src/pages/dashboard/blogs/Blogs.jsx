import React, { useState } from "react";
import {
  Header,
  NavBoxes,
  PageHeader,
  BlogsData,
  Pagination,
} from "../../../components";
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { DataTable } from "../../../components/blogsGrid/data-table";
import { columns } from "../../../components/blogsGrid/columns";

function Blogs() {
  const BlogHeader = ["Title", "Description", "Published On", "Action"];
  const properties = ["title", "description", "publishedOn"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BlogsData.slice(indexOfFirstItem, indexOfLastItem);

  function getCurrentItem(currentItems) {
    while (currentItems.length < 7) {
      currentItems.push({});
    }

    return currentItems;
  }

  const { data, isLoading } = useQuery(["blogs"], async () => {
    try {
      const res = await axios.get("blogs");
      return res.data;
    } catch (error) {
      throw error(error);
    }
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <div className="h-20">
        <Header />
      </div>
      <div className="bg-primary container lg:px-10 px-0 py-10">
        <h3 className="text-textWhite px-6 font-semibold text-xl ">Blogs</h3>
        <div className="flex gap-4 overflow-x-scroll customClass w-full lg:px-4 px-6">
          <NavBoxes
            title="Total Blogs"
            counts="1000"
            ratio="24"
            duration="Overall"
          />
          <NavBoxes title="Blogs" counts="10" ratio="24" duration="Overall" />
          <NavBoxes createTitle="Create Blog" createBlog={true} />
        </div>
        <div
          className="rounded-t-md flex flex-col"
          style={{ border: "2px solid #311A67" }}
        >
          <PageHeader
            title="Players"
            placeholder="Search User By Name, Id or email"
            dropDown="Player"
            filter="Filter"
          />
        </div>
        <div className="border-t-0 flex-grow border-x-2 border-b-2 border-[#311A67]">
          <div className="rounded-md overflow-x-auto flex-grow">
            <DataTable columns={columns} data={BlogsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Blogs };
