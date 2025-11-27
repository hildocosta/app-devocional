# 📱 Tela de Login - Aplicativo de Devocionais

<img src="https://github.com/hildocosta/app-devocional/blob/main/Tela%20Splash.jpg" alt="Print da Tela de Splash" width="300" />
<img src="https://github.com/hildocosta/app-devocional/blob/main/Tela%20de%20Login.jpg" alt="Print da Tela de Login" width="300" />
<img src="https://github.com/hildocosta/app-devocional/blob/main/Tela%20Register.jpg" alt="Print da Tela de Register" width="300" />





## 🔹 Sobre o Projeto

Este repositório contém a **tela de login profissional** de um aplicativo de devocionais, desenvolvido de forma **autoral**.  
O projeto nasceu da necessidade da minha esposa de registrar seus devocionais diariamente em um aplicativo simples e funcional.  

> **Objetivo atual:** Foco no desenvolvimento da tela de login, garantindo **design moderno, usabilidade e segurança**.  
> Futuramente, o aplicativo permitirá salvar devocionais em banco de dados, mas esta etapa é dedicada ao login.

---

## 🚀 Funcionalidades da Tela de Login

- **Autenticação segura:** Integração com serviço de login (simulado/real).  
- **Inputs personalizados e seguros:**  
  - **EmailInput**: Validação completa de formato de e-mail.  
  - **PasswordInput**: Validação avançada de senha (mínimo 8 caracteres, letras maiúsculas e minúsculas, números e caracteres especiais).  
  - Campos de senha com possibilidade de mostrar/esconder.  
  - Desabilitação de autocomplete, sugestões automáticas e menu de contexto para segurança extra.  
- **Botão de login animado:**  
  - Animação de escala ao pressionar.  
  - Indicador de carregamento (`loading`) ao processar login.  
- **Design profissional e consistente:**  
  - **Cores centralizadas** em `LoginColors.js`.  
  - **Estilos unificados** em `LoginStyles.js` para manutenção fácil e consistente.  
- **Experiência de usuário otimizada:**  
  - `KeyboardAvoidingView` e `ScrollView` para telas de diferentes tamanhos.  
  - Inputs focados e navegação do teclado entre campos.  

---

## 💻 Tecnologias Utilizadas

- **React Native**  
- **Expo / Expo Router**  
- **Biblioteca de ícones:** `@expo/vector-icons`  
- **Hooks do React:** `useState`, `useEffect`, `useRef`  
- **JavaScript modular e limpo**  

---

## 🗂 Estrutura de Pastas

```plaintext
frontend/
├── components/
│   ├── buttons/
│   │   └── ButtonPrimaryAnimated.js
│   ├── inputs/
│   │   ├── EmailInput.js
│   │   └── PasswordInput.js
│   ├── colors/
│   │   └── LoginColors.js
│   └── styles/
│       └── LoginStyles.js
└── service/
    └── UsuarioService.js
```

## Refatorações e Melhorias Implementadas

- Centralização de cores e estilos para facilitar manutenção e consistência visual.
- Refatoração completa dos componentes de input e botão.
- Validações avançadas de e-mail e senha com feedback imediato.
- Medidas de segurança implementadas nos inputs de senha.
- Botão animado profissional com feedback visual e indicador de carregamento.
- Design responsivo e compatível com diferentes dispositivos móveis.

### 🔐 Segurança

- Campos de senha ocultos por padrão, com opção de visualização temporária.
- Desativação de autocomplete, correção automática e menu de contexto para senha.
- Validações avançadas impedem envio de dados inválidos.

### ⚡ Observações

- Este é um projeto autoral, criado para atender a necessidade pessoal de registro de devocionais.
- O foco principal é a tela de login profissional e segura.
- Futuras implementações incluirão cadastro, recuperação de senha e gerenciamento de devocionais.

  ### ✨ Contato

Desenvolvido por **Hildo Costa**  
📧 Email: hyldo.costa@gmail.com
