import sign1 from "../assets/sign1.png";
import sign2 from "../assets/signInsti.png";
import sign3 from "../assets/owerriPoly.png";
// import award from "../assets/award.png";
import award1 from "../assets/purpleribbon.png";
import logo from "../assets/ginsti.png";
import logo2 from "../assets/fedPolyNekede.png";
import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react";
import watermark from "../assets/watermark.jpg";



const OwerriCert = () => {

        const ref = useRef(null);

        const onButtonClick = useCallback(() => {
            if (ref.current === null) {
                return;
            }

            toPng(ref.current, { cacheBust: true })
                .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-certificate.png";
                link.href = dataUrl;
                link.click();
                })
            .catch(() => {
                alert(
                "An error occurred while generating your certificate. Please try again.");
            });
        }, [ref]);

        const [formData, setFormData] = useState({
            name: "",
        });

        useEffect(() => {
            const storedName = localStorage.getItem("name");
            setFormData({
                name: storedName || "",
            });
        }, []);
    
    
    return (
        <>
            <div className="min-w-[1000px] flex justify-center items-center min-h-screen ">
                <div ref={ref} className="flex flex-col justify-center items-center bg-white relative">
                    <img src={watermark} alt="watermark" className="absolute w-[1000px] -mt-20 h-[500px] opacity-30 " />
                    <div className="relative w-[1000px] h-[600px] border-[20px] m-10 border-purple-500 flex ">
                        <div className="flex flex-col mx-auto">
                            <div className="flex text-center mx-auto pl-20 ">
                                <p className="mr-2 ">
                                    <img src={logo} alt="logo" className="w-[80px] " />
                                </p>
                                <p className="w-[1px] h-[50px] bg-purple-600 mt-4 "></p>
                                <p className="pr-1 font-bold text-xs w-[200px] ">
                                    <img src={logo2} alt="Logo" className="w-[80px] " />
                                </p>
                            </div>

                            <div className="text-center mx-auto">
                                <p className="uppercase font-semibold text-3xl ">
                                    certificate of participation
                                </p>
                                <p className="text-center italic font-bold ">
                                    this is to certify that
                                </p>
                            </div>

                            <div className=" text-center mx-auto pt-5 pb-10 w-[1000px] h-[200px] mt-5 ">
                                <p className="text-3xl font-semibold border-b-2 mx-[300px] pb-2 mb-1 border-purple-800 border-dashed ">
                                    {" "}
                                    {formData.name}{" "}
                                </p>
                                
                                <p className="mx-20 mt-5 text-xl font-semibold ">
                                    Has successfully participated in the 2-Day Hands-on Workshop on Genomics and Bioinformatics held on 13th - 14th March 2025 at Federal Polytechnic Nekede Owerri, Nigeria. The participant engaged in hands-on training sessions and demonstrated a good understanding of the core concepts and techniques covered in the workshop.
                                </p>
                                <p className="font-bold uppercase hidden">
                                    {" "}
                                    13th - 14th March 2025{" "}
                                </p>
                            </div>

                            <div className="flex justify-between mx-24 ">
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

                                <div className="mt-4">
                                    <p className="border-b-2 border-dashed border-purple-800 w-[200px] ">
                                        <img src={sign3} alt="signature" className="w-[150px] h-[100px] -mb-2 "/>
                                    </p>
                                    <p className="text-base font-semibold">
                                        Dr. Theodore Mbata
                                    </p>
                                    <p className="text-xs font-medium">
                                        Director, Collaborations and Linkages <br />
                                        Federal Polytechnic Nekede. Owerri.
                                    </p>
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

export default OwerriCert