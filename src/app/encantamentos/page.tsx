
import fs from 'fs';
import path from 'path';
import React from 'react';

type Encantamento = {
  description: string;
};

type EncantamentosJson = {
  [categoria: string]: {
    [tipo: string]: {
      [subtipo: string]: Encantamento[];
    } | Encantamento[];
  };
};

async function getEncantamentosJson(): Promise<EncantamentosJson> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'encantamentos.json');
  const data = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

function renderEncantamentos(obj: any, path: string[] = []) {
  if (Array.isArray(obj)) {
    return (
      <ul className="mb-6">
        {obj.map((enc: Encantamento, idx: number) => (
          <li key={idx} className="border rounded p-4 bg-white shadow mb-2">
            <span className="text-gray-700">{enc.description}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="ml-2">
      {Object.entries(obj).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h2 className="text-xl font-semibold mt-4 mb-2 capitalize">{[...path, key].join(' / ')}</h2>
          {renderEncantamentos(value, [...path, key])}
        </div>
      ))}
    </div>
  );
}

export default async function EncantamentosPage() {
  const encantamentosJson = await getEncantamentosJson();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Encantamentos de Armas</h1>
      <p className="mb-8 text-gray-600">Explore os encantamentos de armas de forma organizada por categoria e tipo.</p>
      {renderEncantamentos(encantamentosJson)}
    </main>
  );
}
