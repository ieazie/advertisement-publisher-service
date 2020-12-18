import {Application} from "./deps.ts";
import router from "./routes.ts";
import fourZeroFour from "./middleware/404.ts";
import errorHandler from "./middleware/error-handler.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || "localhost";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(fourZeroFour);
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);
