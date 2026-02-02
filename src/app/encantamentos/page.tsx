import DataTable from '../components/table';
import { ENCHANTMENT_COLUMNS, FACET_COLUMNS, Column } from '../../lib/columns';
import EnchantamentFilter from '../components/EnchantamentFilter';
import { get } from 'http';
import getAllEncantamentos, { getFacetEncantamentos } from '@/lib/encantamentos';

export default async function EncantamentosPage() {
  const allEncantamentos = await getAllEncantamentos();
  const facets = await getFacetEncantamentos();

  return (
    <EnchantamentFilter AllEncantamentos={allEncantamentos} facets={facets} />
  );
}
