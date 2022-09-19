import React from "react";
import CoreDataTable, { TableProps } from 'react-data-table-component';
import classNames from "classnames";
import "./datatable.scss"

export type DatatableProps<T> = TableProps<T>;

export const Datatable = <T, >(props: DatatableProps<T>) => {
    const className = classNames("datatable-component", props.className);
    return <CoreDataTable { ...props } className={ className }/>
}

export const TableCheckbox: React.FC<any> = (props) => {
    const className = classNames(props.className, "untitled-checkbox untitled-sm")
    return <div className={className}>
        <input type="checkbox" { ...props } className="untitled-checkbox__base"/>
    </div>
}