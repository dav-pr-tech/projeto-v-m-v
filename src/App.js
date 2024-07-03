import React, { useState } from 'react';
import './App.css';
import VisionMissionValuesDisplay from './components/VisionMissionValuesDisplay';
import VisionMissionValuesForm from './components/VisionMissionValuesForm';

const App = () => {
  const [data, setData] = useState(null);

  const handleSave = (formData) => {
    setData(formData);
    localStorage.setItem('visionMissionValues', JSON.stringify(formData));
  };

  const handleLoad = () => {
    const savedData = JSON.parse(localStorage.getItem('visionMissionValues'));
    setData(savedData);
  };

  const salvarJSON = () => {
    if (data) {
      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'vision-mission-values.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      alert('Não há dados para salvar!');
    }
  };

  const carregarJSON = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setData(content);
      } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
        alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="App">
      <VisionMissionValuesForm onSave={handleSave} />
      <VisionMissionValuesDisplay data={data} />
      <button onClick={salvarJSON}>Salvar como JSON</button>
      <label htmlFor="uploadJson" style={{ display: 'inline-block', margin: '10px' }}>
        <input
          id="uploadJson"
          type="file"
          style={{ display: 'none' }}
          onChange={carregarJSON}
        />
        <button type="button" onClick={() => document.getElementById('uploadJson').click()}>
          Carregar JSON
        </button>
      </label>
    </div>
  );
};

export default App;
