import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchSingleAssetDetails, fetchallassetsdetails } from "@/API/Apifunctions/AssetsApimanage";
import { useQuery } from "react-query";
import { Box, Button, Grid, Modal, Pagination, Skeleton, Stack, TablePagination, Typography } from '@mui/material';
import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import Link from 'next/link';
import Commonbox from './common/Commonbox';

export default function Home() {

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedAssetId, setSelectedAssetId] = React.useState(null);
  const { data: allassets, isLoading: assetsloading, isError: asseterror } = useQuery({
    queryFn: () => fetchallassetsdetails(),
    queryKey: ["allassets"]
  })

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return (
    <>

      <Commonbox />
      <Typography variant="h4" className='singletext' style={{ fontFamily: "Times", fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
        All Assets Details
      </Typography>
      <Box className="assetstable">
        {
          assetsloading ? (
            <>
              <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
              <Skeleton variant="text" width={"100%"} height={60} animation="wave" />
              <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
              <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
              <Skeleton variant="text" width={"100%"} height={60} animation="wave" />
              <Skeleton variant="rounded" width={"100%"} height={40} animation="wave" />
            </>
          ) : (
            <>
              <TableContainer className="custom-table-container,exchangeDetailspage" style={{ fontFamily: "Times", margin: "center" }}>
                <Table className="custom-table" style={{ fontFamily: "Times" }}>
                  <TableHead className='tableheader' style={{ fontFamily: "Times" }}>
                    <TableRow style={{ fontFamily: "Times" }}>
                      <TableCell className="custom-cell header">Rank</TableCell>
                      <TableCell align="center" className="custom-cell header">Symbol</TableCell>
                      <TableCell align="center" className="custom-cell header">Name</TableCell>
                      <TableCell align="center" className="custom-cell header">Supply</TableCell>
                      <TableCell align="center" className="custom-cell header">Price USD</TableCell>
                      <TableCell align="center" className="custom-cell header">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allassets?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, key) => (
                      <TableRow key={key} className="custom-row">
                        <TableCell align="center" className="custom-cell" >{item.rank}</TableCell>
                        <TableCell align="center" className="custom-cell" >{item?.symbol}</TableCell>
                        <TableCell align="center" className="custom-cell" >{item?.name}</TableCell>
                        <TableCell align="center" className="custom-cell" >{item?.supply}</TableCell>
                        <TableCell align="center" className="custom-cell" >{item?.priceUsd}</TableCell>
                        <TableCell align="center" className="custom-cell">
                          <Box className="actionbtn">
                            <Button href={`/${item?.id}`} variant='contained' color='success' startIcon={<RemoveRedEyeIcon />} className='btndesign'>View</Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )
        }
      </Box>





      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allassets?.length|| 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* Single Assets Details Modal */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="custom-modal">
          {singleassetloading ? (
            <p>Loading...</p>
          ) : singleasseterror ? (
            <p>Error loading asset details</p>
          ) : (
            singleasset && (
              <>
                <Box className="singledetails-container">
                  <div className="singledetails-left">
                    <Typography variant="h4" className='singletext'>
                      <b>Name:</b> {singleasset?.name}
                    </Typography>
                    <hr />
                    <Typography variant="h6" className='singletext'>
                      <b>Symbol:</b> {singleasset?.symbol}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Supply:</b> {singleasset?.supply}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Max Supply:</b> {singleasset?.maxSupply}
                    </Typography>
                  </div>
                  <div className="singledetails-left">
                    <Typography variant="h6" className='singletext'>
                      <b>MarketCap Usd:</b> {singleasset?.marketCapUsd}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Volume Usd 24Hr:</b> {singleasset?.volumeUsd24Hr}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Price USD:</b> {singleasset?.priceUsd}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b>Change Percent-24Hr:</b> {singleasset?.changePercent24Hr}
                    </Typography>
                    <Typography variant="h6" className='singletext'>
                      <b> Vmap 24Hr:</b> {singleasset?.vwap24Hr}
                    </Typography>
                  </div>
                </Box>
                <center>
                  <Button onClick={handleClose} variant='outlined' color='secondary'>Close</Button>
                </center>
              </>
            )
          )}
        </Box>
      </Modal> */}

    </>
  );
}
