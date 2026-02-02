export type Column = {
    header: string;
    accessor: string;
}

export const ENCHANTMENT_COLUMNS: Column[] = [
    {header: 'Raridade', accessor: 'rarity'},
    {header: 'Item', accessor: 'item'},
    {header: 'Grupo', accessor: 'group'},
    {header: 'Descrição', accessor: 'description'},
]

export const FACET_COLUMNS: Column[] = [
    {header:'Nome', accessor: 'name'},
    {header: 'Upside', accessor: 'upside'},
    {header: 'Downside', accessor: 'downside'},
    {header: 'Descrição', accessor: 'description'}
]
