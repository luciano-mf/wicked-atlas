import fs from 'fs/promises';
import path from 'path';
import { Encantamento, Facet } from './types';

export async function getAllEncantamentos(): Promise<Encantamento[]> {
  const base = path.join(process.cwd(), 'src', 'app', 'encantamentos');
  const result: Record<string, any>[] = [];

  // Buscar todos os encantamentos, excluindo facets
  const categories = ['magical', 'plalgued'];
  
  for (const cat of categories) {
    const dir = path.join(base, cat);
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (file.endsWith('.json')) {
          try {
            const content = await fs.readFile(path.join(dir, file), 'utf-8');
            const parsedFile = JSON.parse(content);
            if (Array.isArray(parsedFile)) {
              result.push(...parsedFile);
            }
          } catch (e) {
            // ignore individual file parse errors
          }
        }
      }
    } catch (e) {
      // ignore missing category folder
    }
  }
  return result;
}

export async function getFacetEncantamentos(): Promise<Record<string, any>[]> {
  const base = path.join(process.cwd(), 'src', 'app', 'encantamentos');
  const facetsDir = path.join(base, 'facets');
  const result: Record<string, any>[] = [];

  try {
    const files = await fs.readdir(facetsDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        try {
          const content = await fs.readFile(path.join(facetsDir, file), 'utf-8');
          const parsedFile = JSON.parse(content);
          if (Array.isArray(parsedFile)) {
            result.push(...parsedFile);
          }
        } catch (e) {
          // ignore individual file parse errors
        }
      }
    }
  } catch (e) {
    // no facets folder
  }

  return result;
}

export async function getCategories(): Promise<string[]> {
  return ['magical', 'plagued'];
}

export type Column = {
  header: string;
  accessor: string;
};

export const ENCHANTMENT_COLUMNS: Column[] = [
  { header: 'Rarity', accessor: 'rarity' },
  { header: 'Item', accessor: 'item' },
  { header: 'Group', accessor: 'group' },
  { header: 'Description', accessor: 'description' },
];

export const FACET_COLUMNS: Column[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Upside', accessor: 'upside' },
  { header: 'Downside', accessor: 'downside' },
  { header: 'Description', accessor: 'description' },
];

export default getAllEncantamentos;
