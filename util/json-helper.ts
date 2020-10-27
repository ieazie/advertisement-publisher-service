export const readJSON = (file: string) =>
  JSON.parse(Deno.readTextFileSync(file));
