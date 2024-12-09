# Étape 1 : Utiliser une image officielle de Node.js comme base
FROM node:16

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tous les fichiers du projet
COPY . .

# Étape 6 : Compiler le projet
RUN npm run build

# Étape 7 : Exposer le port de l'application
EXPOSE 4000

# Étape 8 : Démarrer l'application
CMD ["npm", "run", "start:prod"]
