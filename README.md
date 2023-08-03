# AdmissãoWeb

## Observações

Foram desenvolvidos o máximo de componente e estrutura possível dentro do tempo disponível.

## Explicação técnica

A estrutura de pastas do projeto foi organizada da seguinte forma:
- _domain -> contém as classes de domínio da aplicação
- _shared -> contém os componentes e serviços compartilhados
- modulos -> contém os módulos da aplicação (consolidation, flow, home)
    - modulos podém ter suas próprias pastas estruturais tais quais: components, services, models, etc.
- pastas estruturais são definidas com o prefixo "_", para que fiquem sempre no topo da lista de pastas

## Primeiros passos

- Instale [Node.js](https://nodejs.org/en/) versão 10.9.0 ou superior
- Instale [Angular CLI](https://cli.angular.io/) versão 6.2.3 ou superior
- Instale [Git](https://git-scm.com/)
- Instale [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de texto de sua preferência

### Clone o repositório

```
git clone [url do repositório]
```

### Instale as dependências

```
npm i
```

### Inicie o servidor local

```
ng s -o
```

### Acesse a aplicação

```
http://localhost:4200/
```