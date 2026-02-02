'use client';
import { ENCHANTMENT_COLUMNS, FACET_COLUMNS } from '@/lib/columns';
import DataTable from './table';
import React from 'react';
import {useState} from 'react';
import types from '@/lib/types';

export default function EnchantamentFilter({ 
    AllEncantamentos,
    facets 
}: {
    AllEncantamentos: types.Encantamento[];
    facets: types.Facet[];
})
    {
      const [selectedRarity, setSelectedRarity] = useState<string>('');
      const[selectedItem, setSelectedItem] = useState<string>('');
      const [selectedGroup, setSelectedGroup] = useState<string>('');

      const rarities = Array.from(new Set(AllEncantamentos.map(e => e.rarity)));
      const items = Array.from(new Set(AllEncantamentos.map(e => e.item)));
      const groups = Array.from(new Set(AllEncantamentos.map(e => e.group)));

      function handleRarities(item: string) {
        setSelectedRarity(item);
      }
      
      function handleItems(item: string) {
        setSelectedItem(item);
      }

      function handleGroups(item: string) {
        setSelectedGroup(item);
      }

     const filteredData = AllEncantamentos.filter(item => {
      if(selectedRarity && item.rarity !== selectedRarity) return false
      if(selectedItem && item.item !== selectedItem) return false
      if(selectedGroup && item.group !== selectedGroup) return false
      return true;
    })

return (
    
    <div className="flex flex-col items-center text-black min-h-screen py-8">
      <div className='flex flex-row justify-start'>
        <select className='text-white br-red-700' value={selectedRarity} onChange={(e)=> handleRarities(e.target.value)}>
        <option value="">Todos</option>
        {rarities.map(rarity => (
          <option key={rarity} value={rarity}>{rarity}</option>
        ))}
        </select>
        <select className='text-white br-red-700' value={selectedItem} onChange={(e)=> handleItems(e.target.value)}>
        <option value="">Todos</option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
        </select>
        <select className='text-white br-red-700' value={selectedGroup} onChange={(e)=> handleGroups(e.target.value)}>
        <option value="">Todos</option>
        {groups.map(group => (
          <option key={group} value={group}>{group}</option>
        ))}
        </select>
      </div>
      
        
      <h1 className="text-xl mt-4 p-3">ENCANTAMENTOS</h1>      
      {/* Tabela de Encantamentos */}
      <div className="w-[90vw] max-w-5xl flex justify-center bg-white rounded-md mx-4 mt-6">
        <div className="p-4 w-full overflow-auto">
          <h2 className="text-lg text-center font-semibold mb-4">Encantamentos de Armas</h2>
          <DataTable className="w-full" columns={ENCHANTMENT_COLUMNS} data={filteredData} />
        </div>  
      </div>

      {/* Tabela de Facets */}
      {facets.length > 0 && (
        <div className="w-[90vw] max-w-5xl flex justify-center bg-white rounded-md mx-4 mt-6 mb-6">
          <div className="p-4 w-full overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Facets</h2>
            <DataTable className="w-full" columns={FACET_COLUMNS} data={facets} />
          </div>
        </div>
      )}
    </div>
  );
    }
