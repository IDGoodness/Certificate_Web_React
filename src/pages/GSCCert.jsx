import { useCallback, useEffect, useRef, useState } from 'react'
import glogo from '../assets/genomac.png';
import logo from '../assets/gsclogo.png';
import award from '../assets/ribbon3.png';
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/gscsignature.png';
import { toPng } from 'html-to-image';
import ribbon from '../assets/ribbon2.png';

const GSCCert = () => {

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null){
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
                <div className='relative w-[1000px] h-[600px] border border-purple-500 flex ' >
                    <div className='absolute inset-0 bg bg-center opacity-5' style={{ backgroundImage: `url(${logo})` }} ></div>

                    <div className='flex flex-col mx-auto' >
                        <div className='flex text-center justify-between ' >
                            <p className='ml-10 mt-3 w-[100px] ' ><img src={glogo} alt="logo" className=' ' /></p>
                            <p className='mr-10 mt-3 w-[100px] ' ><img src={logo} alt="logo" className=' ' /></p>                            
                        </div>

                        <div className='text-center mx-auto -mt-[70px]  ' >
                            <p className='uppercase font-semibold text-4xl  ' >certificate of participation</p>
                            <p className='text-center italic font-bold pt-2 ' >this is to certify that:</p>
                        </div>

                        <div className=' text-center mx-auto pt-10 pb-10 text-black w-[1000px] h-[200px] mt-10 bg-purple-800 ' >
                            <div className='bg-white w-[800px] -mt-[40px] h-[200px] mx-auto ' >
                                <p className='text-3xl font-bold pt-10 border-b-2 border-purple-800 mx-24 font-serif ' > {formData.name} </p>
                                <p className='mx-auto pt-3 px-10 capitalize text-lg font-semibold ' > Successfully Participated in the Genomics and Bioinformatics Webinar on genomic data handling, bioinformatics workflow design and career opportunities for industry and academia organized by GENOMAC Services and Consult. </p>
                                <p className='font-extrabold uppercase ' > March 8 2025</p>
                            </div>
                        </div>

                        <div className='flex justify-around mx-20 -mt-5 ' >
                            <div className=' ' >
                                <p className='border-b-2 border-purple-800 w-[200px] ' >
                                    <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10 ' />
                                </p>
                                <p className='text-base font-semibold' >
                                    Oluwaseyi Abraham Olawale
                                </p>
                                <p className='text-xs font-medium' >
                                    Founder & CEO of Genomac Holdings.
                                </p>
                            </div>

                            <div className='w-[170px] mt-5 -ml-10 ' >
                                <img src={award} alt="award" />
                            </div>

                            <div className=' ' >
                                <p className='border-b-2 border-purple-800 w-52 ' >
                                    <img src={sign2} alt="signature" className='w-[200px] h-[150px] -mb-12 ' />
                                </p>
                                <p className='text-base font-semibold' >
                                    Stephen Akanbi
                                </p>
                                <p className='text-xs font-medium' >
                                    Director, Genomac Services and Consults.
                                </p>
                            </div>
                        </div>

                        <div className='mx-auto -mt-10 ' >
                            <img src={ribbon} alt="ribbon" className='w-[700px] h-[100px]' />
                        </div>

                    </div>
                </div>

            </div>
        </div>





        <div className='flex justify-center -mt-9' >
            <button className='bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white' onClick={onButtonClick} >
            Download Certificate
            </button>
        </div>
    
    
    </>
  )
}

export default GSCCert