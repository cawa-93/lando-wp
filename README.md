## Запуск
https://lando.dev/
```
lando start
```

За бажанням імпортувати тестову базу з файла
```
lando db-import ./db-dump.sql.gz
```

## Камені
Немає JSON schema для конфігурації
https://github.com/lando/lando/issues/2242

Непонятки з правами. Створив папку в home а потім не зміг отримати до неї доступ. Просить доступ в ~/.ssh

Права на файли в папці запуску міняються.

Якісь конфлікти з docker desktop.
https://github.com/lando/lando/issues/3439

Допомогло перемкнути docker builder з `desktop-linux` на `default` та налаштування максимальних прав для `~/.lando`
