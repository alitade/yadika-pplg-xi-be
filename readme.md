## Memulai


1. copy file .env.example > .env dan isi paramater di .env
```Bash
$ cp .env.example .env
$ nano .env
```

2. install library node
```bash
$ npm install  
```
3. Migrate & seeder table 

```bash
$ npx knex migrate:latest
$ npx knex seed:run
```
----
_note:_

membuat migrate & seeder
```bash
$ npx knex migrate:make [nama file migrate]
$ npx knex seed:make [nama file seeder]
```

menampilkan command-command knex
```bash
$ npx knex help
```


