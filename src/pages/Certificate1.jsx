import gihub from '../assets/gihub.png';
import { useEffect, useState, useCallback, useRef } from "react";
import { toPng } from 'html-to-image';
import sign1 from '../assets/sign1.png';
import award from '../assets/award.png';
import sign2 from '../assets/sign2.png';
import fabric from '../assets/fabric.jpg';

const Certificate1 = () => {

    const ref = useRef(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
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
            alert('An error occurred while generating your certificate. Please try again.')
          })
      }, [ref])


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
      <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
        <div
          ref={ref}
          className="flex flex-col justify-center items-center bg-white relative"
        >
          <div className="bg-white border border-1 w-[1000px] h-[600px] flex">
            <div className="relative borde border-orange-500  ">
              <div
                className="absolute inset-0 bg-center opacity-15 "
                style={{ backgroundImage: `url(${gihub})` }}
              ></div>

              <div className="w-[40px] absolute top-[40px] ">
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-r-2 border-orange-500 h-[24px] w-[40px] "
                />
              </div>

              <div className="w-[40px] flex flex-col absolute right-0 top-[40px] ">
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-l-2 border-orange-500 h-[24px] w-[40px] "
                />
              </div>

              <div className="w-[40px] flex absolute top-0 ">
                <img src={gihub} alt="" />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-b-2 border-orange-500"
                />
                <img src={gihub} alt="" />
              </div>

              <div className="w-[40px] flex absolute bottom-0 ">
                <img src={gihub} alt="" className="" />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img
                  src={fabric}
                  alt=""
                  className="border-t-2 border-orange-500"
                />
                <img src={gihub} alt="" className="" />
              </div>

              {/* <div className="bg-orange-200 h-[600px] w-[50px]  "></div> */}

              <div className="w-[px] mx-10 ">
                <div className="flex justify-center mt-7 ">
                  <img
                    src={gihub}
                    alt="logo"
                    className="w-[100px] h-[100px] "
                  />
                </div>

                <div className="text-center text-3xl uppercase -mt-7 ">
                  Certificate of participation
                </div>
                <p className="text-center text-base font-bold italic ">
                  This certificate is awarded to:
                </p>

                <div className="py-10 mt-3 ">
                  <div className="text-center text-3xl border-b-2 border-orange-600 mx-52 -mt-5 font-rouge ">
                    {formData.name}
                  </div>

                  <div className="text-center mx-10 mt-3 text-lg ">
                    <p>For the participation in the short course:</p>

                    <p className="uppercase font-bold text-lg ">
                      how to build your first machine learning model without
                      coding
                    </p>

                    <p className="text-base ">
                      This is to certify the successful participation in this
                      program and the fulfillment of all its requirements. The
                      recipient demonstrated dedication and commitment and
                      acquired a wealth of knowledge and skills through the
                      program. May this serve as a testament to their hard work
                      and future success.
                    </p>
                  </div>

                  <div className="text-center uppercase mt-2 font-bold text-lg ">
                    21st march 2025
                  </div>
                </div>

                <div className="flex justify-around mx-10 -mt-20 ">
                  <div className="w-[400px] ">
                    <div className="border-b-2 border-orange-600 w-52">
                      <img
                        src={sign1}
                        alt="signature"
                        className="w-[200px] h-[150px] -mb-10"
                      />
                    </div>
                    <p className="font-semibold text-lg">
                      Oluwaseyi Abraham Olawale
                    </p>
                    <p className="font-medium text-sm">
                      Founder & CEO of Genomac Holdings.
                    </p>
                  </div>

                  <div className="-mt-[40px] -ml-[300px] ">
                    <img src={award} alt="award" className="w-[400px] " />
                  </div>

                  <div className="mt-[33px] ">
                    <div className="border-b-2 border-orange-600 w-40">
                      <img
                        src={sign2}
                        alt="signature"
                        className="w-[200px] h-[100px] -mb-5"
                      />
                    </div>
                    <p className="font-semibold text-lg ">Abraham Oluwaseun Adeyemi</p>
                    <p className="font-medium text-sm">Director, G-iHUb.</p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-orange-200 h-[600px] w-[50px]  "></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center  ">
        <button
          className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500"
          onClick={onButtonClick}
        >
          Download Certificate
        </button>
      </div>
    </>
  );
}

export default Certificate1
