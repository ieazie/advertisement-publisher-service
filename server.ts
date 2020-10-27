import { Application } from "./deps.ts";
import router from "./routes.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || "localhost";

const app = new Application();
app.use(router.routes());

console.log(`Server running on port ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
