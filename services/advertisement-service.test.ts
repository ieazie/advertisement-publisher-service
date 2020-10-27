import { expect, Logger } from "../deps.ts";
import Service from "./base/service.ts";
import AdvertisementService from "./advertisement-service.ts";
import { readJSON } from "../util/json-helper.ts";
import Advertisement from "../models/advertisement-model.ts";
import { IAdvertisement } from "../interfaces/Advertisement.ts";

Deno.test("should be an instance of Service", () => {
  const advertisementService = makeAdvertisementService();
  expect(advertisementService instanceof Service).toBe(true);
});

Deno.test('the method "fetchAdvertisements"', () => {
  const advertisementService = makeAdvertisementService();
  expect(advertisementService.fetchAdvertisements()).toEqual(
    makeAdvertisementData(),
  );
});

Deno.test('the method "fetchAdvertisement"', () => {
  const advertisementService = makeAdvertisementService();
  const adId = "1";
  const result = makeAdvertisementData().filter((
    advertisements: { id: string },
  ) => advertisements.id === adId);
  expect(advertisementService.fetchAdvertisement(adId)).toEqual(result);
});

Deno.test('the method "createAdvertisement"', () => {
  const advertisementService = makeAdvertisementService();
  const newAdvert = Advertisement.fromJSON(makeNewAdvertisementData());
  expect(advertisementService.createAdvertisement(newAdvert)).toEqual(
    advertisementService.advertisements,
  );
});

Deno.test('the method "updateAdvertisement"', () => {
  const advertisementService = makeAdvertisementService();
  const data: IAdvertisement = {
    id: "1",
    name: "Apple iPhone 10",
  };
  expect(advertisementService.updateAdvertisement(data)).toEqual(
    advertisementService.advertisements,
  );
});

Deno.test('the method "publishAdvertisement"', () => {
  const advertisementService = makeAdvertisementService();
  const id = "1";
  const startDate = "2020-01-20T07:06:50.792Z";
  const isActive = true;

  const sameDates = () => {
    const endDate = "2020-01-20T07:06:50.792Z";
    advertisementService.publishAdvertisement(id, startDate, endDate, isActive);
  };
  expect(sameDates).toThrow("Start and End dates cannot be same");

  const startDateGreaterThanEndDate = () => {
    const endDate = "2020-01-22T23:41:56.046Z";
    advertisementService.publishAdvertisement(id, startDate, endDate, isActive);
  };
  expect(startDateGreaterThanEndDate).toThrow(
    "Start date must be greater than end date",
  );

  // const startDateLessThanToday = () => {
  //   const endDate = "2020-01-22T23:41:56.046Z";
  //   advertisementService.publishAdvertisement(id, startDate, endDate, isActive);
  // };
  // expect(startDateLessThanToday).toThrow(
  //   "Start date must be greater than today",
  // );
});

const makeAdvertisementService = () => new AdvertisementService(new Logger());

const makeAdvertisementData = () => readJSON("./mocks/advertisements.json");

const makeNewAdvertisementData = () =>
  `[
    {
      "id": "6",
      "name": "Apple iPhone 12",
      "description": "Music",
      "startDate": "2019-09-17T01:08:48.106Z",
      "endDate": "2021-01-20T18:25:17.045Z",
      "isActive": true,
      "type": [
        {
          "id": "MIlWST",
          "name": "Politics"
        },
        {
          "id": "Ma2muv",
          "name": "Education"
        }
      ],
      "channel": [
        {
          "id": "OWpStu",
          "name": "Instagram"
        },
        {
          "id": "EyUwHg",
          "name": "Facebook"
        }
      ]
    }
  ]`;
