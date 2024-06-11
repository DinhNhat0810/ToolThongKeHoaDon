export const TKTD_300: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 300:",
    value: "Tong300",
  },
  {
    name: "Thông điệp nhận 999-300:",
    value: "Tong999",
  },
  {
    name: "Thông điệp nhận 301-300:",
    value: "Tong301",
  },

  {
    name: "Thông điệp nhận 204:",
    value: "Tong204",
  },
];

export const THIEU_DU_300: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 300 trả về -1:",
    value: "TD300_1",
  },
  {
    name: "Thông điệp 300 thiếu MLTDiep - 204:",
    value: "TD300_Thieu_204",
  },
  {
    name: "Thông điệp 300 thiếu MLTDiep - 301:",
    value: "TD300_Thieu_301",
  },
  {
    name: "Thông điệp 300 thiếu MLTDiep - 999:",
    value: "TD300_Thieu_999",
  },
  {
    name: "Lấy thông điệp thừa:",
    value: "TD300_Lay_thua_300",
  },
];

export type DataType300 = {
  key: string;
  ca2_tksl: {
    Tong300: number;
    Tong999: number;
    Tong301: number;
    Tong204: number;
  };
  ca2_thieu_du: {
    TD300_Thieu_204: {
      length: number;
      data: any[];
    };
    TD300_Thieu_301: {
      length: number;
      data: any[];
    };
    TD300_Thieu_999: {
      length: number;
      data: any[];
    };
    TD300_Lay_thua_300: {
      length: number;
      data: any[];
    };
    TD300_1: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong300: number;
    Tong999: number;
    Tong301: number;
    Tong204: number;
  };
  logigo_thieu_du: {
    TD300_Thieu_204: {
      length: number;
      data: any[];
    };
    TD300_Thieu_301: {
      length: number;
      data: any[];
    };
    TD300_Thieu_999: {
      length: number;
      data: any[];
    };
    TD300_Lay_thua_300: {
      length: number;
      data: any[];
    };
    TD300_1: {
      length: number;
      data: any[];
    };
  };
};

export const initialData300: any = {
  ca2_tksl: {
    Tong300: 0,
    Tong999: 0,
    Tong301: 0,
    Tong204: 0,
  },
  ca2_thieu_du: {
    TD300_Thieu_204: {
      length: 0,
      data: [],
    },
    TD300_Thieu_301: {
      length: 0,
      data: [],
    },
    TD300_Thieu_999: {
      length: 0,
      data: [],
    },
    TD300_Lay_thua_300: {
      length: 0,
      data: [],
    },
    TD300_1: {
      length: 0,
      data: [],
    },
  },
  logigo_tksl: {
    Tong300: 0,
    Tong999: 0,
    Tong301: 0,
    Tong204: 0,
  },
  logigo_thieu_du: {
    TD300_Thieu_204: {
      length: 0,
      data: [],
    },
    TD300_Thieu_301: {
      length: 0,
      data: [],
    },
    TD300_Thieu_999: {
      length: 0,
      data: [],
    },
    TD300_Lay_thua_300: {
      length: 0,
      data: [],
    },
    TD300_1: {
      length: 0,
      data: [],
    },
  },
};
