import React, { useState } from "react";

const Bmical = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBMI] = useState(null);
    const [bmiCategory, setBMICategory] = useState("");
    const [validationError, setValidationError] = useState("");

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBMI(bmiValue.toFixed(2));

            if (bmiValue < 18.5) {
                setBMICategory("Underweight");
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setBMICategory("Normal Weight");
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setBMICategory("Overweight");
            } else {
                setBMICategory("Obese");
            }
            setValidationError("");
            setHeight("");
            setWeight("");
        } else {
            setBMI(null);
            setBMICategory("");
            setValidationError("Please enter both height and weight are in number.");
        }
    };


    return (
        <div className="lg:w-9/12 w-full mx-auto flex flex-wrap my-4">
            <div className=" w-1/2 mx-auto  h-auto  mb-4 md:mb-0 text-center">
                <div className="m-3">
                    <p className="text-3xl text-orange-800 font-Oswald ">
                        FREE BMI CALCULATOR
                    </p>
                    <p className="text-sm text-white font-Montserrat mt-2 ">
                        Our BMI Calculator: Quickly assess your body composition by entering
                        your height and weight. Find out if your weight falls within a
                        healthy range for your height. Note that BMI is a basic assessment
                        and for personalized advice, consult our fitness experts.
                    </p>
                </div>
                <div className="m-3">
                    <label className="text-white">Height (cm):</label>
                    <br />
                    <input
                        type="number"
                        className="px-2 py-1 h-10 bg-gray-900 p-2 text-gray-400 text-lg placeholder-gray-700 focus:outline-none focus:ring focus:border-gray-500"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                        required
                    />
                </div>

                <div className="m-3">
                    <label className="text-white">Weight (kg):</label>
                    <br />
                    <input
                        type="number"
                        className="px-2 py-1 h-10 bg-gray-900 p-2 text-gray-400 text-lg placeholder-gray-700 focus:outline-none focus:ring focus:border-gray-500"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                        required
                    />
                </div>
                <button
                    className="m-3 bg-gray-900 border-2 border-orange-800 text-white px-4 py-2 md:text-lg hover:bg-orange-800 text-sm font-Roboto"
                    onClick={calculateBMI}
                >Calculate BMI
                </button>

                {validationError && (
                    <p className="text-white m-3 text-base font-Montserrat text-center">
                        {validationError}
                    </p>
                )}

                {bmi !== null && (
                    <div className="m-4">
                        <h2 className="text-2xl font-bold text-white font-Oswald">
                            Result:
                        </h2>
                        <p className="text-orange-800 font-Montserrat">
                            Your BMI is: <span className="text-white">{bmi}</span>
                        </p>
                        <p className="text-orange-800 font-Montserrat">
                            Category: <span className="text-white"> {bmiCategory}</span>
                        </p>
                        {validationError && (
                            <p className="text-white m-3 text-base font-Montserrat text-center">
                                {validationError}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bmical;
