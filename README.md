# Jet Academy — PWA Setup no GitHub Pages

## Estrutura de arquivos

```
jet-academy/
├── index.html        ← App principal
├── manifest.json     ← Configuração PWA
├── sw.js             ← Service Worker (cache offline)
├── icons/
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-192x192-maskable.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   └── icon-512x512-maskable.png
└── README.md
```

---

## Passo a passo — publicar no GitHub Pages

### 1. Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Nome do repositório: `jet-academy`
4. Deixe como **Public**
5. **NÃO** marque "Add README"
6. Clique **"Create repository"**

---

### 2. Fazer upload dos arquivos

Na página do repositório recém-criado:

1. Clique em **"uploading an existing file"** (link no centro da tela)
2. Arraste **todos os arquivos** desta pasta:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. Clique em **"Commit changes"**

4. Agora crie a pasta `icons`:
   - Clique em **"Add file" → "Upload files"**
   - Abra a pasta `icons/` e arraste todos os `.png`
   - No campo de path, escreva `icons/` antes do nome
   - Clique em **"Commit changes"**

> **Dica:** Você pode usar o GitHub Desktop para arrastar a pasta inteira de uma vez.

---

### 3. Ativar GitHub Pages

1. No repositório, clique em **"Settings"** (aba superior)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - Branch: `main`
   - Pasta: `/ (root)`
4. Clique em **"Save"**
5. Aguarde ~1 minuto

Seu app estará disponível em:
```
https://SEU_USUARIO.github.io/jet-academy/
```

---

### 4. Configurar a URL do Google Apps Script

No `index.html`, localize a linha com `GAS_URL` (ou a URL do seu deploy) e substitua pelo endereço do seu WebApp:

```
https://script.google.com/macros/s/SEU_ID_AQUI/exec
```

---

### 5. Instalar no celular

**Android (Chrome):**
- Acesse a URL do GitHub Pages
- O Chrome mostrará automaticamente o banner **"Adicionar à tela inicial"**
- Toque em **Instalar**

**iOS (Safari):**
- Acesse a URL no Safari
- Toque no botão **Compartilhar** ⬆️
- Toque em **"Adicionar à Tela Inicial"**
- Toque em **Adicionar**

---

### Atualizar o app

Sempre que fizer mudanças:
1. Edite os arquivos localmente
2. No GitHub, vá em cada arquivo → clique no lápis ✏️ → cole o conteúdo novo → **Commit**
3. O GitHub Pages atualiza automaticamente em ~1 minuto
4. No celular, feche e reabra o app para carregar a versão nova

---

### Trocar o ícone

1. Substitua os arquivos em `icons/` pelos novos ícones (mesmos nomes)
2. Atualize `icon-192x192-maskable.png` para o Android ficar com fundo
3. Faça commit no GitHub
