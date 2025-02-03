import gihub from '../assets/gihub.png';
import { useEffect, useState } from "react";
import sign1 from '../assets/sign1.png';
import award from '../assets/award.png';

const Certificate1 = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        startTime: '',
        endTime: '',
        certType: '',
        desc: '',
    })

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedStartTime = localStorage.getItem('startTime');
        const storedEndTime = localStorage.getItem('endTime');
        const storedCertType = localStorage.getItem('certType');
        const storedDesc = localStorage.getItem('desc');

        setFormData ({
            name: storedName || '',
            startTime: storedStartTime || '',
            endTime: storedEndTime || '',
            certType: storedCertType || '',
            desc: storedDesc || '',
        })
    }, [])



  return (
    <>
    
        <div className="flex flex-col justify-center items-center min-h-screen " >
            <div className="bg-white border border-1 w-[1200px] h-[700px] flex" >

                <div className='bg-orange-200 h-[700px]  ' >
                                    
                </div>

                <div>
                    <div className='flex justify-center -mt-10 ' >
                        <img src={gihub} alt="logo" className='w-[250px] h-[250px] ' />
                    </div>

                    <div className='text-center text-5xl uppercase -mt-16 ' >
                        Certificate of {formData.certType}

                    </div>
                    <p className='text-center text-base font-bold italic ' >
                        This is to certify that:
                    </p>

                    <div className='py-10 mt-10 ' >
                        <div className='text-center text-5xl font-bold border-b-2 border-orange-600 mx-40 -mt-5 ' >
                            {formData.name}
                        </div>

                        <div className='text-center mx-10 mt-5 text-lg ' >
                            {formData.desc}
                        </div>

                        <div className='text-center uppercase mt-2 font-medium text-lg ' >
                            {formData.startTime} - {formData.endTime} 2025
                        </div>

                    </div>

                    <div className='flex justify-between mx-10 -mt-10 ' >
                        <div className='w-[400px] ' >
                            <div className='border-b-2 border-orange-600 w-52' >
                                <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10'/>
                            </div>
                            <p className='font-semibold text-lg' >Oluwaseyi Abraham Olawale</p>
                            <p className='font-medium text-sm' >Founder & CEO of Genomac Institute INC.</p>
                        </div>

                        <div className='-mt-[70px] -ml-[300px] ' >
                            <img src={award} alt="award" className='w-[500px] ' />
                        </div>

                        <div>
                            <div className='border-b-2 border-orange-600 w-40' >
                                <img src={sign1} alt="signature" className='w-[200px] h-[150px] -mb-10'/>
                            </div>
                            <p className='font-semibold text-lg ' >Aderinto Adeyemi</p>
                            <p className='font-medium text-sm' >Director, G-iHUb.</p>
                        </div>
                    </div>
                </div>



            </div>
            
        </div>
    
    
    </>
  )
}

export default Certificate1