BUILD IMAGEM
docker build  . -t frontend-ad-backoffice
RODAR IMAGEM
docker run --rm --name=frontend-ad-backoffice -p 5000:80 frontend-ad-backoffice -d
