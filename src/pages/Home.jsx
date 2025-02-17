import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    startMonth: '',
    endMonth: '',
    course: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.keys(formData).forEach(key => {
      localStorage.setItem(key, formData[key]);
    });
    navigate('/certificate');
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
        <h1 className="text-center text-3xl text-white p-5 rounded-t-xl bg-purple-950">Certificate Generator</h1>
        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>

          <div className='grid grid-cols-2' >
            <div className="py-2 mr-1 ">
              <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" placeholder="Graduant Name" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>
            
            <div className="py-2 ml-1 relative">
              <select name="course" id="course" value={formData.course} onChange={handleChange} placeholder="Course" className='w-full h-10 rounded-xl pl-3 outline outline-1 appearance-none hover:outline-purple-800 transition-colors duration-200 ' >
                <option value="" disabled>Course</option>
                <option value="Cancer Genomic" className=' appearance-none hover:bg-' >Cancer Genomics</option>
                <option value="Plant Genomics">Plant Genomics</option>
                <option value="Virulence Genomics">Virulence Genomics</option>
                <option value="Infectious Disease">Infectious Disease</option>
                <option value="Nutri Genomics">Nutri Genomics</option>
                <option value="Anti Bacteria R&D">Anti Bacteria R&D</option>
                <option value="Anti Cancer R&D">Anti Cancer R&D</option>
              </select>
            </div>

            <div className="py-2 mr-1">
              <input type="text" id="startMonth" value={formData.startTime} onChange={handleChange} name="startMonth" placeholder="Start Month" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2 ml-1">
              <input type="text" id="endMonth" value={formData.endTime} onChange={handleChange} name="endMonth" placeholder="End Month" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

          </div>
          <button type="submit" className="bg-purple-950 text-white p-3 my-5 rounded-full w-full hover:bg-purple-900">Generate Certificate</button>
        </form>
      </div>
    </div>
  );
}

export default Home;