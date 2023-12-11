import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ProfileSideBar from './ProfileSideBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import NavbarLogo from '../registration/NavbarLogo';

const columns = [
  { field: '_id', headerName: 'Order Id', width: 150, headerAlign: 'start' },
  { field: 'order_date', headerName: 'Order Date', type: 'Date', width: 150, headerAlign: 'start' },
  { field: 'status', headerName: 'Status', type: 'String', width: 150, headerAlign: 'start' },
  { field: 'cart_total_price', headerName: 'Total Price', type: 'String', width: 150, headerAlign: 'start' }
];

export default function OrdersPage() {
  const authContext = useContext(AuthContext);
  const { customer } = authContext;
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [/* error */, setError] = useState(null);

  const fetchOrderData = useCallback(async () => {
    try {
      console.log(customer.id);
      const response = await axios.get(`http://localhost:3000/v1/customers/${customer.id}/orders`);
      const orderWithId = response.data.orders.map((order) => ({
        ...order,
        id: order._id,
      }));

      setOrders(orderWithId);
      console.log(response.data);
      setIsLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      setError("Error fetching product data: " + error.message);
      setIsLoading(false); // Set loading state to false if there's an error
    }
  }, [customer.id]);

  useEffect(() => {
    fetchOrderData();
  }, [fetchOrderData]);

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
              <button className='bg-color2 text-white py-1 px-3 rounded-full'>Details</button>
            </div>
            <div className="" onClick={() => {}}>
              <Link to={`/tick/${params.row._id}`}>
                <button className='bg-color2 text-white py-1 px-3 rounded-full'>Download ticket</button>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <NavbarLogo />
      <div className="flex justify-between">
        <div>
          <ProfileSideBar />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="mx-auto my-8 max-w-2xl  text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">My orders</h2>
            </div>
            <Box>
              <DataGrid
                rows={orders}
                getRowId={(row) => row.id}
                columns={columns.concat(actionColumn)}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                    style: { padding: '15px 15px 0 15px' }
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
              />
            </Box>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
