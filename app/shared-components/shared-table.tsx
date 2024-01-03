"use client";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Column, ColumnFilterElementTemplateOptions } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useEffect, useState } from "react";

export interface ColumnMeta {
  field: string;
  header: string;
  filterType: "select" | "inputText" | "inputNumber" | "date" | "none";
  filterOption?: FilterOption[];
}

interface FilterOption {
  value: number | string;
  label: string;
}

interface SharedTableFilterProps {
  dataSource: any[];
  tableColumns: ColumnMeta[];
}

export const SharedTableFilter: React.FC<SharedTableFilterProps> = ({
  dataSource,
  tableColumns,
}) => {
  const [dataTable, setDataTable] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColumnMeta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<any>();

  useEffect(() => {
    setColumns(tableColumns);
    setDataTable(dataSource);
    initFilters(tableColumns);
    setLoading(false);
  }, [columns, dataSource, tableColumns]);

  const initFilters = (columns: any) => {
    const filter: any = {};

    columns.forEach((column: ColumnMeta) => {
      filter[column.field] = {
        constraints: {
          value: "",
          matchMode: FilterMatchMode.CONTAINS,
        },
      };
    });
    console.log(filter);

    setFilters(filter);
  };

  const formatDate = (value: Date) => {
    return value.toLocaleDateString("en-CL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateBodyTemplate = (rowData: any) => {
    return formatDate(new Date(rowData.date));
  };

  const dateFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e: CalendarChangeEvent) =>
          options.filterCallback(e.value, options.index)
        }
        dateFormat="dd/mm/yy"
        placeholder="dd/mm/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const selectFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    let filteredOptions: any;

    const index = columns.findIndex(
      (element: ColumnMeta) => element.filterOption
    );

    if (index !== -1) {
      filteredOptions = columns[index].filterOption;
      return (
        <Dropdown
          value={options.value}
          options={filteredOptions}
          onChange={(e: DropdownChangeEvent) =>
            options.filterCallback(e.value, options.index)
          }
          optionLabel="label"
          placeholder="Seleccione"
          className="p-column-filter"
          showClear
        />
      );
    }
  };

  const resetFilters = () => {
    setFilters(filters);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          className="border-round-3xl"
          type="button"
          icon="pi pi-file-pdf"
          label="Exportar PDF"
          outlined
        />
        <Button
          severity="secondary"
          className="border-round-3xl"
          type="button"
          icon="pi pi-filter-slash"
          label="Limpiar Filtros"
          outlined
          onClick={resetFilters}
        />
      </div>
    );
  };

  const header = renderHeader();

  return (
    <DataTable
      removableSort
      value={dataTable}
      paginator
      rows={10}
      loading={loading}
      // filters={filters}
      dataKey="id"
      header={header}
      emptyMessage="No se encontraron resultados."
    >
      {columns.map((col, i) => {
        let filterComponent = null;
        switch (col.filterType) {
          case "inputText":
            filterComponent = (
              <Column
                key={col.field + "-filter"}
                sortField={col.field}
                field={col.field}
                header={col.header}
                filter
                showAddButton={false}
                showFilterOperator={false}
                showFilterMatchModes={false}
                filterPlaceholder="Buscar"
                sortable
              />
            );
            break;
          case "select":
            filterComponent = (
              <Column
                key={col.field + "-filter"}
                sortField={col.field}
                field={col.field}
                header={col.header}
                filter
                showAddButton={false}
                showFilterMatchModes={false}
                showFilterOperator={false}
                filterElement={selectFilterTemplate}
                sortable
              />
            );
            break;
          case "date":
            filterComponent = (
              <Column
                key={col.field + "-filter"}
                sortField={col.field}
                header={col.header}
                filter
                body={dateBodyTemplate}
                showFilterMatchModes={false}
                showAddButton={false}
                showFilterOperator={false}
                filterElement={dateFilterTemplate}
                sortable
              />
            );
            break;
          default:
            filterComponent = (
              <Column
                key={col.field + "-filter"}
                field={col.field}
                header={col.header}
              />
            );
            break;
        }

        return filterComponent;
      })}
    </DataTable>
  );
};
