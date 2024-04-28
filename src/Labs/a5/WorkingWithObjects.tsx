import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Module {
  id: string;
  name: string;
  description: string;
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  score: number;
  completed: boolean;
}

const WorkingWithObjects: React.FC = () => {
  const [module, setModule] = useState<Module>({ id: '1', name: 'Initial Name', description: 'Initial Description' });
  const [newModuleName, setNewModuleName] = useState('');
  const [newModuleDescription, setNewModuleDescription] = useState('');

  const [assignment, setAssignment] = useState<Assignment>({ id: '1', title: 'NodeJS Assignment', description: 'Create a NodeJS server with ExpressJS', score: 75, completed: false });
  const [newScore, setNewScore] = useState(assignment.score);

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await axios.get('http://localhost:3000/a5/module');
        setModule(response.data);
      } catch (error) {
        console.error('Failed to fetch module', error);
      }
    };

    const fetchAssignment = async () => {
      try {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      } catch (error) {
        console.error('Failed to fetch assignment', error);
      }
    };

    fetchModule();
    fetchAssignment();
  }, []);

  const updateModuleDescription = async () => {
    setModule({ ...module, description: newModuleDescription });
  };

  const updateModuleName = async () => {
    setModule({ ...module, name: newModuleName });
  };

  const updateScore = async () => {
    setAssignment({ ...assignment, score: newScore });
  };

  const updateTitle = async () => {
    try {
      const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    } catch (error) {
      console.error('Failed to update title', error);
    }
  };

  return (
    <div>
      <h2>Working With Objects</h2>
      <h3>Module Details</h3>
      <input type="text" value={newModuleName} onChange={e => setNewModuleName(e.target.value)} placeholder="New Module Name" />
      <button onClick={updateModuleName}className="btn btn-primary">Update Module Name</button><br />
      <input type="text" value={newModuleDescription} onChange={e => setNewModuleDescription(e.target.value)} placeholder="New Module Description" />
      <button onClick={updateModuleDescription}className="btn btn-primary">Update Module Description</button><br />
      <strong>Current Module Name:</strong> {module.name}<br />
      <strong>Current Module Description:</strong> {module.description}<br />
      
      <h3>Assignment Details</h3>
      <input type="text" value={assignment.title} onChange={e => setAssignment({ ...assignment, title: e.target.value })} />
      <button onClick={updateTitle}className="btn btn-primary">Update Title to: {assignment.title}</button><br />
      <input type="number" value={newScore} onChange={e => setNewScore(Number(e.target.value))} />
      <button onClick={updateScore}className="btn btn-primary">Update Score</button><br />
      <label>Completed:
        <input type="checkbox" checked={assignment.completed} onChange={e => setAssignment({ ...assignment, completed: e.target.checked })} />
      </label><br />
      <button onClick={() => setAssignment({ ...assignment, completed: !assignment.completed })}className="btn btn-primary">Toggle Completed</button><br />
    </div>
  );
};

export default WorkingWithObjects;
