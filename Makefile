build-store:
	yarn workspace @woodshop/backend build && \
	yarn workspace @woodshop/admin build && \
	docker-compose build backend admin

run-store:
	docker-compose up postgres redis admin

build-run-store:
	make build-store && make run-store