'use client';
import { ENCHANTMENT_COLUMNS, FACET_COLUMNS } from '@/lib/columns';
import DataTable from './table';

export default function EnchantamentFilter({ 
    AllEncantamentos,
    facets 
}: {
    AllEncantamentos: Record<string, any>[];
    facets: Record<string, any>[];
})
    {
return (
    <div className="flex flex-col items-center text-black min-h-screen py-8">
      <h1 className="text-xl mt-4 p-3">ENCANTAMENTOS</h1>
      
      {/* Tabela de Encantamentos */}
      <div className="w-[90vw] max-w-5xl flex justify-center bg-white rounded-md mx-4 mt-6">
        <div className="p-4 w-full overflow-auto">
          <h2 className="text-lg text-center font-semibold mb-4">Encantamentos de Armas</h2>
          <DataTable className="w-full" columns={ENCHANTMENT_COLUMNS} data={AllEncantamentos} />
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
