import { ICoronaService } from "./ICoronaService";
import { HttpClient } from "@microsoft/sp-http";
import { ICoronaInfo, ICountryCode } from "../models/ICoronaInfo";

export class CoronaService implements ICoronaService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async getCountryInfo(countryCode: string): Promise<ICoronaInfo> {
    const response = await this.httpClient.get(
      `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${countryCode}&onlyCountries=true`,
      HttpClient.configurations.v1
    );

    if (!response.ok) {
      const error = await response.text();
      console.log(error);
      throw Error(`Error while fetching the data for country with code '${countryCode}'`);
    }

    const result: ICoronaInfo[] = await response.json();

    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }
}
