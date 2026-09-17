import { Route, Routes } from "react-router-dom";
import PortalDashboard from "./PortalDashboard";
import PortalLanding from "./PortalLanding";
import PortalLayout from "./PortalLayout";
import PortalLogin from "./PortalLogin";
import PortalRegister from "./PortalRegister";
import PortalAnnouncements from "./PortalAnnouncements";
import PortalTimetable from "./PortalTimetable";
import PortalFees from "./PortalFees";
import PortalUniform from "./PortalUniform";
import PortalAdmission from "./PortalAdmission";
import PortalApplicationStatus from "./PortalApplicationStatus";
import PortalBankSlip from "./PortalBankSlip";

export default function PortalApp() {
  return (
    <Routes>
      <Route index element={<PortalLanding />} />
      <Route path="login" element={<PortalLogin />} />
      <Route path="register" element={<PortalRegister />} />
      <Route path="dashboard" element={<PortalLayout><PortalDashboard /></PortalLayout>} />
      <Route path="timetable" element={<PortalLayout><PortalTimetable /></PortalLayout>} />
      <Route path="announcements" element={<PortalLayout><PortalAnnouncements /></PortalLayout>} />
      <Route path="fees" element={<PortalLayout><PortalFees /></PortalLayout>} />
      <Route path="uniform" element={<PortalLayout><PortalUniform /></PortalLayout>} />
      <Route path="admission" element={<PortalLayout><PortalAdmission /></PortalLayout>} />
      <Route path="application-status" element={<PortalLayout><PortalApplicationStatus /></PortalLayout>} />
      <Route path="bank-slip" element={<PortalLayout><PortalBankSlip /></PortalLayout>} />
    </Routes>
  );
}
