export const portalStudent = {
  name: "Michael Johnson",
  year: "2026/2027",
  applicationStatus: "Under Review",
  registrationStatus: "Pending",
  id: "APP-2026-000123",
};

export const portalNavItems = [
  { label: "Dashboard", path: "/portal/dashboard" },
  { label: "Timetable", path: "/portal/timetable" },
  { label: "Announcements", path: "/portal/announcements" },
  { label: "School Fees", path: "/portal/fees" },
  { label: "Uniform", path: "/portal/uniform" },
  { label: "Admission / Re-Admission", path: "/portal/admission" },
  { label: "Application Status", path: "/portal/application-status" },
  { label: "Bank Slip", path: "/portal/bank-slip" },
];

export const latestAnnouncements = [
  {
    id: 1,
    title: "2026/2027 Registration Information",
    date: "September 5, 2026",
    category: "Registration",
    excerpt:
      "Please review the registration process and complete the required steps before the deadline.",
    content:
      "All families are advised to review the registration steps for the 2026/2027 academic year. Please ensure all required documents are uploaded and that the payment instructions are followed. Students who do not complete the process on time may experience delays in admission processing.",
  },
  {
    id: 2,
    title: "New School Uniform Information",
    date: "September 2, 2026",
    category: "Uniform",
    excerpt:
      "The updated school uniform list and pricing information are now available for all grades.",
    content:
      "The school has released the updated uniform list for the 2026/2027 academic year. Students and parents should review the official list, required accessories, and the sizes recommended for each grade before purchase.",
  },
  {
    id: 3,
    title: "Important Registration Deadline",
    date: "August 28, 2026",
    category: "Notice",
    excerpt:
      "The deadline for new student registration and re-admission forms is approaching.",
    content:
      "Students are reminded that all relevant registration and re-admission forms must be completed and submitted before the stated deadline. Please confirm your application status and ensure all supporting documents are uploaded on time.",
  },
];

export const timetableData: Record<string, Array<{ time: string; monday: string; tuesday: string; wednesday: string; thursday: string; friday: string }>> = {
  "Grade 7A": [
    { time: "8:00 AM", monday: "Mathematics", tuesday: "English", wednesday: "Biology", thursday: "Physics", friday: "History" },
    { time: "9:00 AM", monday: "English", tuesday: "Mathematics", wednesday: "Chemistry", thursday: "Biology", friday: "Computer Science" },
    { time: "10:00 AM", monday: "Biology", tuesday: "History", wednesday: "Mathematics", thursday: "English", friday: "Physics" },
    { time: "11:00 AM", monday: "French", tuesday: "Agriculture", wednesday: "English", thursday: "Physical Education", friday: "Chemistry" },
  ],
  "Grade 10A": [
    { time: "8:00 AM", monday: "Chemistry", tuesday: "English", wednesday: "Physics", thursday: "Geography", friday: "Economics" },
    { time: "9:00 AM", monday: "Physics", tuesday: "Mathematics", wednesday: "Biology", thursday: "English", friday: "ICT" },
    { time: "10:00 AM", monday: "Mathematics", tuesday: "History", wednesday: "Chemistry", thursday: "Physics", friday: "Biology" },
    { time: "11:00 AM", monday: "Agriculture", tuesday: "French", wednesday: "Computer Science", thursday: "Counseling", friday: "Physical Education" },
  ],
};

export const schoolFees = [
  { label: "Registration Fee", amount: "$180.00" },
  { label: "Tuition Deposit", amount: "$220.00" },
  { label: "Uniform Deposit", amount: "$85.00" },
  { label: "Materials Fee", amount: "$60.00" },
  { label: "Total", amount: "$545.00" },
];

export const admissionStatusOptions = [
  "Application Submitted",
  "Under Review",
  "Entrance Exam Scheduled",
  "Entrance Exam Completed",
  "Interview Scheduled",
  "Interview Completed",
  "Accepted",
  "Not Accepted",
  "Registration In Progress",
  "Registration Complete",
] as const;

export const uniforms = [
  {
    name: "Junior Boys Uniform",
    grade: "Grades 7–9",
    price: "$75.00",
    description: "Official junior boys uniform with school shirt, trousers, badge, and required accessories.",
  },
  {
    name: "Junior Girls Uniform",
    grade: "Grades 7–9",
    price: "$75.00",
    description: "Official junior girls uniform with blouse, skirt, badge, and required accessories.",
  },
  {
    name: "Senior Boys Uniform",
    grade: "Grades 10–12",
    price: "$90.00",
    description: "Official senior boys uniform with shirt, trousers, badge, and academic accessories.",
  },
  {
    name: "Senior Girls Uniform",
    grade: "Grades 10–12",
    price: "$90.00",
    description: "Official senior girls uniform with blouse, skirt, badge, and academic accessories.",
  },
  {
    name: "Physical Education Uniform",
    grade: "All Grades",
    price: "$40.00",
    description: "PE shirt, shorts and sportswear combination for practical activities.",
  },
];

export const applicationStatusSteps = [
  { label: "Application Created", complete: true },
  { label: "Application Submitted", complete: true },
  { label: "Under Review", complete: true },
  { label: "Entrance Examination", complete: false },
  { label: "Interview", complete: false },
  { label: "Admission Decision", complete: false },
  { label: "Registration", complete: false },
];

export const schoolFeesBrochure = {
  title: "2026/2027 School Fees Brochure",
  format: "PDF",
};

export const bankSlipData = {
  student: portalStudent.name,
  applicationId: portalStudent.id,
  academicYear: portalStudent.year,
  type: "Registration Fee",
  amount: "$545.00",
  accountName: "ABCMSTS School Fees Account",
  bankName: "EcoBank Liberia",
  accountNumber: "1234567890",
  reference: "APP-2026-000123",
};
