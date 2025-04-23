import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <Header />
        </div>
    );
};

export default App;