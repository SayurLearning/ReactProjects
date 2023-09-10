import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



const Grid_resource=({data,onDelete})=> {
  const navigate=useNavigate();
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
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
    {
      field: 'Update',
      renderCell: (params)=>{
        const rowData=params.row;
          const id=rowData.id;
          const component_type=rowData.component_type;
          const method=rowData.method;
          const link=rowData.link;
          
  
        return(<Button variant='contained'
                       color='primary'
                       onClick={()=>{
                        sessionStorage.setItem("update_resource",JSON.stringify({id,component_type,method,link}))
              navigate("/update_resource_page")
              // console.log(rowData.id);
  
               }} >Update</Button>);},
      headerName: 'Update',
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

export default Grid_resource