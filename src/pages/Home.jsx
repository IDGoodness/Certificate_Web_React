import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [ name, setName ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('name', name);
      navigate('/certificate');
    }

    
  return (
    <>
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg lg:w-fit lg:h-auto bg-white p-6 shadow-2xl rounded-xl">
            <h1 className="text-center text-3xl text-white p-5 rounded-t-xl bg-purple-950">Certificate Generator</h1>
            <form id="certificateForm" className="flex flex-col p-5" onSubmit={handleSubmit}>
                <div className="py-2">
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" required className="w-full rounded-xl p-2 pl-5 outline outline-1" />
                </div>
                <button type="submit" className="bg-purple-950 text-white p-3 my-5 rounded-full w-full hover:bg-purple-900">Generate Certificate</button>
            </form>
        </div>
      </div>
    
    
    </>
  )
}

export default Home