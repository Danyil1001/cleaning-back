NODE_ENV=production
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=new_password
DB_NAME=cleaning
pm2 start dist/src/main.js