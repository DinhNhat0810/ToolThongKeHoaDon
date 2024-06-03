import { TableProps } from "antd";

export const columnsModal0: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã thông điệp",
    dataIndex: "mtdiep",
  },
  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
];

export const columnsModal1: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã thông điệp",
    dataIndex: "mtdiep",
  },
  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
  {
    title: "Khoá phiên",
    dataIndex: "khoaphien",
  },
];

export const columnsModal2: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "MTDTChieu",
    dataIndex: "MTDTChieu",
  },
  {
    title: "MLTDiep",
    dataIndex: "MLTDiep",
  },
  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
  {
    title: "Khoá phiên",
    dataIndex: "khoaphien",
  },
  {
    title: "XML Thông điệp",
    dataIndex: "XMLThongdiep",
    render: (text: string) => {
      return (
        <div className="line-clamp-400-2">
          <p>{text}</p>
        </div>
      );
    },
  },
];

export const columnsModal3: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Column1",
    dataIndex: "Column1",
  },
  {
    title: "Mã thông điệp",
    dataIndex: "mltdiep",
  },
  {
    title: "MTDTChieu",
    dataIndex: "MTDTChieu",
  },
];

export const columnsModal4: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Tổng loại TD phản hồi",
    dataIndex: "TongLoaiTDPhanhoi",
  },
  {
    title: "MTDTChieu",
    dataIndex: "MTDTChieu",
  },
  {
    title: "Khóa phiên",
    dataIndex: "khoaphien",
  },
];

export const columnsModal5: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Tổng loại TD phản hồi",
    dataIndex: "TongLoaiTDPhanhoi",
  },
  {
    title: "MTDTChieu",
    dataIndex: "MTDTChieu",
  },
];