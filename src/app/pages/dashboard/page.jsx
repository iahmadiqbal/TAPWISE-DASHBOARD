import RecentAlertsPanel from "@/components/dashboard/DashboardStats/page";
import LeadsUsersCharts from "@/components/dashboard/leadsuserscharts/page";
import DashboardStats from "@/components/dashboard/page";
import FilterBar from "@/components/dashboardcomponents/filterbar/page";

const Dashboard = () => {
  return (
    <>
      <DashboardStats />
      <LeadsUsersCharts />
      <FilterBar />
      <RecentAlertsPanel />
    </>
  );
};

export default Dashboard;
