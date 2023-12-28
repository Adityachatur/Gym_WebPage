import React, { useEffect } from "react";
import PrecisionManufacturingSharpIcon from "@mui/icons-material/PrecisionManufacturingSharp";
import FitnessCenterSharpIcon from "@mui/icons-material/FitnessCenterSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    faAppleWhole,
    faHeartCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
const WhyChoosecard = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);
    return (
        <div>
            <section className="text-gray-600 body-font bg-black">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl  title-font mb-3 text-orange-800 uppercase font-Oswald">
                            Why Chose Us?
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl font-Montserrat">
                            PUSH YOUR LIMITS FORWARD.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-down">
                            <div class="border-2px-4 py-6 rounded-lg bg-black card">
                                <div class="icon-bg bg-orange-800 text-black rounded-full w-24 h-24 mb-3 p-4 hover:text-white hover:bg-orange-800 inline-block">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <PrecisionManufacturingSharpIcon />
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <h2 class="title-font font-medium text-2xl text-white font-Oswald">
                                        Modern equipment
                                    </h2>
                                    <p class="text-base text-white font-Roboto mt-2">
                                        Modern gyms feature a range of cutting-edge equipment such as advanced cardio machines, high-tech strength training tools, functional training gear, wearable technology, virtual reality fitness equipment, and recovery tools. These innovations provide diverse and personalized workout experiences for gym enthusiasts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2px-4 py-6 rounded-lg bg-black card " data-aos="fade-down">
                                <div class="icon-bg text-black bg-orange-800 rounded-full w-24 h-24 mb-3 p-4 hover:text-white hover:bg-orange-800 inline-block">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <FontAwesomeIcon icon={faAppleWhole} />
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <h2 class="title-font  text-2xl text-white font-Oswald">
                                        Healthy nutrition plan
                                    </h2>
                                    <p class="text-base text-white font-Roboto mt-2">
                                        A healthy nutrition plan involves balanced meals with a variety of fruits, vegetables, lean proteins, whole grains, and healthy fats. Portion control and staying hydrated are also essential. It's important to focus on nutrient-dense foods and to limit processed and sugary items for overall well-being.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2px-4 py-6 rounded-lg bg-black card " data-aos="fade-down">
                                <div class="icon-bg bg-orange-800 text-black rounded-full w-24 h-24 mb-3 p-4 hover:text-white hover:bg-orange-800 inline-block">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <FitnessCenterSharpIcon />
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <h2 class="title-font font-medium text-2xl text-white font-Oswald">

                                        Proffesponal training plan
                                    </h2>
                                    <p class="text-base text-white font-Roboto mt-2">
                                        Crafting a personalized training plan is essential for achieving fitness goals. Assess your current fitness level, set realistic targets, incorporate a mix of strength, cardio, and flexibility exercises, and ensure adequate rest and recovery. Consultation with a fitness professional can further refine your plan for optimal results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2px-4 py-6 rounded-lg bg-black card" data-aos="fade-down">
                                <div class="icon-bg bg-orange-800 text-black rounded-full w-24 h-24 mb-3 p-4 hover:text-white hover:bg-orange-800 inline-block">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <FontAwesomeIcon icon={faHeartCircleBolt} />
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <h2 class="title-font font-medium text-2xl text-white font-Oswald">
                                        Unique to your needs
                                    </h2>
                                    <p class="text-base text-white font-Roboto mt-2">
                                        "Finding the Right Gym for Your Unique Needs: Whether you're a newbie, a fitness fanatic, or have specific health considerations, choosing a gym that meets your individual requirements is crucial. From equipment variety to specialized classes, understanding and prioritizing your unique needs can lead to a more fulfilling fitness journey."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoosecard;
