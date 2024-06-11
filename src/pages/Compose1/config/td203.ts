export const TKTD_203: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 203:",
    value: "Tong203",
  },
  {
    name: "Thông điệp nhận 204-203:",
    value: "Tong204",
  },
  {
    name: "Thông điệp nhận: 999-203:",
    value: "Tong999",
  },
];

export const THIEU_DU_203: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 203 trả về -1:",
    value: "TD203_1",
  },
  {
    name: "Thông điệp 203 thừa:",
    value: "TD203_Thua",
  },
  {
    name: "Check TĐ thiếu 203-204:",
    value: "TD203_Thieu_204",
  },
  {
    name: "Check TĐ thiếu 203-999:",
    value: "TD203_Thieu_999",
  },
  {
    name: "Lấy thông điệp thừa:",
    value: "TD203_Lay_thua_203",
  },
];

export type DataType203 = {
  key: string;
  ca2_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
  };
  ca2_thieu_du: {
    TD200_1: {
      length: number;
      data: any[];
    };
    TD203_Thieu_204: {
      length: number;
      data: any[];
    };
    TD203_Thieu_999: {
      length: number;
      data: any[];
    };
    TD203_Lay_thua_203: {
      length: number;
      data: any[];
    };
    TD203_1: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
  };
  logigo_thieu_du: {
    TD200_1: {
      length: number;
      data: any[];
    };
    TD203_Thieu_204: {
      length: number;
      data: any[];
    };
    TD203_Thieu_999: {
      length: number;
      data: any[];
    };
    TD203_Lay_thua_203: {
      length: number;
      data: any[];
    };
    TD203_1: {
      length: number;
      data: any[];
    };
  };
};

export const initialData203: any = {
  ca2_tksl: {
    Tong203: 0,
    Tong999: 0,
    Tong204: 0,
  },
  ca2_thieu_du: {
    TD203_Thua: {
      length: 0,
      data: [],
    },
    TD203_Thieu_204: {
      length: 0,
      data: [],
    },
    TD203_Thieu_999: {
      length: 0,
      data: [],
    },
    TD203_Lay_thua_203: {
      length: 0,
      data: [],
    },
    TD203_1: {
      length: 0,
      data: [],
    },
  },
  logigo_tksl: {
    Tong203: 0,
    Tong999: 0,
    Tong204: 0,
  },
  logigo_thieu_du: {
    TD203_Thua: {
      length: 0,
      data: [],
    },
    TD203_Thieu_204: {
      length: 0,
      data: [],
    },
    TD203_Thieu_999: {
      length: 0,
      data: [],
    },
    TD203_Lay_thua_203: {
      length: 0,
      data: [],
    },
    TD203_1: {
      length: 0,
      data: [],
    },
  },
};
