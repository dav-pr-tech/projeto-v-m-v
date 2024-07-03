import React, { useState } from 'react';

const VisionMissionValuesForm = ({ onSave }) => {
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const [values, setValues] = useState('');

  const handleSave = () => {
    const data = { vision, mission, values: values.split(',') };
    onSave(data);
  };

  return (
    <div>
      <h2>Visão, Missão e Valores</h2>
      <form>
        <div>
          <label>Visão:</label>
          <input type="text" value={vision} onChange={(e) => setVision(e.target.value)} />
        </div>
        <div>
          <label>Missão:</label>
          <input type="text" value={mission} onChange={(e) => setMission(e.target.value)} />
        </div>
        <div>
          <label>Valores (separados por vírgula):</label>
          <input type="text" value={values} onChange={(e) => setValues(e.target.value)} />
        </div>
        <button type="button" onClick={handleSave}>Salvar</button>
      </form>
    </div>
  );
};

export default VisionMissionValuesForm;
