![Deno](https://github.com/ieazie/advertisement-publisher-service/workflows/Deno/badge.svg?branch=master)

# advertisement-publisher-service
Advertisement Publisher Service with Typescript and Deno

## IDE 
Jetbrains Webstorm or Visual Studio Code could be used. To make Deno available in these environments:
* For Webstorm, install Deno plugin and enable it under Language & Frameworks (integration is seamless)
* For VsCode, install Deno extension from VsCode marketplace, then enable it by updating settings.json with:

```json
    {
        "deno.enable": true,
    }
```

## Starting the service
The entry class to the service is the server.ts, to run it, use the command below:

```shell
deno  run --allow-read  --allow-net --allow-env --unstable server.ts
```

## Running tests
In the project i have included a small test for the Advertisement Service class, run the tess with:

```shell
deno  run --allow-read  --allow-net --allow-env --unstable server.ts
```

## Reload dependencies
In order to reload dependencies should in case you update an existing package, run:

```shell
deno  cache -r --lock lock.json deps.ts
```