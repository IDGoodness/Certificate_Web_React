import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/ginsti.png";



const GinstiHome4 = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.keys(formData).forEach((key) => {
        localStorage.setItem(key, formData[key]);
    });
    navigate("/ginsti4");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ml-[150px]">
        <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
            <h1 className="flex justify-center ">
                <img src={logo} alt="Logo" className='w-24' />
            </h1>
            <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
                <div className="">
                    <h3 className='text-xs text-center italic ' >
                        Enter your name below <br /> to generate certificate your certificate.
                    </h3>
                    <div className="py-5 mr-1 ">
                        <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full rounded-xl p-3 pl-5 outline outline-1 hover:outline-purple-800"
                        />
                    </div>
                </div>

                <button
                type="submit"
                className="bg-purple-900 text-white p-3 my-1 rounded-xl w-full hover:bg-purple-800"
                >
                Generate Certificate
                </button>
            </form>
        </div>
    </div>
  );
};

export default GinstiHome4;