import { AxiosPromise } from "axios";
import https from "../libs/https";

const url = import.meta.env.VITE_APP_BASE_URL_API_CA2;

export const laydlbaocao100CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  console.log(startDate, endDate);

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
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao100_Thieu102CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao100_Thieu102 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao100_Thieu102>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao100_Thieu999CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao100_Thieu999 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao100_Thieu999>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao100_Thieu103CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao100_Thieu103 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao100_Thieu103>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao100_Thieu102or103CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao100_Thieu102or103  xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao100_Thieu102or103>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao100_Thieu102or103or999CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao100_Thieu102or103or999 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao100_Thieu102or103or999>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const laydlbaocao200CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao200 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao200>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};

export const Laythongdiep200thieu_MTDiepCA2 = async (
  startDate: string,
  endDate: string,
  MLTDiep: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <Laythongdiep200thieu_MTDiep xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
      <MLTDiep>${MLTDiep}</MLTDiep>
    </Laythongdiep200thieu_MTDiep>
  </soap12:Body>
</soap12:Envelope>
      `;

  return https({
    baseURL: url,
    method: "post",
    data: soapEnvelope,
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });
};
