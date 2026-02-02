'use client';
import { ENCHANTMENT_COLUMNS, FACET_COLUMNS } from '@/lib/columns';
import DataTable from './table';
import React from 'react';
import { useState } from 'react';
import types from '@/lib/types';

export default function EnchantamentFilter({
  AllEncantamentos,
  facets
}: {
  AllEncantamentos: types.Encantamento[];
  facets: types.Facet[];
}) {
  const [selectedRarity, setSelectedRarity] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('');

  const rarities = Array.from(new Set(AllEncantamentos.map(e => e.rarity)));
  const items = Array.from(new Set(AllEncantamentos.map(e => e.item)));
  const groups = Array.from(new Set(AllEncantamentos.map(e => e.group)));

  function handleRarities(item: string) {
    setSelectedRarity(item);
  
    if (item === 'Facet') {
      setSelectedItem('');
      setSelectedGroup('');
    }
  }

  function handleItems(item: string) {
    setSelectedItem(item);
  }

  function handleGroups(item: string) {
    setSelectedGroup(item);
  }

  const filteredData = AllEncantamentos.filter(item => {
  return (!selectedRarity || item.rarity === selectedRarity) &&
         (!selectedItem || item.item === selectedItem) &&
         (!selectedGroup || item.group === selectedGroup);
  });

  return (

    <div className="bg-[url(/images/background.webp)] bg-fixed flex flex-col items-center text-black min-h-screen py-8">
      <h1 className="text-3xl my-6 font-bold text-white">ENCANTAMENTOS</h1>

      <div className='grid grid-cols-3 gap-4 mb-4'>
        <div className='flex flex-col'>
          <label className='text-white'>Raridade</label>
          <select className='p-4 text-white font-bold bg-amber-700/60 border border-yellow-500 px-4 rounded-md text-gray-900 hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' value={selectedRarity} onChange={(e) => handleRarities(e.target.value)}>
            <option className="text-gray-900" key="Todos" value="">Todos</option>
            <option className="text-gray-900" key="Facet" value="Facet">Facet</option>
            {rarities.map(rarity => (
              <option className="text-black outline-neutral-50 rounded-md" key={rarity} value={rarity}>{rarity}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-white'>Item</label>
          <select disabled={selectedRarity === "Facet"} className='p-4 text-white font-bold bg-amber-700/60 border border-yellow-500 px-4 rounded-md text-gray-900 hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' value={selectedItem} onChange={(e) => handleItems(e.target.value)}>
            <option className="text-gray-900" key="Todos" value="">Todos</option>
            {items.map(item => (
              <option className="text-black outline-neutral-50 rounded-md" key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-white'>Tipo</label>
          <select disabled={selectedRarity === "Facet"} className='p-4 text-white font-bold bg-amber-700/60 border border-yellow-500 px-4 rounded-md text-gray-900 hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' value={selectedGroup} onChange={(e) => handleGroups(e.target.value)}>
            <option className="text-gray-900" key="Todos" value="">Todos</option>
            {groups.map(group => (
              <option className="text-black outline-neutral-50 rounded-md" key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Tabela de Encantamentos */}
      {selectedRarity !== "Facet" && ( 
      <div className="w-[90vw] max-w-5xl flex justify-center bg-white rounded-md mx-4 mt-6">
        <div className="p-4 w-full overflow-auto">
          <h2 className="text-lg text-center font-semibold mb-4">Encantamentos de Armas</h2>
          <DataTable className="w-full" columns={ENCHANTMENT_COLUMNS} data={filteredData} />
          {filteredData.length === 0 && (
            <div className="text-center mt-4 text-red-600 font-medium">Nenhum encantamento encontrado com os filtros selecionados.</div>
            )}
        </div>
      </div>)}

      {/* Tabela de Facets */}
      {facets.length > 0 && (selectedRarity === "Facet" || selectedRarity === "") && (
        <div className="w-[90vw] max-w-5xl flex justify-center bg-white rounded-md mx-4 mt-6 mb-6">
          <div className="p-4 w-full overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Facets</h2>
            <DataTable className="w-full" columns={FACET_COLUMNS} data={facets} />
            {facets.length === 0 && (
              <div className="text-center mt-4 text-red-600 font-medium">Nenhum facet encontrado com os filtros selecionados.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
