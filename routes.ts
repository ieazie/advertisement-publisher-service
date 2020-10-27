import {Router} from './deps';
import AdvertisementController from "./controllers/advertisement-controller.ts";

const router = new Router();

const controller = AdvertisementController.makeAdvertisementController();

router.get("/api/v1/advertisements", controller.getAdvertisements())
      .get("/api/v1/advertisements/:id", controller.getAdvertisement())
      .post("/api/v1/advertisements", controller.addAdvertisement())
      .put("/api/vi/advertisements/:id", controller.updateAdvertisement())
      .put("/api/v1/advertisements/publish", controller.publishAdvertisement())
      .delete("/api/v1/advertisements/:id", controller.deleteAdvertisement())

export default router;
