"use client";
import {
  ColumnMeta,
  SharedTableFilter,
} from "@/app/shared-components/shared-table";
import { CustomerService } from "@/demo/service/CustomerService";
import { LayoutContext } from "@/layout/context/layoutcontext";
import { useContext, useEffect, useState } from "react";

interface Representative {
  name: string;
  image: string;
}

interface Country {
  name: string;
  code: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

const LotesReport = () => {
  const { setLayoutConfig } = useContext(LayoutContext);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const columns: ColumnMeta[] = [
    { field: "id", header: "ID", filterType: "inputText" },
    { field: "name", header: "Name", filterType: "none" },
    { field: "date", header: "Fecha", filterType: "date" },
    {
      field: "company",
      header: "Pais",
      filterType: "select",
      filterOption: [
        { value: 1, label: "Chile" },
        { value: 2, label: "Peru" },
        { value: 3, label: "Argentina" },
      ],
    },
    { field: "status", header: "Estados", filterType: "inputText" },
  ];
  useEffect(() => {
    setLayoutConfig((prevState) => ({ ...prevState, menuMode: "drawer" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    CustomerService.getCustomersMedium().then((data: Customer[]) => {
      setCustomers(getCustomers(data));
      console.log(data);
    });
  }, [setLayoutConfig]);

  const getCustomers = (data: Customer[]) => {
    return [...(data || [])].map((d) => {
      // @ts-ignore
      d.date = new Date(d.date);

      return d;
    });
  };

  return (
    <>
      <SharedTableFilter dataSource={customers} tableColumns={columns} />
    </>
  );
};
export default LotesReport;
