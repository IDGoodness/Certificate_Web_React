import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [ name, setName ] = useState('');
    const [ certType, setCertType ] = useState('');
    const [ startTime, setStartTime ] = useState('');
    const [ endTime, setEndTime ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('name', name);
      localStorage.setItem('certType', certType);
      localStorage.setItem('startTime', startTime);
      localStorage.setItem('endTime', endTime);
      navigate('/certificate');
    }

    
  return (
    <>
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
            <h1 className="text-center text-3xl text-white p-5 rounded-t-xl bg-purple-950">Certificate Generator</h1>
            <form id="certificateForm" className="flex flex-col p-5" onSubmit={handleSubmit}>
                <div className="py-2 flex flex-col">
                    <label htmlFor="name" className='pl-1 py-2' >Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" required className="w-full rounded-xl p-2 pl-5 outline outline-1" />
                    <label htmlFor="certType" className='pl-1 py-2' >Certificate Type</label>
                    <input type="text" id="" value={certType} onChange={(e) => setCertType(e.target.value)} name="certType" placeholder="Certificate of ___?" required className="w-full rounded-xl p-2 pl-5 outline outline-1" />
                    <label htmlFor="startDate" className='pl-1 py-2' >Start Date</label>
                    <input type="date" id="" value={startTime} onChange={(e) => setStartTime(e.target.value)} name="startTime" className="w-full rounded-xl p-2 pl-5 outline outline-1" />
                    <label htmlFor="endDate" className='pl-1 py-2' >End Date</label>
                    <input type="date" id="" value={endTime} onChange={(e) => setEndTime(e.target.value)} name="endTime" className="w-full rounded-xl p-2 pl-5 outline outline-1" />
                </div>
                <button type="submit" className="bg-purple-950 text-white p-3 my-5 rounded-full w-full hover:bg-purple-900">Generate Certificate</button>
            </form>
        </div>
      </div>
    
    
    </>
  )
}

export default Home