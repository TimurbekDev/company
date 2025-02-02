import React from "react"
import { Flex, Table } from "antd"
import { ITableProps } from "../types"

export const CustomTable: React.FC<ITableProps> = ({ data, columns, scroll }) => {

  return (
    <Flex gap="middle" vertical>
      <Table<any> className="custom-table" virtual scroll={scroll} columns={columns} dataSource={data} />
    </Flex>
  )
}
