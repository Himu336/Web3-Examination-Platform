import { useNavigate } from 'react-router-dom';

const EntryPortal = () => {
  const navigate = useNavigate();

  const portalButtons = [
    { title: 'Student', path: '/login/student', bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-700', borderColor: 'border-blue-500' },
    { title: 'Faculty', path: '/login/faculty', bgColor: 'bg-green-600', hoverColor: 'hover:bg-green-700', borderColor: 'border-green-500' },
    { title: 'Admin', path: '/login/admin', bgColor: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', borderColor: 'border-purple-500' }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {portalButtons.map(({ title, path, borderColor }) => (
          <button
            key={title}
            onClick={() => navigate(path)}
            className={`p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow
                       border-t-4 ${borderColor} text-center`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {title} Portal
            </h2>
            <p className="text-gray-600">
              Login as {title.toLowerCase()} to access your dashboard
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EntryPortal; 