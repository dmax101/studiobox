# StudioBox Landing

Landing page institucional da StudioBox com Vite, React e Tailwind CSS.

## Visao geral

- Pagina estatica pronta para GitHub Pages
- Conteudo bilingue (PT-BR e EN)
- Estrutura orientada a componentes reutilizaveis
- Estilo moderno com inspiracao em padroes de UI tipo shadcn

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Publicacao no GitHub Pages

1. Configure o repositiorio para usar **GitHub Actions** em `Settings > Pages`.
2. Faça push na branch `main`.
3. A action em `.github/workflows/deploy.yml` publica a pasta `dist`.

## Conteudo estatico vs dinamico

O GitHub Pages entrega arquivos estaticos. Para recursos dinamicos (por exemplo, envio real de formulario), use servicos externos ou backend proprio.