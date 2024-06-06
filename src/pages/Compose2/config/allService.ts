export const TKTBHT: {
  name: string;
  value: string;
}[] = [
  {
    name: "Tìm TĐ thuế trả về theo MTDTChieu và ngày:",
    value: "TD_thongdiepthuetrave_theongay",
  },
  {
    name: "Check số lần TĐ thuế trả về (Nhập từ ngày đến ngày và MLTDiepxet):",
    value: "TD_sothongdiepthuetrave",
  },
  {
    name: "Tìm TĐ thuế trả về theo Mã TĐ tham chiếu:",
    value: "TD_sobaocaothongdiep2024_MTDTChieu",
  },
  {
    name: "Check TĐ gửi lên thuế cấp mã mấy lần theo MST:",
    value: "TD_sobaocaothongdiep2024",
  },

  {
    name: "Tìm TĐ thiếu trong log và đẩy về DB:",
    value: "TD_soAQuetFile_MTDTChieu",
  },
];

export type DataTypeTKTBHT = {
  subKey: string;
  ca2: {
    thongdiepthuetrave_theongay: number;
    sothongdiepthuetrave: number;
    sobaocaothongdiep2024_MTDTChieu: number;
    sobaocaothongdiep2024: number;
    soAQuetFile_MTDTChieu: number;
  };

  logigo: {
    thongdiepthuetrave_theongay: number;
    sothongdiepthuetrave: number;
    sobaocaothongdiep2024_MTDTChieu: number;
    sobaocaothongdiep2024: number;
    soAQuetFile_MTDTChieu: number;
  };
};
