import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
    editable: false,
  },
  {
    field: 'component',
    headerName: 'Component',
    width: 150,
    editable: false,
  },
  {
    field: 'component_type',
    headerName: 'Component_type',
    width: 160,
    editable: false,
  },
  {
    field: 'method',
    headerName: 'Method',
    sortable: false,
    width: 300
  },
  {
    field: 'link',
    headerName: 'Link',
    renderCell: (params) => (
      <Link to={`/form/${params.value}`}>{params.value}</Link>
    ),
    sortable: false,
    width: 160
  },
];

export default function Grid({data}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
