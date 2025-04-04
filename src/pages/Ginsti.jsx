import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../assets/ginsti.png';
// import glogo from '../assets/genomac.png';
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/signInsti.png';
import award from '../assets/award.png';
import award1 from '../assets/purpleribbon.png';
import { toPng } from 'html-to-image';
import watermark from '../assets/watermark.jpg';



const Ginsti = () => {
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(() => {
                alert("An error occurred while generating your certificate. Please try again.");
            });
    }, [ref]);

    const [formData, setFormData] = useState({
        name: '',
    });

    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    const today = new Date();
    const dayWithSuffix = getDayWithSuffix(today.getDate());
    const formattedDate = `${dayWithSuffix} ${today.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
      }
    )}`;

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        setFormData({
            name: storedName || '',
        });
    }, []);

    return (
      <>
        <div className="min-w-[1000px] flex justify-center items-center min-h-screen ">
          <div
            ref={ref}
            className="flex flex-col justify-center items-center bg-white "
          >
            <div
              className="relative w-[1000px] h-[600px] border-[20px] m-10 border-purple-500 flex "
              style={{
                backgroundImage: `url(${watermark})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.9, // Adjust opacity if needed
              }}
            >
              <div className="flex flex-col mx-auto">
                <div className="flex text-center mx-auto pl-20 ">
                  <p className="mr-2 ">
                    <img src={logo} alt="logo" className="w-[80px] " />
                  </p>
                  <p className="w-[1px] h-[50px] bg-purple-600 mt-4 "></p>
                  <p className="mt-5 pr-16 font-bold text-xs w-[200px] ">
                    Genomac Institute Inc.
                    <p className="-ml-2">| USA Incorporated</p>
                  </p>
                </div>

                <div className="text-center mx-auto">
                  <p className="uppercase font-semibold text-3xl ">
                    certificate of learning
                  </p>
                  <p className="text-center italic font-bold ">
                    this certificate is awarded to:
                  </p>
                </div>

                <div className=" text-center mx-auto pt-5 pb-10 w-[1000px] h-[200px] mt-5 ">
                  <p className="text-3xl font-semibold border-b-2 mx-[300px] pb-2 mb-1 border-purple-800 border-dashed ">
                    {formData.name}
                  </p>
                  <p>
                    for demonstrating active learning in the short course on
                  </p>
                  <p className="font-bold text-purple-800 uppercase text-lg py-1 ">
                    Bioinformatics course 201
                  </p>
                  <p className="mx-16 ">
                    This course covers bioinformatics fundamentals, DNA
                    sequencing technologies, codon and protein coding
                    identification, comparative genomics, exploration of gene
                    families and functional annotation across species, whole
                    genome/exome alignment for detecting genomic rearrangements
                    associated with diseases, and whole genome/exome
                    phylogenetics for evolutionary insights.
                  </p>
                  <p className="font-bold uppercase"> {formattedDate} </p>
                </div>

                <div className="flex justify-between mx-32 ">
                  <div className=" ">
                    <p className="border-b-2 border-dashed border-purple-800 w-[200px] ">
                      <img
                        src={sign1}
                        alt="signature"
                        className="w-[200px] h-[150px] -mb-10 "
                      />
                    </p>
                    <p className="text-base font-semibold">
                      Oluwaseyi Abraham Olawale
                    </p>
                    <p className="text-xs font-medium">
                      Founder & CEO of Genomac Holdings.
                    </p>
                  </div>

                  <div className="w-[400px] h-auto -mt-[30px] -ml-[400px] -mr-[320px] z-10">
                    <img src={award} alt="award" />
                  </div>

                  <div className="mt-2 ">
                    <p className="border-b-2 border-dashed border-purple-800 w-52 ">
                      <img
                        src={sign2}
                        alt="signature"
                        className="w-[200px] h-[150px] -mb-12 "
                      />
                    </p>
                    <p className="text-base font-semibold">
                      Oluwaseun Oyekunle Agboola
                    </p>
                    <p className="text-xs font-medium">
                      Director, Genomac Institute INC.
                    </p>
                  </div>
                </div>

                <div className="w-[150px] absolute top-8 left-14 ">
                  <img src={award1} alt="award" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -mt-9">
          <button
            className="bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white"
            onClick={onButtonClick}
          >
            Download Certificate
          </button>
        </div>
      </>
    );
}

export default Ginsti;
