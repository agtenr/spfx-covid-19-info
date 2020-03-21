import { ICoronaInfo } from "../models/ICoronaInfo";

export interface ICoronaService {
  getCountryInfo(countryCode: string): Promise<ICoronaInfo>;
}
