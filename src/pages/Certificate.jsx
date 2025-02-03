import { useEffect, useState, useRef } from "react"
import sign1 from '../assets/sign1.png';
// import sign2 from '../assets/sign2.png';
import award from '../assets/award.png';
import genomac from '../assets/genomac.png';
import barcode from '../assets/barcode.png';
import gihub from '../assets/gihub.png';
import usa from '../assets/usa.png';
import nig from '../assets/nig.png';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Certificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    certType: '',
    startTime: '',
    endTime: '',
    dName: '',
    sub: '',
    signature: '',
    desc: '',
  });

  const [isMobile, setIsMobile] = useState(false);
  const downloadImageButtonRef = useRef(null);
  const downloadPDFButtonRef = useRef(null);

  useEffect(() => {
    // Load form data from localStorage
    const storedName = localStorage.getItem('name');
    const storedCertType = localStorage.getItem('certType');
    const storedStartTime = localStorage.getItem('startTime');
    const storedEndTime = localStorage.getItem('endTime');
    const storedDName = localStorage.getItem('dName');
    const storedSub = localStorage.getItem('sub');
    const storedSignature = localStorage.getItem('signature');
    const storedDesc = localStorage.getItem('desc');

    setFormData({
      name: storedName || '',
      certType: storedCertType || '',
      startTime: storedStartTime || '',
      endTime: storedEndTime || '',
      dName: storedDName || '',
      sub: storedSub || '',
      signature: storedSignature || '',
      desc: storedDesc || '',
    });

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Add event listeners for download buttons
    const downloadImageButton = downloadImageButtonRef.current;
    const downloadPDFButton = downloadPDFButtonRef.current;

    const handleDownloadImage = () => {
      const certificateContent = document.getElementById('certificateContent');
      if (certificateContent) {
        // Wait for all images to load
        Promise.all(
          Array.from(certificateContent.querySelectorAll('img')).map(
            (img) =>
              new Promise((resolve) => {
                if (img.complete) resolve();
                else img.onload = resolve;
              })
          )
        ).then(() => {
          html2canvas(certificateContent, { scale: 2 }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'certificate.png';
            link.href = canvas.toDataURL();
            link.click();
          });
        });
      }
    };

    const handleDownloadPDF = () => {
      const certificateContent = document.getElementById('certificateContent');
      if (certificateContent) {
        // Wait for all images to load
        Promise.all(
          Array.from(certificateContent.querySelectorAll('img')).map(
            (img) =>
              new Promise((resolve) => {
                if (img.complete) resolve();
                else img.onload = resolve;
              })
          )
        ).then(() => {
          html2canvas(certificateContent, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('certificate.pdf');
          });
        });
      }
    };

    if (downloadImageButton) {
      downloadImageButton.addEventListener('click', handleDownloadImage);
    }

    if (downloadPDFButton) {
      downloadPDFButton.addEventListener('click', handleDownloadPDF);
    }

    // Cleanup event listeners
    return () => {
      if (downloadImageButton) {
        downloadImageButton.removeEventListener('click', handleDownloadImage);
      }
      if (downloadPDFButton) {
        downloadPDFButton.removeEventListener('click', handleDownloadPDF);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold">Please Switch to Desktop Mode</h1>
          <p className="mt-2">This page is best viewed on a desktop device.</p>
        </div>
      </div>
    );
  }

  return (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div id="certificateContent" className="flex border-2 lg:h-[650px] lg:w-[1100px] mx-auto text-center " style={{ width: '1100px', height: '650px' }}>
        <div className="bg-purple-900 lg:w-[210px] lg:h-[648px] ">
          <div className="flex absolute pt-2" >
            <div className="p-5 relative top-1 ml-4" >
              <img src={genomac} alt="logo" className="w-20" />
            </div>
            <div className="p-2 relative right-[65px] " >
              <img src={gihub} alt="logo2" className="w-28" />
            </div>
          </div>
          <div className="mt-[100px] " >
            <p className="text-white text-[13px] " >
              GENOMAC INSTITUTE INC
            </p>
            <p className="text-yellow-500 font-thin text-[8px]  " >
              ...discovering new things, improving life
            </p>
          </div>


          <div className="text-white text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left mt-[100px] " >
            <p>
              This certificate is issued by Genomac Institute Inc. a registered research institution in the United States of America.
            </p>
            <p>
              Registration Number : 3844801
            </p>
          </div>

          <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left " >
            <div className="bg-white w-fit p-1 m-2 mx-auto flex items-center font-medium" >
              <span className="-ml-5 mr-1" ><img src={usa} alt="usa" className="w-6" /></span>
              USA Office Address
            </div>
            <p className="text-white" >
              The corporation&apos;s registered office in the state of Delaware is located at 16192 coastal highway, lewes, Delware 19958, county of Sussex
            </p>
          </div>

          <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left " >
            <div className="bg-white w-fit p-1 m-2 flex items-center mx-auto font-medium " >
              <span className="-ml-5 mr-1" ><img src={nig} alt="nig" className="w-6" /></span>
              NIG Office Address
            </div>
            <p className="text-white" >
              Genomac Holdings, beside Alari Akata Filling Station, Unde-G, Ogbomoso, Oyo State, Nigeria.
            </p>
          </div>


        </div>

        <div className="lg:w-[800px]">
          <div className="bg-white lg:w-[850px] lg:h-[600px] lg:ml-4 lg:p-10">
            <div className="p-5 bg-purple-900 text-white text-4xl tracking-widest uppercase ">
              CERTIFICATE OF {formData.certType}
            </div>

            <div className="font-bold lg:mx-[200px] lg:mt-5 italic">
              This Certificate is Presented to:
            </div>

            <div id="name" className=" capitalize border-b-4 border-purple-900 pb-1 text-purple-900 mx-[70px] mt-[70px] text-5xl">
              {formData.name}
            </div>

            <p className=" capitalize py-4 pr-1 text-center font-semibold ">
              
              {formData.desc}
              
              {/* For Successfully Participating in the International Virtual Bio-coding Workshop on Mastering Python and R for Basic to Advance Genomics and Bioinformatics with NGS Research Applications Organized by Genomac Institute Inc. */}
            </p>

            <p className="font-bold mx-auto border-2 border-slate-500 lg:w-[310px] shadow-2xl shadow-slate-600 uppercase ">
              {formData.startTime} - {formData.endTime} 2025
            </p>

            <div className="absolute flex bottom- " >
              <div className="w-[400px] -ml-[160px] -mb-[200px] " >
                <img src={barcode} alt="barcode" />
              </div>

              <div className="w-[300px] text-left  -ml-[120px] " >
                <div className="border-b-2 border-blue-700 " >
                  <img src={sign1} alt="signature" className="-mb-16 " />
                </div>

                <div>
                  <p>Oluwaseyi Abraham Olawale</p>
                  <p>Founder & CEO of Genomac Institute INC.</p>
                </div>
              </div>


              <div className="w-[140px] text-left  ml-20 mt-[75px] " >
                <div className="border-b-2 border-blue-700 " >
                  <img src={formData.signature} alt="signature" className="-mb-6 " />
                </div>

                <div>
                  <p className="capitalize" >{formData.dName} </p>
                  <p className="text-[14px] " >Director of {formData.sub}</p>
                </div>
              </div>

              <div className=" w-[400px] -ml-[150px] mt-[5px] " >
                <img src={award} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="mt-20  text-white">
        <button id="downloadImage" ref={downloadImageButtonRef} className="text-white ml-20 bg-purple-900 p-2 rounded-xl hover:bg-purple-800" >Download as Image</button>
        <button id="downloadPDF" ref={downloadPDFButtonRef} className="text-white bg-purple-900 p-2 rounded-xl hover:bg-purple-800" >Download as PDF</button>
      </div>
    </div>
  </>
  )
}

export default Certificate