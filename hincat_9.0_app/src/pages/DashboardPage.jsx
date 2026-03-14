import Dashboard_TopNav from '../components/dashboardPage_components/Dashboard_TopNav';
import Dashboard_Vision from '../components/dashboardPage_components/Dashboard_Vision';
import Dashboard_Controls from '../components/dashboardPage_components/Dashboard_Controls';
import Dashboard_Sync from '../components/dashboardPage_components/Dashboard_Sync';
import Dashboard_Network from '../components/dashboardPage_components/Dashboard_Network';
import Dashboard_VisionMetrics from '../components/dashboardPage_components/Dashboard_VisionMetrics';
import Dashboard_Pipeline from '../components/dashboardPage_components/Dashboard_Pipeline';

function DashboardPage() {
  return (
    <div className="bg-background-light font-sans text-slate-800 antialiased min-h-screen">
      <Dashboard_TopNav />
      <main className="p-6 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
          <Dashboard_Vision />
          <aside className="lg:col-span-3 flex flex-col gap-6">
            <Dashboard_Controls />
            <Dashboard_Sync />
            <Dashboard_Network />
            <Dashboard_VisionMetrics />
          </aside>
          <Dashboard_Pipeline />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
