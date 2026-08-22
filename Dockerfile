FROM python:3.11-slim

# Définis le répertoire de travail dans le conteneur
WORKDIR /app

# Installe les dépendances système si nécessaire
RUN apt-get update && apt-get install -y 

# Copie le fichier de dépendances et installe-les
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copie le reste du code source
COPY . .

# Expose le port par défaut d'uvicorn (8000)
EXPOSE 8000

# Commande de lancement
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
