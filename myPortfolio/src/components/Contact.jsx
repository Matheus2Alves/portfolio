import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-8"> 
        <div className="container mx-auto"> 
            <h2 className="text-3xl font-bold mb-4">Contact</h2> 
            <form className="space-y-4"> 
                <div> 
                    <label className="block text-lg font-medium">Name</label> 
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" /> 
                </div> 
                <div> 
                    <label className="block text-lg font-medium">Email</label> 
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" /> 
                </div> 
                <div> 
                    <label className="block text-lg font-medium">Message</label> 
                    <textarea className="w-full p-2 border border-gray-300 rounded"></textarea> 
                </div> 
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button> 
            </form> 
        </div> 
    </section>
  )
}

export default Contact