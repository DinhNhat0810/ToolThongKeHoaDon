import { AxiosPromise } from "axios";
import https from "../libs/https";

const url = import.meta.env.VITE_APP_BASE_URL_API_CA2;

export const laydlbaocao100CA2 = async (
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

export const laydlbaocaothongdiep2024_200_tru1CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_200_tru1 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_200_tru1>
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

export const laydlbaocaothongdiep2024_200_Khongco202or204CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_200_Khongco202or204 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_200_Khongco202or204>
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

export const laydlbaocaothongdiep2024_200_Khongco999CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_200_Khongco999 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_200_Khongco999>
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

export const laydlbaocao203CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao203 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao203>
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

export const laydlbaocao203_ThuaCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao203_Thua xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao203_Thua>
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

export const Laythongdiep203thieu_MTDiepCA2 = async (
  startDate: string,
  endDate: string,
  MLTDiep: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <Laythongdiep203thieu_MTDiep xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
      <MLTDiep>${MLTDiep}</MLTDiep>
    </Laythongdiep203thieu_MTDiep>
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

export const laydlbaocao206CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiepMTT2024 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiepMTT2024>
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

export const laydlbaocaothongdiepMTT2024_tru1CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiepMTT2024_tru1 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiepMTT2024_tru1>
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

export const laydlbaocaothongdiepMTT2024_ThieuCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiepMTT2024_Thieu  xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiepMTT2024_Thieu>
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

export const laydlbaocao300CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao300 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao300>
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

export const laydlbaocao300_Thieu301or204CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao300_Thieu301or204 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao300_Thieu301or204>
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

export const laydlbaocao300_Thieu999or204or301CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao300_Thieu999or204or301 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao300_Thieu999or204or301>
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

export const laydlbaocaothongdiep2024_303CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_303 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_303>
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

export const laydlbaocaothongdiep2024_303_ThieuCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_303_Thieu  xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_303_Thieu>
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

export const laydlbaocaothongdiep2024_303_tru1CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_303_tru1 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocaothongdiep2024_303_tru1>
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

export const laydlbaocao400CA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao400 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao400>
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

export const laydlbaocao400_204thieuCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao400_204thieu  xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao400_204thieu>
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

export const laydlbaocao400_999thieuCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao400_999thieu xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao400_999thieu>
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

export const laydlbaocao400_204thuaCA2 = async (
  startDate: string,
  endDate: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao400_204thua xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
    </laydlbaocao400_204thua>
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

//All
export const laydlbaocao2024_thongdiepthuetraveCA2 = async (
  startDate: string,
  MTDTChieu: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao2024_thongdiepthuetrave xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <MTDTChieu>${MTDTChieu}</MTDTChieu>
    </laydlbaocao2024_thongdiepthuetrave>
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

export const laydlbaocao2024_sothongdiepthuetraveCA2 = async (
  startDate: string,
  endDate: string,
  MLTDiepxet: string,
  SLThongdiepxet: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocao2024_sothongdiepthuetrave xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
      <SLThongdiepxet>${SLThongdiepxet}</SLThongdiepxet>
      <MLTDiepxet>${MLTDiepxet}</MLTDiepxet>
    </laydlbaocao2024_sothongdiepthuetrave>
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

export const laydlbaocaothongdiep2024_MTDTChieuCA2 = async (
  MTDTChieu: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024_MTDTChieu xmlns="http://tempuri.org/">
    <MTDTChieu>${MTDTChieu}</MTDTChieu>
    </laydlbaocaothongdiep2024_MTDTChieu>
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

export const laydlbaocaothongdiep2024CA2 = async (
  startDate: string,
  endDate: string,
  MST: string,
  KHMSHDon: string,
  KHHDon: string,
  SHDon: string,
  HDMTTien: number
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <laydlbaocaothongdiep2024 xmlns="http://tempuri.org/">
      <tungay>${startDate}</tungay>
      <denngay>${endDate}</denngay>
      <MST>${MST}</MST>
      <KHMSHDon>${KHMSHDon}</KHMSHDon>
      <KHHDon>${KHHDon}</KHHDon>
      <SHDon>${SHDon}</SHDon>
      <HDMTTien>${HDMTTien}</HDMTTien>
    </laydlbaocaothongdiep2024>
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

export const AQuetFile_MTDTChieuCA2 = async (
  Thoigian: string,
  MTDTChieu: string
): AxiosPromise<ResponseType> => {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <AQuetFile_MTDTChieu xmlns="http://tempuri.org/">
      <Thoigian>${Thoigian}</Thoigian>
      <MTDTChieu>${MTDTChieu}</MTDTChieu>
    </AQuetFile_MTDTChieu>
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
