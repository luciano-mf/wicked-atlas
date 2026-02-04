'use client';
import { ENCHANTMENT_COLUMNS, FACET_COLUMNS } from '@/lib/columns';
import DataTable from './table';
import SelectField from './SelectField';
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

  // Preparar options para os selects
  const rarityOptions = [
    { label: 'Facet', value: 'Facet' },
    ...rarities.map(rarity => ({ label: rarity, value: rarity }))
  ];

  const itemOptions = items.map(item => ({ label: item, value: item }));
  const groupOptions = groups.map(group => ({ label: group, value: group }));

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
        <SelectField 
          label="Raridade" 
          value={selectedRarity} 
          onChange={handleRarities}
          options={rarityOptions}
        />

        <SelectField 
          label="Item" 
          value={selectedItem} 
          onChange={handleItems}
          disabled={selectedRarity === "Facet"}
          options={itemOptions}
        />

        <SelectField 
          label="Tipo" 
          value={selectedGroup} 
          onChange={handleGroups}
          disabled={selectedRarity === "Facet"}
          options={groupOptions}
        />
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
