import Advertisement from "../models/advertisement-model.ts";
import { IAdvertisement, IChannel, IType } from "../interface/Advertisement.ts";
import { readJSON } from "../util/json-helper.ts";

class AdvertisementService {
  advertisements: Array<IAdvertisement> = [];
  channels: Array<IChannel> = [];
  types: Array<IType> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = () => {
    const advertiseJSON = readJSON("./data/advertisements.json");
    const adverts = Advertisement.fromJSON(advertiseJSON);
    this.advertisements = Object.values(adverts);
    this.channels = readJSON("./data/channels.json");
    this.types = readJSON("./data/types.json");
  };

  // returns all adverts active or not
  fetchAdvertisements = () => {
    return this.advertisements;
  };

  fetchAdvertisement = (id: string) => {
    const result = this.advertisements.find((advertisement) =>
      advertisement.id === id
    );
    return result;
  };

  createAdvertisement = (advertisement: IAdvertisement) => {
    const newAdvertisement = Object.values(advertisement);
    const [first] = newAdvertisement;
    this.advertisements.push(first);
    return this.advertisements;
  };

  updateAdvertisement = (advertisement: IAdvertisement, id: string) => {
    const updatedAdvertisement: {
      name?: string;
      description?: string;
      startDate?: string;
      endDate?: string;
      type?: Array<IType>;
      channel?: Array<IChannel>;
    } = advertisement;
    this.advertisements = this.advertisements.map((advert) =>
      advert.id === id ? { ...advert, ...updatedAdvertisement } : advert
    );

    return true;
  };

  deleteAdvertisement = (id: string) => {
    this.advertisements = this.advertisements.filter((advert) =>
      advert.id !== id
    );
    return this.advertisements;
  };

  publishAdvertisement = (
    id: string,
    startDate: string,
    endDate: string,
    isActive: boolean,
  ) => {
    if (this.validateDates(startDate, endDate)) {
      const publishData: IAdvertisement = {
        id,
        startDate,
        endDate,
        isActive,
      };
      return this.updateAdvertisement(publishData, id);
    }
  };

  validateDates = (startDate: string, endDate: string) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let currentDate = new Date();
    let startDateLessThanToday = start < currentDate;

    let sameDates = start.getTime() === end.getTime();
    if (sameDates) {
      throw new Error("Start and End dates cannot be same");
    }

    if (start < end) {
      throw new Error("Start date must be greater than end date");
    }

    if (startDateLessThanToday) {
      throw new Error("Start date must be greater than today");
    }

    return true;
  };
}

export default new AdvertisementService();
