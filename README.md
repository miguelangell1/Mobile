# NoteManager

O **NoteManager** é um aplicativo móvel simples para gerenciamento de notas, que demonstra o uso de estados e a criação de componentes reutilizáveis. O aplicativo permite aos usuários adicionar novas notas de texto e visualizá-las em uma lista.

## 📋 Funcionalidades

- Exibir uma lista de notas adicionadas, cada uma mostrando seu conteúdo (texto simples).
- Um campo de entrada de texto e um botão para adicionar uma nova nota.
- Quando uma nota é adicionada, ela é inserida no estado global e aparece na lista.
- Opção para remover notas individuais ou remover todas as notas de uma vez.

## 🛠️ Componentes

1. **NoteItem**: Componente para exibir uma única nota (recebe o texto da nota como uma prop).
2. **NotesList**: Componente que recebe a lista de notas e renderiza múltiplos componentes NoteItem.
3. **AddNoteForm**: Componente com um campo de entrada de texto e um botão para adicionar uma nova nota, chamando uma função do estado global.

## 🚀 Começando

### 📂 Pré-requisitos

- Node.js e npm instalados na sua máquina.
- Expo CLI instalado globalmente. Você pode instalar usando o seguinte comando:
  ```sh
  npm install -g expo-cli

## 🔧 Instalação

-    Clone o repositório:
    ```sh
    git clone <repository-url>

- Navegue até o diretório do projeto:
    ```sh
    cd notes-app/NoteManager

- Instale as dependências:
    ```sh
    npm install

- Execute o aplicativo:
    ```sh
    npm start

-    Isso iniciará o servidor de desenvolvimento do Expo e exibirá um código QR.

### 📱 Executando no seu dispositivo

    Baixe o aplicativo Expo Go no seu telefone pela App Store (iOS) ou Google Play Store (Android).

    Abra o aplicativo Expo Go no seu telefone e escaneie o código QR exibido no terminal ou navegador.