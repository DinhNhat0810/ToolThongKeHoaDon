import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "antd";

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
