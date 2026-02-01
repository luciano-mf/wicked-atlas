O Wicked Atlas é uma base de dados estruturada para o jogo No Rest for the Wicked, organizada para servir como referência completa de:

Encantamentos (Magical, Plagued e Downsides)

Facets (propriedades fixas de itens únicos)

Itens e suas combinações possíveis

Dados traduzidos PT‑BR + texto original

O objetivo é oferecer uma fonte confiável, organizada e fácil de integrar em aplicações, sites, ferramentas de build e visualizadores de itens.
wicked-atlas/
│
├─ magical/
│   ├─ weapon.json
│   ├─ shield.json
│   ├─ bow.json
│   ├─ helmet.json
│   ├─ armor.json
│   ├─ pants.json
│   └─ gloves.json
│
├─ plagued/
│   ├─ weapon.json
│   ├─ shield.json
│   ├─ bow.json
│   ├─ helmet.json
│   ├─ armor.json
│   ├─ pants.json
│   └─ gloves.json
│
├─ downsides/
│   ├─ weapon.json
│   ├─ shield.json
│   ├─ bow.json
│   ├─ helmet.json
│   ├─ armor.json
│   ├─ pants.json
│   └─ gloves.json
│
├─ facets/
│   ├─ weapon.json
│   ├─ armor.json
│   ├─ shield.json
│   ├─ gloves.json
│   ├─ pants.json
│   ├─ bow.json      (vazio — sem facets conhecidas)
│   └─ helmet.json   (vazio — sem facets conhecidas)
│
└─ README.md
✨ Encantamentos (Magical)
Encantamentos Magical são bônus positivos que podem aparecer em itens comuns e raros.
Eles são:

aleatórios

rerroláveis

aplicáveis via crafting

divididos por tipo de item

Cada entrada segue o formato:

json
{
  "rarity": "Magical",
  "item": "Weapon",
  "group": "Offensive",
  "description": "Dano aumentado em 5%-10%",
  "original": "Damage increased by 5%-10%"
}
🟣 Encantamentos (Plagued)
Encantamentos Plagued são versões mais fortes dos Magical, com valores maiores e efeitos mais impactantes.

Formato idêntico ao Magical, porém com "rarity": "Plagued".

🔻 Downsides
Downsides são penalidades aplicadas a itens Plagued.
Todo item Plagued possui um downside obrigatório.

Formato:

json
{
  "rarity": "Downside",
  "item": "Armor",
  "group": "Defence",
  "description": "Resistência reduzida em 5%-10%",
  "original": "Resistance reduced by 5%-10%"
}
🎭 Facets
Facets são propriedades fixas encontradas em itens únicos.
Diferente dos encantamentos:

não são rerroláveis

não são craftáveis

fazem parte da identidade do item

Formato:

json
{
  "name": "Quick",
  "upside": "Velocidade de ataque aumentada",
  "downside": "Dano reduzido",
  "description": "Aumenta a velocidade de ataque, mas reduz o dano.",
  "original_upside": "+Attack Speed",
  "original_downside": "-Damage"
}
Itens sem facets conhecidas possuem arquivos vazios ([]) para manter consistência.

🌐 Tradução PT‑BR + Texto Original
Todos os efeitos possuem:

description → traduzida

original → texto original do jogo

Isso permite:

exibir o jogo em PT‑BR

manter compatibilidade com builds, wikis e ferramentas internacionais

facilitar buscas por termos originais

🤝 Contribuindo
Pull requests são bem-vindos!

Você pode contribuir com:

novos itens

correções de tradução

ajustes de valores

inclusão de futuras atualizações do jogo

melhorias na estrutura

📜 Licença
Este projeto é open-source.
Use, modifique e distribua livremente, desde que mantenha os créditos.
