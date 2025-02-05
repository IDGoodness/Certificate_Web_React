import { useEffect, useState } from 'react';
import logo from '../assets/gnatureslogo1.png';
// import logo1 from '../assets/glogo.jpg';
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/signNatures.png';





const GnaturesCert = () => {



  const [ formData, setFormData ] = useState({
    name: '',
    date: '',
    desc: '',
  })

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedDate = localStorage.getItem('date');
    const storedDesc = localStorage.getItem('desc');

    setFormData ({
      name: storedName || '',
      date: storedDate || '',
      desc: storedDesc || '', 
    })
  }, [])




  return (
    <>

      <div className='min-w-[1000px] flex justify-center items-center min-h-screen ' >

        <div className='flex flex-col justify-center items-center ' >
          <div className='w-[1000px] h-[600px] border flex' >
            <div className='bg-0 w-[200px]  ' >
              <p className='p-5 pl-10' >
                <img src={logo} alt="logo" className='w-[150px] ' />
              </p>
            </div>

            <div className='flex flex-col p-5 mx-auto w-[800px] ' >
              <p className='text-4xl font-semibold uppercase mx-auto ' >
                Certificate of Participation
              </p>
              <p className='text-3xl text-center mt-[70px] mx-40 border-b-2 border-green-800 ' >
                  {formData.name}
              </p>

              <p className='capitalize text-[16px] mx-10 mt-5 text-left ' >
                {formData.desc}
              </p>

              <p className='uppercase font-bold text-center' >
                {formData.date}, 2025
              </p>

              <div className='flex justify-between' >
                <div className='w-[400px] ' >
                  <p className='border-b-2 border-green-800 w-52 ' >
                    <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10 ' />
                  </p>
                  <p className='text-lg font-semibold' >
                    Oluwaseyi Abraham Olawale
                  </p>
                  <p className='text-sm font-medium' >
                    Founder & CEO of Genomac Institute INC.
                  </p>
                </div>

                <div className='w-[400px] ' >
                  <p className='border-b-2 border-green-800 w-52 ' >
                    <img src={sign2} alt="signature" className='w-[200px] h-[150px] -mb-10 ' />
                  </p>
                  <p className='text-lg font-semibold' >
                    Oluwaseyi Praise Ayomide
                  </p>
                  <p className='text-sm font-medium' >
                    Director, G-Natures
                  </p>
                </div>


              </div>

              <div className='bg-green-400 w-[1000px] -ml-[220px] h-[600px] p-[65px] hidden ' >
                
              </div>

            </div>





          </div>
        </div>


      </div>

    
    </>
  )
}

export default GnaturesCert