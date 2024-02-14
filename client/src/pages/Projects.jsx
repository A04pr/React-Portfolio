

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <a href="https://github.com/eymerin/TTRPG-Inventory-Bot">
            <img src="/assets/ttrpg.PNG" alt="TTRPG-Bot" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center rounded-lg">
              <span className="text-lg font-bold">TTRPG-Bot</span>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="https://github.com/phechzzz/PeakPursuit">
            <img src="/assets/PeakPursuit.PNG" alt="PeakPursuit" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center rounded-lg">
              <span className="text-lg font-bold">Peak Pursuit</span>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="https://github.com/haleybrokaw/Get-Er-Done">
            <img src="/assets/geterdone.PNG" alt="GetErDonePlanner" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center rounded-lg">
              <span className="text-lg font-bold">Get-Er-Done Planner</span>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="https://github.com/A04pr/Regex-Tutorial">
            <img src="/assets/Regex.PNG" alt="Regrex Tutorial" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center rounded-lg">
              <span className="text-lg font-bold">Rexgrex Tutorial</span>
            </div>
          </a>
        </div>
        <div className="relative">
          <a href="https://github.com/A04pr/dailyPlanner">
            <img src="/assets/planner.PNG" alt="Daily Planner" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white text-center rounded-lg">
              <span className="text-lg font-bold">Daily Planner</span>
            </div>
          </a>
        </div>
        </div>
      </div>
    );
  };
