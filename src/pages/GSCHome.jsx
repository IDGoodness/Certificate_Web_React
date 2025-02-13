import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GSCHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    date: "",
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
    navigate("/gsccert");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ml-[150px] ">
      <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
        <h1 className="text-center text-3xl text-white p-5 rounded-t-xl bg-purple-500 ">
          Certificate Generator
        </h1>
        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
          <div className="">
            <div className="py-2 mr-1 ">
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
            <div className="py-2 mr-1 ">
              <input
                type="text"
                id="date"
                value={formData.date}
                onChange={handleChange}
                name="date"
                placeholder="'14th February'"
                required
                className="w-full rounded-xl p-3 pl-5 outline outline-1 hover:outline-purple-800"
              />
            </div>
            <div className="py-2 mr-1 ">
              <textarea
                type="text"
                id="desc"
                value={formData.desc}
                onChange={handleChange}
                name="desc"
                placeholder="Description"
                required
                className="w-full h-[150px] rounded-xl p-3 pl-5 outline outline-1 hover:outline-purple-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-purple-500 text-white p-3 my-5 rounded-full w-full hover:bg-purple-600"
          >
            Generate Certificate
          </button>
        </form>
      </div>
    </div>
  );
};

export default GSCHome;