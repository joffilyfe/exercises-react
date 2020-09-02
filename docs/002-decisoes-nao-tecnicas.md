# Decisões não técnicas

Algumas decisões no desenvolvimento da aplicação não possuem características técnicas. Algumas destas estão descritas abaixo.

## 1 - Idioma

Os idiomas Português e Inglês foram misturados durante o desenvolvimento. Os _commits_ e suas descrições foram registradas em português por ser o idioma nativo do desenvolvedor (:P). Como o histórico de commits é essencial para o acompanhamento da evolução do _app_, escolhi por tentar errar menos ao comunicar o que foi feito durante o desenvolvimento.

A documentação também segue a mesma ideia dos commits, uma vez que estes documentos podém ter versões, em um futuro será possível traduzir os mesmos.

A base de código utiliza o idioma Inglês em sua essência para evitar palavras como `Aplicacao` que existem na língua portuguesa. Também porque de forma geral existe um consenso na comunidade sobre a utilização do Inglês no desenvolvimento da base de código.

## 2 - UX

A aplicação foi construída com base em um mockup pouco opinativo sobre como a aplicação deveria funcionar. Por não possuir grandes habilidades com esta área, resolvi manter a aplicação o mais simples possível.

Para trabalhos futuros eu observo que o cadastro de exercícios deveria ser feito em uma nova página / tela.

A página inicial deve manter a listagem dos últimos exercícios mas também deve conter métodos de filtro.

A página inicial também poderia exibir um gráfico com a média de tempo por dia, e poderia utilizar uma ferramenta como o https://recharts.org/. Penso que este componente agregue uma boa usabilidade de _informação_ para o usuário. 

## 3 - Git flow

Todos os commits deste repositório foram feitos direto na master, não foram utilizadas _features branches_ e _pull requests_. Entendo que a partir do momento em que o projeto passa a ter contribuições essa métodologia dêva ser adotada.

Para futuras contribuções o fluxo deve serguir as seguintes normas:

- Fork
- Feature branch
- Pull Request para master
