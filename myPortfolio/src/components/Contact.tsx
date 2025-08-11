import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
    function handleClick() {
        window.open('https://www.linkedin.com/in/temple-dees/'), '_blank'
    }
    const [result, setResult] = React.useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "32c91746-de71-40e8-88f4-e25e5c9d389c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
        });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="h-screen mt-32">
        <div className="flex justify-center">
            <h2 className="text-6xl font-semibold drop-shadow-lg">Contact</h2>
        </div>
        <div className="flex justify-center mt-8">
            <p className="text-2xl">Feel free to reach out via email or connect with me on </p>
            <p onClick={handleClick} className="text-blue-500 hover:underline ml-2 text-2xl">LinkedIn</p>
        </div>
        <div className="mt-16">
            <form onSubmit={onSubmit} className="flex flex-col items-center mt-8 gap-4">
                <input type="text" placeholder="Your Name" className="border-2 border-gray-300 rounded-xl p-3 mb-4 w-1/3 bg-white shadow-xl/20 opacity-75" name="name" required />
                <input type="email" placeholder="Your Email" className="border-2 border-gray-300 rounded-xl p-3 mb-4 w-1/3 bg-white shadow-xl/20 opacity-75" name="email" required/>
                <textarea placeholder="Your Message" name="message" className="border-2 border-gray-300 rounded-xl p-3 mb-4 w-1/3 h-32 bg-white shadow-xl/20 opacity-75" required></textarea>
                <button type="submit" className="bg-white text-black rounded-xl p-2 w-1/3 hover:bg-fuschia-600 shadow-xl/20 opacity-75">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact