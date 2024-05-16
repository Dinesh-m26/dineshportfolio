import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div id="contact" className="px-4 sm:px-0">
            <h1 className='text-[#90A0D9] text-3xl sm:text-5xl font-bold text-center py-4'>Contact</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9]"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9]"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-[#90A0D9] text-lg font-semibold mb-2">
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-[#90A0D9] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-[#90A0D9] h-32 resize-none"
                        />
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#90A0D9] text-[#23283E] font-semibold py-2 px-4 rounded focus:outline-none hover:bg-opacity-80 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
