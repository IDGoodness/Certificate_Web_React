import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowDropDown } from "react-icons/md";
// import Select from 'react-select';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    certType: '',
    startTime: '',
    endTime: '',
    dName: '',
    sub: '',
    signature: '',
    desc: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, signature: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.keys(formData).forEach(key => {
      localStorage.setItem(key, formData[key]);
    });
    navigate('/certificate');
  };

  // const options = [
  //   { value: 'Gi-Hub', label: 'Gi-Hub' },
  //   { value: 'G-Natures', label: 'G-Natures' },
  //   { value: 'Other', label: 'Other' },
  // ];

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionChange = (selected) => {
  //   setSelectedOption(selected);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
        <h1 className="text-center text-3xl text-white p-5 rounded-t-xl bg-purple-950">Certificate Generator</h1>
        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>

          <div className='grid grid-cols-3' >
            <div className="py-2 mr-1 ">
              <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" placeholder="Graduant Name" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2">
              <input type="text" id="certType" value={formData.certType} onChange={handleChange} name="certType" placeholder="Certificate Type" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2 ml-1">
              <input type="text" id="startTime" value={formData.startTime} onChange={handleChange} name="startTime" placeholder="Start Time" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2 mr-1">
              <input type="text" id="endTime" value={formData.endTime} onChange={handleChange} name="endTime" placeholder="End Time" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2">
              <input type="text" id="dName" value={formData.dName} onChange={handleChange} name="dName" placeholder="Director Name" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2 ml-1 relative">
              <select name="sub" id="sub" value={formData.sub} onChange={handleChange} placeholder="Subsidiary" className='w-full h-10 rounded-xl pl-3 outline outline-1 appearance-none hover:outline-purple-800 transition-colors duration-200 ' >
                <option value="" disabled>Subsidiary</option>
                <option value="Gi-Hub" className=' appearance-none hover:bg-' >Gi-Hub</option>
                <option value="Gi-Hub">Gi-Hub</option>
                <option value="G-Natures">G-Natures</option>
                <option value="Gi-Hub">Gi-Hub</option>
              </select>
              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 hover:text-purple-500 transition-colors duration-200 hover:scale-110">
                <MdOutlineArrowDropDown className="h-6 w-6" />
              </div>
            </div>

            {/* <div className="py-2 ml-1">
              <div className="w-full h-10 bg-white pl-1 outline outline-1 rounded-xl">
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={handleOptionChange}
                  placeholder="Select Subsidiary"
                  className=" h-10"
                  classNamePrefix=""
                />
              </div>
            </div> */}
          </div>

          <div className='' >
            <div className="py-2">
              <input type="file" id="signature" onChange={handleFileChange} name="signature" required className="w-full rounded-xl p-2 pl-5 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2">
              <textarea id="desc" value={formData.desc} onChange={handleChange} name="desc" placeholder="Description" required className="w-full h-40 rounded-xl p-2 pl-5 outline outline-1 hover:outline-purple-800" />
            </div>
          </div>

          <button type="submit" className="bg-purple-950 text-white p-3 my-5 rounded-full w-full hover:bg-purple-900">Generate Certificate</button>
        </form>
      </div>
    </div>
  );
}

export default Home;