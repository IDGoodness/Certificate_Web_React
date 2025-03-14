import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import gihub from "../assets/gihub.png";

const GIHUB_Biocoding = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [allowedNames, setAllowedNames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNamesFromExcel = async () => {
      try {
        const response = await fetch("/2025 final biocoding.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const names = data.flat().map((name) =>
          name.toString().trim().replace(/[^a-zA-Z0-9 -]/g, "").toLowerCase()
        );
        setAllowedNames(names);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    };

    fetchNamesFromExcel();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputName = formData.name.trim().toLowerCase();
    if (allowedNames.includes(inputName)) {
      Object.keys(formData).forEach((key) => {
        localStorage.setItem(key, formData[key]);
      });
      navigate("/biocodingcert");
    } else {
      navigate("/notallowed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
        <h1 className="text-center text-3xl text-white p-5 rounded-t-xl h-[60px] bg-orange-600">
          <img src={gihub} alt="Logo" className="w-[100px] h-[100px] mx-auto -mt-9" />
        </h1>
        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
          <div>
            <p className="font-medium py-1">Enter your name to generate your certificate</p>
            <div className="py-5">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl p-3 pl-5 outline outline-1 hover:outline-orange-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white p-3 my-5 rounded-full w-full hover:bg-orange-700"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default GIHUB_Biocoding;