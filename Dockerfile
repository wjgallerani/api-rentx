# Passa a passo do que o Docker vai ter que fazer

FROM node

# Define um diretório onde queremos que nossas estão contidas
WORKDIR /usr/app

#Copiar arquivo package.json para nosso diretório
COPY package.json ./

# Rodar / Instalar todas dependências
RUN npm install

# Copie tudo para nosso diretório raiz
COPY . .

# Porta que estamos utilizando
EXPOSE 3333

# Pedir para o CMD executar nosso projeto
CMD ["npm", "run", "dev"] 