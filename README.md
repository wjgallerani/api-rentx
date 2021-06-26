**RF**  => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN**  => Regra de negócio

# Cadastro de Carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado com disponibilidade por padrão.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Alterar Carro

**RF**

**RN**
Não deve ser possível alterar a placa de um carro já cadastrado.

# Listagem de Carros

**RF**
Deve ser possível listar os carros disponíveis.
Deve ser possível listar todos os casso disponíveis pelo nome da categoria.
Deve ser possível listar todos os casso disponíveis pelo nome da marca.
Deve ser possível listar todos os casso disponíveis pelo nome do carro.

**RN**
O usuário não precisar estar loado no sistema para listar os carros.

# Cadastro de Especificação no Carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros. 

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagens do Carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Agendamento de Aluguel

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo alguem caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo alguem caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponivel.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro foe devolvido com menos de 24h, deverá ser cobrado a diaria completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horario de devolução sejá superior ao hórario previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado no total do aluguel.
O usuário deve estar logado na aplicação.# Lista

# Listagem de Alugueis para usuário

**RF**
Deve ser possivel realizar a busca de todos os alugueis para o o usuário.

**RN**
O usuário deve esar logado na aplicação.