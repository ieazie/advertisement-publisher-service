import { faker } from "../deps.ts";
import { IAdvertisement } from "../interfaces/Advertisement.ts";
import Advertisement from "../models/advertisement-model.ts";
import TypeRepository from "./type-repository.ts";
import ChannelRepository from "./channel-repository.ts";

class AdvertisementRepository {
  advertisementList: Array<IAdvertisement>;

  constructor(advertisementList: Array<IAdvertisement>) {
    this.advertisementList = advertisementList;
  }

  static makeAdvertisementRepository() {
    const adverts = new AdvertisementRepository(
      this.generateFakeAdvertisementData(),
    );
    return adverts;
  }

  static generateFakeAdvertisementData(): Array<IAdvertisement> {
    let advertList: Array<IAdvertisement> = [];
    for (let i = 0; i < 5; i++) {
      const id = i + 1;
      const advert = new Advertisement(
        id.toString(),
        faker.commerce.productName(),
        faker.commerce.department(),
        faker.date.past(),
        faker.date.future(),
        TypeRepository.makeTypeRepository().typeList.splice(
          Math.floor(Math.random() * 3),
          2,
        ),
        ChannelRepository.makeChannelRepository().channelList.splice(
          Math.floor(Math.random() * 3),
          2,
        ),
      );
      advertList.push(advert);
    }
    return advertList;
  }
}

export default AdvertisementRepository;
