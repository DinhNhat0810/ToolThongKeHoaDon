import { AxiosPromise } from "axios";
import https from "../src/libs/https";

// const url = import.meta.env.VITE_APP_BASE_URL_API_CA2;

export const laydlbaocao100 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <laydlbaocao100 xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </laydlbaocao100>
        </soap12:Body>
      </soap12:Envelope>
      `;

  return https({
    // baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};
