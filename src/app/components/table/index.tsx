'use client';
import React from 'react';

type Column = {
    header: string;
    accessor: string;
};

type DataTableProps = {
    columns: Column[];
    data: Record<string, any>[];
    className?: string;
};

const DataTable: React.FC<DataTableProps> = ({ columns, data, className }) => {
    return (
        <table className={className}>
            <thead className="border-collapse border border-gray-400 p-4 text-white">
                <tr>
                    {columns.map((col) => (
                        <th className="border-collapse border border-gray-400 p-4 bg-gray-900 text-left" key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((col) => (
                            <td className="border border-gray-300 p-4" key={col.accessor}>{row[col.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;