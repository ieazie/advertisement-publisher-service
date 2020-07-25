deno_build:
			@deno fmt
			# @deno lint --unstable
			@deno  run --allow-read  --allow-net  --unstable server.ts
deno_reload_deps:
			@deno cache --reload deps.ts


