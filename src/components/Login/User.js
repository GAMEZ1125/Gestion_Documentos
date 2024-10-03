import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

function Task({ task, index, deleteTask, toggleCompleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDeadline, setNewDeadline] = useState(task.deadline);

  const handleUpdate = () => {
    updateTask(index, newText, newDeadline);
    setIsEditing(false);
  };

  return (
    <tr style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <td>
        {isEditing ? (
          <Input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
        ) : (
          task.text
        )}
      </td>
      <td>
        {isEditing ? (
          <Input 
            type="date" 
            value={newDeadline} 
            onChange={(e) => setNewDeadline(e.target.value)} 
          />
        ) : (
          task.deadline
        )}
      </td>
      <td>
        {isEditing ? (
          <Button onClick={handleUpdate} color="primary">
            <FontAwesomeIcon icon={faSave} />
          </Button>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)} color="warning" className="mr-2">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button onClick={() => toggleCompleteTask(index)} color="success" className="mr-2">
              <FontAwesomeIcon icon={task.completed ? faTimes : faCheck} />
            </Button>
            <Button onClick={() => deleteTask(index)} color="danger">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </>
        )}
      </td>
    </tr>
  );
}

export default Task;