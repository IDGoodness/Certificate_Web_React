import { useEffect, useState } from "react"
import sign1 from '../assets/sign1.jpg';
import sign2 from '../assets/sign2.jpg';
import award from '../assets/award.jpg';
import genomac from '../assets/genomac.jpg';
import barcode from '../assets/barcode.jpg';
import gihub from '../assets/gihub.jpg';



const Certificate = () => {

    const [name, setName] = useState('');

    useEffect(() => {
      const storedName = localStorage.getItem('name');
      if (storedName) {
        setName(storedName);
        }
    }, []);



  return (
    <>
    
      <div className="items-center">
        <div id="certificateContent" className="flex border-2 lg:h-[600px] lg:w-[px] mx-auto text-center" >
            <div className="bg-purple-900 lg:w-[200px] lg:h-[600px] " >
                
            </div>
            <div className="lg:w-[800px]" >
                <div className="bg-white lg:w-[785px] lg:h-[600px] lg:ml-4 lg:p-10" >
                    <div className="p-5 bg-purple-900 text-white text-4xl" >
                        CERTIFICATE OF PARTICIPATION
                    </div>

                    <div className="font-bold lg:mx-[200px] lg:mt-5 italic" >
                        This Certificate is Presented to:
                    </div>

                    <div id="name" className="underline text-purple-900 lg:mx-[100px] lg:mt-[70px] text-5xl " >
                      {name}
                    </div>
                    <p className="py-5 pr-1 text-center " >
                        For Successfully Participating in the International Virtual Bio-coding Workshop on Mastering Python and R for Basic to Advance Genomics and Bioinformatics with NGS Research Applications Organized by Genomac Institute Inc.
                    </p>
                    <p className="font-bold mx-auto border-2 border-slate-500 lg:w-[310px] shadow-2xl shadow-slate-600 " >
                        4TH NOVEMBER - 6TH DECEMBER 2024
                    </p>

                    <div className="flex justify-between pt-20" >
                      <p>
                        <img src={barcode} alt="Barcode" className="w-[100px] " />
                      </p>
                      <p>
                        <div className="underline">
                          <img src={sign1} alt="signature" className="w-[100px] " />
                        </div>
                        <p>Oluwaseyi Abraham Olawale <br /> Founder & CEO of Genomac Institute Inc. </p>
                      </p>
                      <p>
                        <div className="underline">signature 2</div>
                        <p>Aderinto Abraham <br /> Director of G-iHub </p>
                      </p>
                      <p>award</p>
                    </div>
                </div>
            </div>

        </div>





        <div className="mt-20">
            <button id="downloadImage">Download as Image</button>
            <button id="downloadPDF">Download as PDF</button>
        </div>
      </div>
    
    </>
  )
}

export default Certificate