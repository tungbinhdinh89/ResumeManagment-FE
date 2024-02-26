import { Box } from "@mui/material";
import "./candidates-grid.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ICandidate } from "../../types/global.typing";
import { baseUrl } from "../../constants/url.constants";
import { PictureAsPdf } from "@mui/icons-material";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "Firs tName", width: 100 },
  { field: "lastName", headerName: "Last Name", width: 100 },
  { field: "jobTitle", headerName: "Job Title", width: 300 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "coverLetter", headerName: "CV", width: 300 },
  {
    field: "resumeUrl",
    headerName: "Download",
    width: 150,
    renderCell: (params) => (
      <a
        href={`${baseUrl}/Candidate/download/${params.row.resumeUrl}`}
        download
      >
        <PictureAsPdf />
      </a>
    ),
  },
];

interface ICandidatesGridProp {
  data: ICandidate[];
}

function CandidatesGrid({ data }: ICandidatesGridProp) {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="candidates-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
}

export default CandidatesGrid;
