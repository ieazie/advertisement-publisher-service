import { Router } from "./deps.ts";
import {
  getAdvertisements,
  getAdvertisement,
  addAdvertisement,
  updateAdvertisement,
  publishAdvertisement,
  deleteAdvertisement,
} from "./controllers/advertisement-controller.ts";

const router = new Router();

router.get("/api/v1/advertisements", getAdvertisements)
  .get("/api/v1/advertisements/:id", getAdvertisement)
  .post("/api/v1/advertisements", addAdvertisement)
  .put("/api/vi/advertisements/:id", updateAdvertisement)
  .put("/api/v1/advertisements/publish", publishAdvertisement)
  .delete("/api/v1/advertisements/:id", deleteAdvertisement);

export default router;
