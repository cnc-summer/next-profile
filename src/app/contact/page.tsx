'use client'

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <div className="container mx-auto min-h-[calc(100vh-130px)] px-4">
            <PageHeader header="Contact" />
            <div className="grid lg:grid-cols-2  gap-6">
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(name, email, message);
                    }}
                >
                    <div className="mb-4">
                        <label 
                            htmlFor="name"
                            className="block text-gray-300 font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="block w-full px-3 py-2 outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="block text-gray-300 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="block w-full px-3 py-2 outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                            htmlFor="message"
                            className="block text-gray-300 font-semibold mb-2"
                        >
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="block w-full px-3 py-2 outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            defaultValue={ message }
                        >
                        </textarea>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-yellow-500 px-3 py-2 hover:bg-amber-400">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="text-white text-lg">
                    <div className="font-semibold">
                        Tanareog  O-Charoen
                    </div>
                    <div className="mt-3 flex gap-3">
                        <div className="mt-1"><BsFillTelephoneFill /></div> <a href="tel:0831234567">0831234567</a>
                    </div>
                    <div className="mt-3 flex gap-3">
                        <div className="mt-1"><MdEmail /></div> <a href="mailto:graph@graph.com">graph@graph.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}