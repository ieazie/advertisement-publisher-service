deno_build:
			@deno fmt
			# @deno lint --unstable
			@deno  run --allow-read  --allow-net --allow-env --unstable server.ts
deno_reload_deps:
			@deno  cache -r --lock lock.json deps.ts
deno_run_advertisement_service_test:
			@deno  test --allow-net --allow-read --allow-env  services/advertisement-service.test.ts


