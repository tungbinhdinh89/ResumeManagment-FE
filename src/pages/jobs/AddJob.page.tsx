import { useEffect, useState } from "react";
import "./jobs.scss";
import { ICompany, ICreateJobDto } from "../../types/global.typing";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const levelsArray: string[] = [
  "Intern",
  "Junior",
  "MidLevel",
  "Senior",
  "TeamLead",
  "Cto",
  "Architect",
];

function AddJob() {
  const [job, setJob] = useState<ICreateJobDto>({
    title: "",
    level: "",
    companyId: "",
  });

  const [companies, setCompanies] = useState<ICompany[]>([]);
  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<ICompany[]>("Company/Get")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveButton = () => {
    if (job.title === "" || job.level === "") {
      alert("Fill all fields");
      return;
    }

    httpModule
      .post("/Job/Create", job)
      .then((response) => redirect("/jobs"))
      .catch((error) => console.log(error));
  };

  const handleClickBackButton = () => {
    redirect("/jobs");
  };

  return (
    <div className="content">
      <div className="add-job">
        <h2>Add New Job</h2>
        <TextField
          autoComplete="off"
          label="Job Title"
          variant="outlined"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <FormControl fullWidth>
          <InputLabel>Level</InputLabel>
          <Select
            value={job.level}
            label="Job Level"
            onChange={(e) => setJob({ ...job, level: e.target.value })}
          >
            {levelsArray.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Company</InputLabel>
          <Select
            value={job.companyId}
            label="Company"
            onChange={(e) => setJob({ ...job, companyId: e.target.value })}
          >
            {companies.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveButton}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackButton}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
