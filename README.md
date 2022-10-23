<div align="center">

# Express Boilerplate

<p>
  This is a boilerplate for Express.js projects, includes a basic setup for a REST API with GraphQL.
</p>

![Docker](https://img.shields.io/badge/Docker-222?style=for-the-badge&logo=Docker&logoColor=009be9) ![TypeScript](https://img.shields.io/badge/TypeScript-222?style=for-the-badge&logo=typescript&logoColor=f7df1e) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-222?style=for-the-badge&logo=PostgreSQL&logoColor=26668b) ![Swagger](https://img.shields.io/badge/Swagger-222?style=for-the-badge&logo=Swagger&logoColor=369c3a) ![GraphQL](https://img.shields.io/badge/GraphQL-222?style=for-the-badge&logo=GraphQL&logoColor=e73ba2) ![JEST](https://img.shields.io/badge/Jest-222?style=for-the-badge&logo=Jest&logoColor=aa5067)

![ESLINT](https://img.shields.io/badge/ESLint-555?style=flat-square&logo=eslint&logoColor=fff) ![Prettier](https://img.shields.io/badge/Prettier-555?style=flat-square&logo=prettier&logoColor=fff)

</div>

## 🚀 Запуск

### Требования

Для успешного запуска проекта необходимо наличие cli-инструментов:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

или установленного:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Использование

1. Склонировать репозиторий
2. Перейти в папку проекта
3. Разместить дамп базы данных в папке `./Docker/db/` под именем `dump.sql` _(ЕСЛИ НЕОБХОДИМО)_
4. Создать собственный `.env` файл на основе `.env.example`
5. Выполнить команду `docker-compose up --build -d`
6. Продолжить разработку

Все данные для работы будут отображены в терминале.

## 📝 Дополнительно

Возможна работа без использования GraphQL в режиме REST API.

Проект уже содержит демо миграции и сиды для базы данных.

```bash
npm run migrate
npm run seed
```

### Также возможен запуск с локально установленной базой данных

(Но не желателен)

#### Режим разработки:

```bash
npm run server:watch
```

#### Режим сборки с последующим запуском:

```bash
npm run start
```
