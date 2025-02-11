import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../assets/gnatureslogo1.png';
import glogo from '../assets/genomac.png';
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/signNatures.png';
import award from '../assets/award1.png';
import { toPng } from 'html-to-image';


const Ginsti = () => {

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
                <div className='relative w-[1000px] h-[600px] border border-green-500 flex ' >
                    <div className='absolute inset-0 bg bg-center opacity-15' style={{ backgroundImage: `url(${logo})` }} ></div>

                    <div className='flex flex-col mx-auto' >
                        <div className='flex text-center mx-auto' >
                            <p className='mr-2' ><img src={glogo} alt="logo" className='w-[80px] ' /></p>
                            <p className='w-[1px] h-[50px] bg-green-600 mt-4 ' ></p>
                            <p className='ml-4 mt-5 w-[100px] ' ><img src={logo} alt="logo" className=' ' /></p>                            
                        </div>

                        <div className='text-center mx-auto' >
                            <p className='uppercase font-semibold text-4xl ' >certificate of participation</p>
                            <p className='text-center italic font-bold ' >this is to certify that:</p>
                        </div>

                        <div className=' text-center mx-auto pt-10 pb-10 bg-green-900 text-white mt-5 ' >
                            <p className='text-3xl font-bold  ' > {formData.name} </p>
                            <p className='mx-28 pt-3' > {formData.desc} </p>
                            <p className='font-bold uppercase' > {formData.date}, 2025</p>
                        </div>

                        <div className='flex justify-around mx-20 -mt-12 ' >
                            <div className=' ' >
                                <p className='border-b-2 border-green-800 w-40 ' >
                                    <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10 ' />
                                </p>
                                <p className='text-base font-semibold' >
                                    Oluwaseyi Abraham Olawale
                                </p>
                                <p className='text-xs font-medium' >
                                    Founder & CEO of Genomac Institute INC.
                                </p>
                            </div>

                            <div className='w-[100px] mt-14 -ml-10 ' >
                                <img src={award} alt="award" />
                            </div>

                            <div className='mt-2 ' >
                                <p className='border-b-2 border-green-800 w-52 ' >
                                    <img src={sign2} alt="signature" className='w-[200px] h-[150px] -mb-12 ' />
                                </p>
                                <p className='text-base font-semibold' >
                                    Oluwaseyi Praise Ayomide
                                </p>
                                <p className='text-xs font-medium' >
                                    Director, G-Natures
                                </p>
                            </div>
                        </div>

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

export default Ginsti