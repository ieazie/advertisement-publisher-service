import {IAdvertisement, IChannel, IType} from "../interface/Advertisement.ts";

class Advertisement implements IAdvertisement {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
    type: Array<IType>;
    channel: Array<IChannel>;

    constructor(id: string,
                name: string,
                description: string,
                startDate: string,
                endDate: string,
                isActive: boolean,
                type: Array<IType>,
                channel: Array<IChannel>
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isActive = isActive;
        this.type = type;
        this.channel = channel;
    }

    toJSON(): IAdvertisement {
        return Object.assign({}, this);
    }

    static fromJSON(json: IAdvertisement | string): Advertisement {
        if (typeof json === "string") {
            return JSON.parse(json, Advertisement.reviver);
        }
        let advertisement = Object.create(Advertisement.prototype);
        return Object.assign(advertisement, json);
    }

    static reviver(key: string, value: any): any {
        return key === "" ? Advertisement.fromJSON(value) : value;
    }
}

export default Advertisement;
