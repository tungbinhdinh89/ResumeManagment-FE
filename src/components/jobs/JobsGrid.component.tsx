import { Box } from "@mui/material";
import "./jobs-grid.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { IJob } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "level", headerName: "Level", width: 150 },
  { field: "companyName", headerName: "Company Name", width: 200 },
  {
    field: "createdAt",
    headerName: "Creation Time",
    width: 200,
    renderCell: (prams) => moment(prams.row.createdAt).fromNow(),
  },
];

interface IJobsGridProp {
  data: IJob[];
}

function JobsGrid({ data }: IJobsGridProp) {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
}

export default JobsGrid;
