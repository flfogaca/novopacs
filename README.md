# novopacs

Projeto de apresentação estática do PACS/RIS com deploy automático no Vercel.

## Estrutura

- `frontend_2/`: app estático publicado no Vercel
- `frontend_2/index.html`: shell principal
- `frontend_2/telas/*/code.html`: telas carregadas no iframe

## Publicação no Vercel

Configuração do projeto `novopacs`:

- Root Directory: `frontend_2`
- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio
- Production Branch: `main`

## Fluxo de deploy

1. Commit e push na branch `main`.
2. O Vercel detecta o push via integração nativa com GitHub.
3. O deploy de produção atualiza em `https://novopacs.vercel.app`.

## Desenvolvimento local

Como o projeto é estático, você pode abrir `frontend_2/index.html` no navegador.

