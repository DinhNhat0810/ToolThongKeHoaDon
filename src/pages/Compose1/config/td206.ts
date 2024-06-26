export const TKTD_206: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 206:",
    value: "Tong206",
  },
  {
    name: "Thông điệp gửi 999-206:",
    value: "Tongphanhoi999",
  },
  {
    name: "Thông điệp nhận 204-206:",
    value: "Tongphanhoi204",
  },
];

export const THIEU_DU_206: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 206 trả về -1:",
    value: "TD206_1",
  },
  {
    name: "TĐ thiếu 204-206 (không bao gồm TĐ -1):",
    value: "TD206_Thieu_204",
  },
  {
    name: "TĐ thiếu 999-206 (không bao gồm TĐ -1):",
    value: "TD206_Thieu_999",
  },
  {
    name: "Lấy thông điệp thừa:",
    value: "TD206_Lay_thua_206",
  },
];

export type DataType206 = {
  key: string;
  ca2_tksl: {
    Tong206: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
  };
  ca2_thieu_du: {
    TD206_1: {
      length: number;
      data: any[];
    };
    TD206_Thieu_204: {
      length: number;
      data: any[];
    };
    TD206_Thieu_999: {
      length: number;
      data: any[];
    };
    TD206_Lay_thua_206: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong206: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
  };
  logigo_thieu_du: {
    TD206_1: {
      length: number;
      data: any[];
    };
    TD206_Thieu_204: {
      length: number;
      data: any[];
    };
    TD206_Thieu_999: {
      length: number;
      data: any[];
    };
    TD206_Lay_thua_206: {
      length: number;
      data: any[];
    };
  };
};

export const initialData206: any = {
  ca2_tksl: {
    Tong206: 0,
    Tongphanhoi999: 0,
    Tongphanhoi204: 0,
  },
  ca2_thieu_du: {
    TD206_1: {
      length: 0,
      data: [],
    },
    TD206_Thieu_204: {
      length: 0,
      data: [],
    },
    TD206_Thieu_999: {
      length: 0,
      data: [],
    },
    TD206_Lay_thua_206: {
      length: 0,
      data: [],
    },
  },
  logigo_tksl: {
    Tong206: 0,
    Tongphanhoi999: 0,
    Tongphanhoi204: 0,
  },
  logigo_thieu_du: {
    TD206_1: {
      length: 0,
      data: [],
    },
    TD206_Thieu_204: {
      length: 0,
      data: [],
    },
    TD206_Thieu_999: {
      length: 0,
      data: [],
    },
    TD206_Lay_thua_206: {
      length: 0,
      data: [],
    },
  },
};
