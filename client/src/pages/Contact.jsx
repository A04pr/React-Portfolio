export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
      <p className="text-center mb-4">Hello! If you need to contact me please do it via the provided GitHub and LinkedIn links. Thank you!</p>
      <div className="flex flex-col items-center space-y-4">
        <a href="https://github.com/A04pr" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">Github</a>
        <a href="https://www.linkedin.com/in/aidanpreed" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 transition duration-300">LinkedIn</a>
      </div>
    </div>
  );
};