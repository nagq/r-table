import React from "react";

export interface ITableColumn<T> {
    title: string | React.ReactNode;
    dataIndex: keyof T;
    key: React.Key;
    width?: number;
    fixed?: 'left' | 'right';
}

export interface ITableProps<T> {
    columns: Array<ITableColumn<T>>;
    dataSource: T[];
    pagination: {
        pageSize: number;
    };
}

export interface IPaginationProps {
    pageSize: number;
    total: number;
    onChange?: (page: number, pageSize: number) => void;
}

export interface ISort {
    direction: 'u' | 'd';
    index: number;
}