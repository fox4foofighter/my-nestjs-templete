app := myapp-app

build:
	docker compose build

rebuild:
	docker compose build --no-cache

up:
	docker compose up -d

down:
	docker compose down

start: 
	$(MAKE) build
	$(MAKE) up

restart: 
	$(MAKE) down
	$(MAKE) rebuild
	$(MAKE) up

bash:
	docker exec -it $(app) bash
