import { expect, Logger } from "../deps.ts";
import Service from "./base/service.ts";
import AdvertisementService from "./advertisement-service.ts";

Deno.test("should be an instance of Service", () => {
  const logger = new Logger();
  const advertisementService = new AdvertisementService(logger);
  expect(advertisementService instanceof Service).toBe(true);
});

Deno.test('the method "createAdvertisement"', () => {
});

Deno.test('the method "updateAdvertisement"', () => {
});
