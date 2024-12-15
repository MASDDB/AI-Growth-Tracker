import React from 'react';
    import TaskList from './components/TaskList';
    import ProgressGraph from './components/ProgressGraph';
    import Quote from './components/Quote';
    import Gamification from './components/Gamification';
    import AIAssistant from './components/AIAssistant';

    function App() {
      return (
        <div className="App">
          <header className="bg-blue-500 text-white p-4">
            <h1 className="text-3xl font-bold">AI Automation Agency Growth Tracker</h1>
          </header>
          <main className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TaskList />
                <ProgressGraph />
              </div>
              <div>
                <Quote />
                <Gamification />
                <AIAssistant />
              </div>
            </div>
          </main>
        </div>
      );
    }

    export default App;
