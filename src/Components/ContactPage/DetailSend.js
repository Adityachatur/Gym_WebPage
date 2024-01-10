import React, { useState } from "react";
import swal from 'sweetalert';
import {
    faEnvelope,
    faLocationPin,
    faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserInformation } from '../Firebase/Firebase';
import { addDoc, query, getDocs, where } from 'firebase/firestore';
import { TailSpin } from "react-loader-spinner";
const DetailSend = () => {
    const [loading, setloading] = useState(false);
    const [emailerror, setemailerror] = useState('');
    const [contacterror, setcontacterror] = useState('');
    const [nameerror, setnameerror] = useState('');
    const [form, setform] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });


    const validname = (name) => {
        return name.length > 5;
    }

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validcontact = (contact) => {
        return /^\d{10}$/.test(contact);
    }


    const Formsubmit = async () => {

        try {
            setloading(true);
            if (!validname(form.name)) {
                setnameerror('name must greater than  5 characters..');
                setloading(false);
                return;
            } else {
                setnameerror('');
            }
            if (!validateEmail(form.email)) {
                setemailerror('please enter the correct email....')
                setloading(false);
                return;
            } else {
                setemailerror('');
            }

            if (!validcontact(form.contact)) {
                setcontacterror('please enter 10 digit contact number');
                setloading(false);
                return;
            } else {
                setcontacterror('');
            }

            const repeatemail = await getDocs(query(UserInformation, where('email', '==', form.email)));
            if (repeatemail.size > 0) {
                setemailerror(`Email already registered...Please enter another email address`);
                setloading(false);
                return;
            } else {
                setemailerror('');
            }

            await addDoc(UserInformation, form);
            swal({
                title: "Successfully Added",
                icon: "success",
                buttons: false,
                timer: 3000,
            })
            setform({
                name: '',
                email: '',
                contact: '',
                message: '',
            })
            setloading(false);
        } catch (error) {
            console.log(error);

        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        Formsubmit();
    };

    return (
        <div>
            <div className="flex flex-wrap lg:w-9/12 w-full mx-auto mt-10">
                <div className="lg:w-1/2 md:w-1/2 w-full p-4 ">
                    <div className="mb-4">
                        <p className="text-orange-900 text-sm uppercase font-bold font-Oswald">
                            Contact us
                        </p>
                        <p className="text-white text-2xl font-bold uppercase mt-2 font-Montserrat">
                            Get In touch
                        </p>
                    </div>
                    <div className="flex items-center mb-4 card">
                        <FontAwesomeIcon
                            icon={faLocationPin}
                            className="mx-4 my-2 text-orange-900 bg-gray-900 icon-bg  h-6 w-6 p-4 rounded-full"
                        />
                        <p className="lg:text-sm text-base text-white cursor-pointer">
                            Balajinagar medaknrwaidi chakan, <br /> 410501
                        </p>
                    </div>
                    <div className="flex items-center mb-4 card">
                        <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            className="mx-4 my-4 text-orange-900 bg-gray-900 icon-bg h-6 w-6 p-4 rounded-full"
                        />
                        <p className="lg:text-sm text-base text-white cursor-pointer">+91 9552314201</p>
                    </div>
                    <div className="flex items-center mb-4 card">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mx-4 my-4 icon-bg text-orange-900 bg-gray-900 h-6 w-6 p-4 rounded-full"
                        />
                        <p className="lg:text-sm text-base text-white cursor-pointer">
                            adityachatur7996@gmail.com
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 md:w-1/2 w-full p-4">

                    <form onSubmit={handlesubmit}>
                        <input
                            type="text"
                            className="w-full my-3 h-10 bg-gray-900 p-2 text-gray-400 text-sm placeholder-gray-700 focus:outline-none focus:ring focus:border-gray-500"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) => setform({ ...form, name: e.target.value })}
                            required
                        />
                        {nameerror && (
                            <p className="text-white text-lg">{nameerror}</p>
                        )}
                        <input
                            type="text"
                            className="w-full my-3 h-10 bg-gray-900 p-2 text-gray-400 text-sm placeholder-gray-700 focus:outline-none focus:ring focus:border-gray-500"
                            placeholder="Email"
                            value={form.value}
                            onChange={(e) => setform({ ...form, email: e.target.value })}
                            required
                        />
                        {emailerror && (
                            <p className="text-white text-lg">{emailerror}</p>
                        )}
                        <input
                            type="text"
                            className="w-full my-3 h-10 p-2 bg-gray-900 text-gray-400 text-sm placeholder-gray-700 focus:outline-none focus:ring focus:border-gray-500"
                            placeholder="Contact Number"
                            value={form.value}
                            onChange={(e) => setform({ ...form, contact: e.target.value })}
                            required
                        />
                        {contacterror && (
                            <p className="text-white text-lg">{contacterror}</p>
                        )}
                        <textarea
                            cols="10"
                            rows="5"
                            className="w-full bg-gray-900 text-gray-400 my-3 p-2 placeholder-gray-700"
                            placeholder="Message"
                            value={form.value}
                            onChange={(e) => setform({ ...form, message: e.target.value })}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center text-gray-900 bg-orange-800 py-2 font-Montserrat"
                        >
                            {loading ? (
                                <TailSpin height={25} color="white" className="mr-2" />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default DetailSend;
