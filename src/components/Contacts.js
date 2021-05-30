import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';


const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_6DEGhl4tKlbhvoVlmgp8J";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll get back to you ASAP");
          }).catch(err => console.error(`Something went wrong :/ ${err}`))
      }
    
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>please fill out the form and describe your project and needs 
                    and I'll get back to you ASAP
                </p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>    
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: "please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name w fewer than 25 characters"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            />
                            <div className="line"></div>
                        </div>
                        {/* Email INPUT */}
                        <div className="text-center">
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            />
                            <div className="line"></div>
                        </div>
                        {/* Subject INPUT */}
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="please briefly describe your project..."
                            name="description"
                            ></textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contacts
