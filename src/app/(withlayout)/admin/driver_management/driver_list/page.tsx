"use client";
import ActionBar from "@/components/ui/ActionBar";

import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import { useState } from "react";

import dayjs from "dayjs";

import AddUpdateDriver from "@/components/CreateUpdateFrom/AddUpdateDriver";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { USER_ROLE } from "@/constants/role";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { IoMdAdd } from "react-icons/io";

const AllDriverList = () => {
  const SUPER_ADMIN = USER_ROLE.ADMIN;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const columns = [
    {
      title: "",

      render: function (data: any) {
        return <Avatar size={64} icon={<UserOutlined />} />;
      },
    },
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "User ID",
      dataIndex: "driverId",
    },
    {
      title: "License No",
      dataIndex: "licenseNo",
      render: (data: any) => (data ? data : "N/A"),
    },
    // {
    //   title: "Active",
    //   dataIndex: "isActive",
    //   render: (isActive: boolean) =>
    //     isActive ? (
    //       <Tag color="green">Active</Tag>
    //     ) : (
    //       <Tag color="red">Not Active</Tag>
    //     ),
    // },
    {
      title: "Mobile",
      dataIndex: "mobile",
      render: (data: any) => (data ? data : "N/A"),
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (data: any) => (data ? data : "N/A"),
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      render: (data: any) => (data ? data : "N/A"),
    },
    {
      title: "Joined at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      // width: "15%",
      render: function (data: any) {
        return (
          <div className="flex">
            {/* <Link href={`/${SUPER_ADMIN}/general_user/details/${data}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddUpdateDriver id={data} />
              </ModalComponent>
            </div>
            <Button
              //   onClick={() => deleteGeneralUserHandler(data)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const { data, isLoading } = useGetAllDriverQuery({ ...query });
  const drivers = data?.drivers;
  const meta = data?.meta;

  console.log(drivers);

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  // if (isLoading) {
  //   return <Loader className="h-[50vh] flex items-end justify-center" />;
  // }
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Driver List">
        <div className="flex items-center justify-between flex-grow gap-2">
          <Input
            // size="large"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={
              {
                // width: "100%",
              }
            }
          />
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              // style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
          <ModalComponent buttonText="Add Driver" icon={<IoMdAdd />}>
            <AddUpdateDriver />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={drivers}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      {/* <UMModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteGeneralUserHandler(adminId)}
      >
        <p className="my-5">Do you want to remove this admin?</p>
      </UMModal> */}
    </div>
  );
};

export default AllDriverList;
