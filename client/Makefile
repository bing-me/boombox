build:
	docker build -t react-app-dev .

build-local:
	docker build \
		-t react-app-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:3001/api \
		-f Dockerfile.production .

build-production:
	docker build \
		-t react-app-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://mern.mysuperawesomesite.com/api \
		-f Dockerfile.production .
