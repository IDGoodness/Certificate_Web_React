import { useEffect, useState } from "react"
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/sign2.png';
import award from '../assets/award.png';
import genomac from '../assets/genomac.png';
import barcode from '../assets/barcode.png';
import gihub from '../assets/gihub.png';

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
    <div className="flex items-center justify-center min-h-screen">
      <div id="certificateContent" className="flex border-2 lg:h-[600px] lg:w-[1100px] mx-auto text-center">
        <div className="bg-purple-900 lg:w-[210px] lg:h-[600px]">
          <div className="flex justify-normal " >
            <img src={genomac} alt="logo" className="w-20" />
            <p>
              <img src={gihub} alt="logo2" className="w-20" />
            </p>
          </div>
        </div>
        <div className="lg:w-[800px]">
          <div className="bg-white lg:w-[850px] lg:h-[600px] lg:ml-4 lg:p-10">
            <div className="p-5 bg-purple-900 text-white text-4xl tracking-widest ">
              CERTIFICATE OF PARTICIPATION
            </div>

            <div className="font-bold lg:mx-[200px] lg:mt-5 italic">
              This Certificate is Presented to:
            </div>

            <div id="name" className="border-b-4 border-purple-900 pb-1 text-purple-900 lg:mx-[100px] lg:mt-[70px] text-5xl">
              {name}
            </div>

            <p className="py-3 pr-1 text-center">
              For Successfully Participating in the International Virtual Bio-coding Workshop on Mastering Python and R for Basic to Advance Genomics and Bioinformatics with NGS Research Applications Organized by Genomac Institute Inc.
            </p>

            <p className="font-bold mx-auto border-2 border-slate-500 lg:w-[310px] shadow-2xl shadow-slate-600">
              4TH NOVEMBER - 6TH DECEMBER 2024
            </p>

            <div className="flex pt-10 relative">
              <p className="relative -left-20 bottom-24">
                <img src={barcode} alt="Barcode" className="w-[400px]"/>
              </p>

              <p className="relative -left-40 bottom-[72px] w-[295px]">
                <div className="border-b-2 border-blue-700">
                  <img src={sign1} alt="signature" className="w-[200px] h-[200px] -mb-16"/>
                </div>
                <p className="text-left">Oluwaseyi Abraham Olawale <br/> Founder & CEO of Genomac Institute Inc. </p>
              </p>

              <p className="relative -left-20 bottom-[8px]">
                <div className="border-b-2 border-blue-700">
                  <img src={sign1} alt="signature" className="w-[100px]"/>
                </div>
                <p>Aderinto Abraham <br/> Director of G-iHub </p>
              </p>

              <p className="relative" >
                <img src={award} alt="award" className="w-[400px]"/>
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 hidden">
        <button id="downloadImage" className="mr-4">Download as Image</button>
        <button id="downloadPDF">Download as PDF</button>
      </div>
    </div>
  </>
  )
}

export default Certificate
