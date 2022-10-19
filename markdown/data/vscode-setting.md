---
title: "VScode"
popular: 100
name: "VSCode setting"
---

# VSCode setting

1. Open command palette
2. Hotkey
   - Window **Ctrl + Shift + P**
   - Mac **Command+Shift+P**

- Configuration in settings.json

  ```
  user settings (JSON)
  ```

## Main

- settings.json
  ```
  {
  "emmet.syntaxProfiles": {
  "javascript": "jsx"
  },
  "emmet.includeLanguages": {
  "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "workbench.iconTheme": "vscode-icons",
  "[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "liveSassCompile.settings.includeItems": [],
  "liveSassCompile.settings.formats": [
  {
  "format": "expanded",
  // "extensionName": ".css",
  "savePath": "/css"
  // "savePathReplacementPairs": null
  }
  ],
  "liveSassCompile.settings.generateMap": false,
  "[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.guides.bracketPairs": "active",
  "editor.guides.bracketPairsHorizontal": "active",
  "editor.formatOnSave": true,
  "explorer.compactFolders": false
  }
  ```

## Setting

- emmet

  ```
  {
  "emmet.syntaxProfiles": {
  "javascript": "jsx"
  },
  "emmet.includeLanguages": {
  "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  }
  ```

- Bracket Pairs

  ```
  "editor.guides.bracketPairs": "active",
  "editor.guides.bracketPairsHorizontal": "active",
  ```

- format on Save

  ```
  "editor.formatOnSave": true
  ```

- Compact Folders

  ```
  "explorer.compactFolders": false
  ```
