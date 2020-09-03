import { Logger, Router } from "./deps.ts";
import AdvertisementService from "./services/advertisement-service.ts";

const router = new Router();

const logger = new Logger();
const adService = new AdvertisementService(logger);

const helloworld = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    msg: "Hello World",
  };
};

router.get("/api/v1/hello", helloworld);

export default router;
