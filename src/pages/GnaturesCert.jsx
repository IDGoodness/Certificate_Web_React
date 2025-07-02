import { useEffect, useState, useCallback, useRef } from 'react';
import logo from '../assets/gnatureslogo1.png';
import glogo from "../assets/genomac.png"
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/signNatures.png';
import award from '../assets/award1.png';
import { toPng } from 'html-to-image';





const GnaturesCert = () => {

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null ) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-certificate.png'
        link.href = dataUrl
        link.click()
      })
      .catch(() => {
        alert("An error occurred while generating your certificate. Please try again.")
      })
  }, [ref])



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

        <div ref={ref} className='flex flex-col justify-center items-center bg-white ' >
          <div className=' relative w-[1000px] h-[600px] border-[1px] border-green-900 flex' >
            <p className='w-[71px] h-[598px] ml-10 bg-green-800 ' ></p>

            <div className="absolute inset-0 bg-center opacity-15"
              style={{ backgroundImage: `url(${logo})` }}>
            </div>

            <div className='flex flex-col p-5 mx-auto w-[930px] ' >
              <div className='flex justify-center -mt-5' >
                <p className='' >
                  <img src={glogo} alt="logo" className='w-[100px] ' />
                </p>
                <p className='mt-5 ' >
                  <img src={logo} alt="logo" className='w-[150px] ' />
                </p>
              </div>
              <p className='text-4xl font-semibold uppercase mx-auto -mt-1 ' >
                Certificate of Completion
              </p>
              <p className='text-center italic font-bold' >This is to certify that:</p>
              <p className='text-3xl text-center mt-[40px] mx-40 font-serif text-green-950 ' >
                  {formData.name}
              </p>

              <p className='capitalize text-[16px] mx-14 mt-5 text-center ' >
                {formData.desc}
              </p>

              <p className='uppercase font-bold text-[20px] text-center text-green-950 ' >
                {formData.date}, 2025
              </p>

              <div className='flex justify-around -mt-12 ' >
                <div className=' ' >
                  <p className='border-b-2 border-green-800 w-52 ' >
                    <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10 ' />
                  </p>
                  <p className='text-lg font-semibold' >
                    Oluwaseyi Abraham Olawale
                  </p>
                  <p className='text-sm font-medium' >
                    Founder & CEO of Genomac Holdings.
                  </p>
                </div>

                <div className='w-[100px] mt-14 -ml-10 ' >
                  <img src={award} alt="alt" />
                </div>

                <div className='mt-2 ' >
                  <p className='border-b-2 border-green-800 w-52 ' >
                    <img src={sign2} alt="signature" className='w-[200px] h-[150px] -mb-12 ' />
                  </p>
                  <p className='text-lg font-semibold' >
                    Oluwaseyi Praise Ayomide
                  </p>
                  <p className='text-sm font-medium' >
                    Director, G-Natures
                  </p>
                </div>

              </div>

              <div className='bg-green-800 w-[1000px] h-[30px] -ml-[89px] mt-[20px] ' ></div>

            </div>

          </div>
        </div>
      </div>

      <div className='flex justify-center -mt-9' >
        <button className='bg-green-600 p-2 rounded-xl hover:bg-green-700 text-white' onClick={onButtonClick} >
          Download Certificate
        </button>
      </div>

    
    </>
  )
}

export default GnaturesCert