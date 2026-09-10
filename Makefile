config/jwtRS256.key:
	mkdir -p config
	openssl genrsa -out config/jwtRS256.key 2048
	openssl rsa -in config/jwtRS256.key -pubout -out config/jwtRS256.key.pub

keys: config/jwtRS256.key

up: keys
	docker compose pull --quiet
	docker compose up -d

seeds:
	docker compose up -d --force-recreate --no-deps build-seeds-init
	docker compose up -d --force-recreate --no-deps devbox

stop:
	docker compose stop

down:
	docker compose down
