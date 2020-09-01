# Decisões técnicas

A aplicação foi construída utilizando tecnologias modernas e alinhadas com o ecossistema do front-end no ano de 2020.

Os commits da aplicação devem conter dados que embasam as decisões tomadas ao longo do seu desenvolvimento mas estas decisões também estão contidas nesta página de forma mais resumida.

## 1 - Framework Web

O ReactJS foi utilizado como base (mesmo não sendo um _framework_ propriamente dito) por ser versátil o suficiente para a criação de interfaces modernas e dinâmicas no lado do cliente. O ReactJS não é opinativo quanto a estrutura do projeto, deixando o desenvolvedor livre para estruturar a aplicação nos moldes requeridos.

## 2 - Redux

O Redux foi utilizado como biblioteca gerenciadora de estado por ser simples o suficiente para ser usada em uma aplicação pequena como o `Workout Log`.

Permite que a aplicação cresça e que o gerenciamento de estado não se torne um problema no futuro.

## 3 - SASS

A aplicação não faz uso de _frameworks_ como o `Bootstrap` ou `Zurb`, ela é pequena o suficiente para tornar possível a criação das nossas próprias regras de CSS.

O pré processador `SASS` garante a criação de CSS reutilizável e modular.

## 4 - Serialização de objetos

Tudo o que é salvo no `localStorage` precisa ser serializável, então durante o `save` e o `load` dos dados, a aplicação executa instruções para serializar os objetos JavaScript em dados `JSON` e vice versa.

Uma particularidade é observada na data que cada exercício contém. A aplicação (`ExerciseTable`) espera que seja sempre do tipo `Date`. Ao realizarmos o `load` do `localStorage`, este dado está em formato `String`, sendo necessário realizar uma "deserialização" do objeto, criando assim uma instância do tipo `Date`.
