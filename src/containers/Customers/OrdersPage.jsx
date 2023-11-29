import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'; 

import ProfileSideBar from './ProfileSideBar';
import {Link} from 'react-router-dom'


const style = {
  height: 400, width: '100%'

}

const columns = [
  { field: 'id', headerName: 'Order Id', width: 150,headerAlign: 'center', },
  {
    field: 'orderDate',
    headerName: 'Order Date',
    type: 'date',
    width: 150,
    headerAlign: 'center',
    
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    headerAlign: 'center',
    
  },
  {
    field: 'totalPrice',
    headerName: 'Total Price',
    type: 'number',
    width: 150,
    headerAlign: 'center',
    
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function OrdersPage() {
  const actionColumn = [
    {
      field: "action",
      headerName: "",
      width: 250,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="flex gap-1 pl-8">
            <div className="" onClick={() => {}}>
              <button className='bg-blue-500 text-white py-1 px-3 rounded-full'>Details</button>
            </div>

      <div className="" onClick={() => {}}>
      <Link to="/tick"> 
              <button className='bg-blue-500 text-white py-1 px-3 rounded-full'>Download ticket</button></Link> 

            </div>
          </div>
        );
      },
    },
  ];
  return (

    <>
    <div className="flex justify-between">
    <div>
    <ProfileSideBar/>
    </div>
   <div>

    <div className="flex flex-col justify-center items-center">
       <div className="mx-auto my-8 max-w-2xl  text-center pt-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">My orders</h2>
            </div>
       <Box sx={style}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    </div>

    </div>
    <div></div></div></>

   
  )
}
