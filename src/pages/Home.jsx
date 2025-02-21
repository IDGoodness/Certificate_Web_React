import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    // startMonth: '',
    // endMonth: '',
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

                <option value="Cancer Genomics: To conduct comprehensive genomic profiling and variant analysis across various cancer cell lines." className=' appearance-none hover:bg-' >Cancer Genomics</option>

                <option value="Plant Genomics: To investigate the genetic variants in plants that contribute to stress resistance, aiming to understand the molecular mechanisms and evolutionary adaptations that enhance plant resilience under environmental stress conditions.">Plant Genomics</option>

                <option value="Virulence Genomics: To study the distribution, prevalence, and genomic characteristics of virulence factors in clinical pathogens across diverse geographical regions.">Virulence Genomics</option>

                <option value="Infectious Disease: Understanding the genetic mechanisms underlying multidrug resistance pathogens and comparing strains from clinical, food, or environmental sources.">Infectious Disease</option>

                <option value="Nutri Genomics: To explore the genomic foundations of probiotic strains, identifying and understanding the functional genes associated to their nutritional and industrial benefits.">Nutri Genomics</option>

                <option value="Anti Bacteria R&D: To innovate a comprehensive methodology by leveraging multi-omics datasets and advanced machine learning algorithms to systematically identify, enhance, and develop new therapeutic antibacterial peptides derived from various natural sources.">Anti Bacteria R&D</option>

                <option value="Anti Cancer R&D: To systematically identify and utilize biosynthetic genes from natural sources, employing multi-omics data and machine learning techniques to develop peptide-based anti-cancer therapeutics to improve precision and efficacy in cancer treatment.">Anti Cancer R&D</option>

              </select>
            </div>

            {/* <div className="py-2 mr-1">
              <input type="text" id="startMonth" value={formData.startTime} onChange={handleChange} name="startMonth" placeholder="Start Month" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div>

            <div className="py-2 ml-1">
              <input type="text" id="endMonth" value={formData.endTime} onChange={handleChange} name="endMonth" placeholder="End Month" required className="w-full rounded-xl p-2 pl-3 outline outline-1 hover:outline-purple-800" />
            </div> */}

          </div>
          <button type="submit" className="bg-purple-950 text-white p-3 my-5 rounded-full w-full hover:bg-purple-900">Generate Certificate</button>
        </form>
      </div>
    </div>
  );
}

export default Home;