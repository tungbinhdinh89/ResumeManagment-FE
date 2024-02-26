// company
export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}

export interface ICreateCompanyDto {
  name: string;
  size: string;
}

// job
export interface IJob {
  id: string;
  title: string;
  level: string;
  companyName: string;
  companyId: string;
  createdAt: string;
}

export interface ICreateJobDto {
  title: string;
  level: string;
  companyId: string;
}

// candidate
export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobId: string;
  jobTitle: string;
  resumeUrl: string;
  createdAt: string;
}

export interface ICreateCandidateDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobId: string;
}
