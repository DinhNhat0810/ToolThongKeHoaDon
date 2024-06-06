import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "antd";

// const data = [
//   ["", "CA2", "", "Logigo", ""],
//   ["", "TKSL", "Thiếu đủ", "TKSL", "Thiếu đủ"],
//   ["", "", "", "", ""],
//   [
//     "100",
//     "Thông điệp gửi 100: 0",
//     "Thông điệp nhận thiếu 103: 0",
//     "Thông điệp gửi 100: 0",
//     "Thông điệp nhận thiếu 103: 0",
//   ],
//   [
//     "",
//     "Thông điệp nhận 999: 0",
//     "Thông điệp nhận thiếu 102 hoặc 103: 0",
//     "Thông điệp nhận 999: 0",
//     "Thông điệp nhận thiếu 102 hoặc 103: 0",
//   ],
//   [
//     "",
//     "Thông điệp nhận 102: 0",
//     "Thông điệp nhận thiếu 102 hoặc 103 hoặc 999: 0",
//     "Thông điệp nhận 102: 0",
//     "Thông điệp nhận thiếu 102 hoặc 103 hoặc 999: 0",
//   ],
//   ["", "Thông điệp nhận 103: 0", "", "Thông điệp nhận 103: 0", ""],
//   [
//     "",
//     "Thông điệp nhận thiếu 102: 0",
//     "",
//     "Thông điệp nhận thiếu 102: 0",
//     "",
//   ],
//   [
//     "",
//     "Thông điệp nhận thiếu 999: 0",
//     "",
//     "Thông điệp nhận thiếu 999: 0",
//     "",
//   ],
//   ["", "", "", "", ""],
//   ["200", "Thông điệp gửi 200: 0", "TD 200 trả về -1: 0", "", ""],
//   [
//     "",
//     "Thông điệp nhận 999: 0",
//     "TD 200 không có 202 hoặc 204: 0",
//     "Thông điệp nhận 999: 0",
//     "TD 200 không có 202 hoặc 204: 0",
//   ],
//   [
//     "",
//     "Thông điệp nhận 204: 0",
//     "Check TD không trả về 999: 0",
//     "Thông điệp nhận 204: 0",
//     "Check TD không trả về 999: 0",
//   ],
//   [
//     "",
//     "Thông điệp thiếu 202/204-200: 0",
//     "Check TD thiếu 200 (không bao gồm TD -1): 0",
//     "Thông điệp thiếu 202/204-200: 0",
//     "Check TD thiếu 200 (không bao gồm TD -1): 0",
//   ],
//   [
//     "",
//     "Thông điệp thừa 202/204-200: 0",
//     "",
//     "Thông điệp thừa 202/204-200: 0",
//     "",
//   ],
//   ["", "", "", "", ""],
//   [
//     "203",
//     "Thông điệp gửi 203: 0",
//     "Thông điệp 203 thừa: 0",
//     "Thông điệp gửi 203: 0",
//     "Thông điệp 203 thừa: 0",
//   ],
//   [
//     "",
//     "Thông điệp nhận 204-203: 0",
//     "Check TD thiếu 203: 0",
//     "Thông điệp nhận 204-203: 0",
//     "Check TD thiếu 203: 0",
//   ],
//   ["", "Thông điệp nhận 999-203: 0", "", "Thông điệp nhận 999-203: 0", ""],
// ];

const ExcelExport = ({ data, fileName }: { data: any; fileName: string }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);

    worksheet["!cols"] = [
      { wch: 10 },
      { wch: 60 },
      { wch: 20 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
      { wch: 70 },
    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  };

  return <Button onClick={exportToExcel}>Xuất Excel</Button>;
};

export default ExcelExport;
