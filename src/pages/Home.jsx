import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ginsti.png";


const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = formData.name.trim().toLowerCase();
    const certificateGenerated = localStorage.getItem(
      `certificateGenerated_${userName}`
    );

    if (certificateGenerated) {
      alert("You have already generated a certificate.");
      return;
    }

    Object.keys(formData).forEach((key) => {
      localStorage.setItem(key, formData[key]);
    });

    localStorage.setItem(`certificateGenerated_${userName}`, "true");
    navigate("/certificate");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
        <h1 className="flex justify-center ">
          <img src={logo} alt="Logo" className="w-24" />
        </h1>
        <p className="text-center text-3xl font-mono " >Cohort 4.0</p>
        <form id="certificateForm" className="p-2" onSubmit={handleSubmit}>
          <div className="">
            <div className="py-2 text-black ">
              <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" placeholder="Name" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800 text-black " />
            </div>

            <div className="py-2 relative">
              <select name="course" id="course" value={formData.course} onChange={handleChange} placeholder="Course" className="w-full rounded-xl p-2 pl-3 outline outline-1 appearance-none hover:outline-purple-800 transition-colors duration-200 ">
                <option value="" disabled>
                  Course
                </option>
                <option value="Human Microbe">Human Microbe</option>
                <option value="Epidemology & Metagenomics">
                  Epidemology & Metagenomics
                </option>
                <option value="Plant Genomics">Plant Genomics</option>
                <option value="Cancer Genomics">Cancer Genomics</option>
                <option value="Prostate Cancer">Prostate Cancer</option>
                <option value="Antimicrobial Research">
                  Antimicrobial Research
                </option>
                <option value="Virulence Research">
                  Virulence Research
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-950 text-white p-3 my-5 rounded-xl w-full hover:bg-purple-900"
          >
            Generate Certificate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;