import Logger from "https://deno.land/x/logger@v1.0.0/logger.ts";

import Service from "./base/service.ts";
import Advertisement from "../models/advertisement-model.ts";
import { IAdvertisement } from "../interfaces/Advertisement.ts";
import AdvertisementRepository from "../repositories/advertisement-repository.ts";

class AdvertisementService extends Service {
  logger: Logger;

  constructor(logger: Logger) {
    super(logger);
    this.logger = logger;
  }

  fetchAdvertisements = () => {
    // let json: any;
    // json = JSON.parse(
    //   Deno.readTextFileSync("../mocks/advertisement.json"),
    // );
    // return Advertisement.fromJSON(json);
    /*
       return this.buildAdvertisementList();
      */
  };

  fetchAdvertisement = (id: string) =>
    AdvertisementService.buildAdvertisementList().filter(
      (advertisement) => advertisement.id === id,
    );

  createAdvertisement = (advertisement: IAdvertisement) => {};

  updateAdvertisement = (advertisement: IAdvertisement) => {};

  publishAdvertisement = (
    startDate: Date,
    endDate: Date,
    isActive: boolean,
  ) => {
    this.logger.info("First Publication achieved");
  };

  private static buildAdvertisementList() {
    const advertisement = AdvertisementRepository.makeAdvertisementRepository()
      .advertisementList.map(
        (Advertisement) => ({
          id: Advertisement.id,
          name: Advertisement.name,
          description: Advertisement.description,
          startDate: Advertisement.startDate,
          endDate: Advertisement.endDate,
          type: Advertisement.type,
          channel: Advertisement.channel,
        }),
      );
    return advertisement;
  }
}

export default AdvertisementService;
