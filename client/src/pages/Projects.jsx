

export default function Projects() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <a href="https://github.com/eymerin/TTRPG-Inventory-Bot">
              <img src="/assets/ttrpg.PNG" alt="TTRPG-Bot" className="rounded-lg" />
            </a>
          </div>
          <div>
            <a href="https://github.com/phechzzz/PeakPursuit">
              <img src="/assets/PeakPursuit.PNG" alt="PeakPursuit" className="rounded-lg" />
            </a>
          </div>
          <div>
            <a href="https://github.com/haleybrokaw/Get-Er-Done">
              <img src="/assets/geterdone.PNG" alt="GetErDonePlanner" className="rounded-lg" />
            </a>
          </div>
          <div>
            <a href="https://github.com/A04pr/Regex-Tutorial">
              <img src="/assets/Regex.PNG" alt="Regrex-tutorial" className="rounded-lg" />
            </a>
          </div>
          <div>
            <a href="https://github.com/A04pr/dailyPlanner">
              <img src="/assets/planner.PNG" alt="DailyPlanner" className="rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    );
  };
