export default function Projects() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <a href="#">
              <img src="client\src\assets\react.svg" alt="Image 1" className="rounded-lg" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="client\src\assets\react.svg" alt="Image 2" className="rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    );
  };
