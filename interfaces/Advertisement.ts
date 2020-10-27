export interface IAdvertisement {
  id: string;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  type?: Array<IType>;
  channel?: Array<IChannel>;
}

export interface IChannel {
  id: string;
  name: string;
}

export interface IType {
  id: string;
  name: string;
}
