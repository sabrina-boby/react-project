
// import React, { useState } from "react";
// import boxShape from "../../assets/red-small-box.png";
// import bgForm from "../../assets/bg-form.png";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     person: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPopup, setShowPopup] = useState(false); // State for showing the popup

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.date) newErrors.date = "Reservation date is required";
//     if (!formData.person) newErrors.person = "Total people is required";
//     if (!formData.message) newErrors.message = "Message is required";

//     // Reset form data after submission
//     // setFormData({
//     //   name: "",
//     //   email: "",
//     //   date: "",
//     //   person: "",
//     //   message: "",
//     // });

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form data:", formData);

//       // Show popup for 2 seconds
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 3000);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <section
//       className="py-10 sm:py-28 bg-repeat bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgForm})` }}
//     >
//       <div className="container mx-auto px-4 sm:px-10 text-white">
//         <div className="flex items-center gap-2 mb-4">
//           <img src={boxShape} alt="Box Shape" />
//           <h2 className="text-red-600 text-base font-semibold ">Book Now</h2>
//         </div>
//         <h3 className="text-4xl sm:text-6xl mb-4 sm:mb-6 uppercase font-bebas">
//           Book Your Table
//         </h3>
//         <p className="text-lg font-light mb-6 sm:w-5/12">
//           Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
//           molestie vel, ornare non id blandit netus.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-5 sm:w-2/4">
//           <div className="flex gap-5 flex-col sm:flex-row">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 bg-transparent h-12"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name}</p>
//             )}
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 bg-transparent h-12"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}
//           </div>
//           <div className="flex gap-5 flex-col sm:flex-row ">
//             <input
//               type="date"
//               name="date"
//               placeholder="Reservation Date"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 bg-transparent h-12 "
//             />
//             {errors.date && (
//               <p className="text-red-500 text-sm">{errors.date}</p>
//             )}
//             <input
//               type="number"
//               name="person"
//               placeholder="Total People"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 bg-transparent h-12 "
//             />
//             {errors.person && (
//               <p className="text-red-500 text-sm">{errors.person}</p>
//             )}
//           </div>
//           <input
//             type="text"
//             name="message"
//             placeholder="Message"
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 bg-transparent h-28"
//           />
//           {errors.message && (
//             <p className="text-red-500 text-sm">{errors.message}</p>
//           )}
//           <button
//             type="submit"
//             className="bg-yellow-400 px-8 py-3 text-black w-fit uppercase font-semibold text-lg"
//           >
//             Book Now
//           </button>
//         </form>

//         {/* Popup Notification */}
//         {showPopup && (
//           <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h4 className="text-xl font-semibold text-green-600">
//                 Form Submitted Successfully!
//               </h4>
//               <p className="mt-2 text-black">Name: {formData.name}</p>
//               <p className="text-black">Email: {formData.email}</p>
//               <p className="text-black">Date: {formData.date}</p>
//               <p className="text-black">People: {formData.person}</p>
//               <p className="text-black">Message: {formData.message}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Form;



// ==========================================================================
// ==========================================================================

import React, { useState } from "react";
import boxShape from "../../assets/red-small-box.png";
import bgForm from "../../assets/bg-form.png";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    person: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.date) newErrors.date = "Reservation date is required";
    if (!formData.person) newErrors.person = "Total people is required";
    // if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);

      // Show popup for 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        // Reset the form data after 3 seconds
        setFormData({ name: "", email: "", date: "", person: "", message: "" });
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section
      className="py-10 sm:py-28 bg-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgForm})` }}
    >
      <div className="container mx-auto px-4 sm:px-10 text-white">
        <div className="flex items-center gap-2 mb-4">
          <img src={boxShape} alt="Box Shape" />
          <h2 className="text-red-600 text-base font-semibold ">Book Now</h2>
        </div>
        <h3 className="text-4xl sm:text-6xl mb-4 sm:mb-6 uppercase font-bebas">
          Book Your Table
        </h3>
        <p className="text-lg font-light mb-6 sm:w-5/12">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5 sm:w-2/4">
          <div className="flex gap-5 flex-col sm:flex-row">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent h-12"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent h-12"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="flex gap-5 flex-col sm:flex-row ">
            <input
              type="date"
              name="date"
              value={formData.date}
              placeholder="Reservation Date"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent h-12 "
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
            <input
              type="number"
              name="person"
              value={formData.person}
              placeholder="Total People"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent h-12 "
            />
            {errors.person && (
              <p className="text-red-500 text-sm">{errors.person}</p>
            )}
          </div>
          <input
            type="text"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-transparent h-28"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
          <button
            type="submit"
            className="bg-yellow-400 px-8 py-3 text-black w-fit uppercase font-semibold text-lg"
          >
            Book Now
          </button>
        </form>

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="text-xl font-semibold text-green-600">
                Form Submitted Successfully!
              </h4>
              <p className="mt-2 text-black">Name: {formData.name}</p>
              <p className="text-black">Email: {formData.email}</p>
              <p className="text-black">Date: {formData.date}</p>
              <p className="text-black">People: {formData.person}</p>
              <p className="text-black">Message: {formData.message}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
