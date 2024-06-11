export const TKTD_303: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 303:",
    value: "Tong303",
  },
  {
    name: "Thông điệp nhận 999-303:",
    value: "Tongphanhoi999",
  },
  {
    name: "Thông điệp nhận 301-303:",
    value: "Tongphanhoi301",
  },
  {
    name: "Thông điệp nhận 204-303:",
    value: "Tongphanhoi204",
  },
];

export const THIEU_DU_303: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 303 trả về -1:",
    value: "TD303_1",
  },
  {
    name: "TĐ thiếu 301 hoặc 204 (không bao gồm TĐ -1):",
    value: "TD303_301_204",
  },
  {
    name: "Lấy thông điệp thừa:",
    value: "TD303_Lay_thua_303",
  },
  // {
  //   name: "TĐ thiếu 999 hoặc 204 hoặc 300 (không bao gồm TĐ -1):",
  //   value: "TD200_202_204_999",
  // },
];

export type DataType303 = {
  key: string;
  ca2_tksl: {
    Tong303: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
    Tongphanhoi301: number;
  };
  ca2_thieu_du: {
    TD303_1: {
      length: number;
      data: any[];
    };
    TD303_301_204: {
      length: number;
      data: any[];
    };
    TD303_Lay_thua_303: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong303: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
    Tongphanhoi301: number;
  };
  logigo_thieu_du: {
    TD303_1: {
      length: number;
      data: any[];
    };
    TD303_301_204: {
      length: number;
      data: any[];
    };
    TD303_Lay_thua_303: {
      length: number;
      data: any[];
    };
  };
};

export const initialData303: any = {
  ca2_tksl: {
    Tong303: 0,
    Tongphanhoi999: 0,
    Tongphanhoi204: 0,
    Tongphanhoi301: 0,
  },
  ca2_thieu_du: {
    TD303_1: {
      length: 0,
      data: [],
    },
    TD303_301_204: {
      length: 0,
      data: [],
    },
    TD303_Lay_thua_303: {
      length: 0,
      data: [],
    },
  },
  logigo_tksl: {
    Tong303: 0,
    Tongphanhoi999: 0,
    Tongphanhoi204: 0,
    Tongphanhoi301: 0,
  },
  logigo_thieu_du: {
    TD303_1: {
      length: 0,
      data: [],
    },
    TD303_301_204: {
      length: 0,
      data: [],
    },
    TD303_Lay_thua_303: {
      length: 0,
      data: [],
    },
  },
};
