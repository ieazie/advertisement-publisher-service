import { Application } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();
const port = 3000;

app.use(router.routes());

console.log(`Server running on port ${port}`);

await app.listen({ port });
