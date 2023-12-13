docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog8-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog8-java/app ../../..
