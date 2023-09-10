import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Grid_main=({data,onDelete})=> {
  const navigate=useNavigate();



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
      field: 'rid',
      headerName: 'Reference ID',
      width: 160,
      editable: false,
    },
    {
      field: 'Update',
      renderCell: (params)=>{
        const rowData=params.row;
          const id=rowData.id;

  const location=rowData.location;

  const component=rowData.component;
  const component_type=rowData.component_type;
  const rid=rowData.rid;
        return(<Button variant='contained'
                       color='primary'
                       onClick={()=>{
                        sessionStorage.setItem("update_main",JSON.stringify({id,location,component,component_type,rid}))
              navigate("/update_main_page")
              // console.log(rowData.id);

               }} >Update</Button>);},
      headerName: 'Reference ID',
      width: 160,
      editable: false,
    },
    {
      field: 'Delete',
      renderCell: (params)=>{
        const rowData=params.row;
          const id=rowData.id;
        return(<Button variant='contained'
                       style={{ backgroundColor: '#ff0000', color: 'white' }}
                       onClick={()=>{
                        
              onDelete(id);
              // console.log(rowData.id);

               }} >Delete</Button>);},
      headerName: 'Delete',
      width: 160,
      editable: false,
    },    
  ];

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
export default Grid_main;