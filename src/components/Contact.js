import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import linkedInIcon from "../assets/linkedin_compressed.png";
import twitterIcon from "../assets/twitter_compressed.jpg";
import githubIcon from "../assets/github_compressed.png";
import emailIcon from "../assets/email2_compressed.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <div className="allIcons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rory-donaldson-98ba9593/"
        >
          <img src={linkedInIcon} alt="LinkedIn Icon" className="icon"></img>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/rorylkd">
          <img src={githubIcon} alt="Github Icon" className="icon"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/RoryDonaldson19"
        >
          <img src={twitterIcon} alt="Twitter Icon" className="icon"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto: rory.donaldson14@gmail.com"
        >
          {" "}
          <img src={emailIcon} alt="Email Icon" className="icon"></img>
        </a>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          alert("Thank you!");
        })}
      >
        <label className="formTitle" htmlFor="name">Name:</label>
        <input className="formInput" {...register("name", { required: true })} id="name" />
        {errors.name && <span className="formError"> Name is required </span>}

        <label className="formTitle" htmlFor="email">Email Address:</label>
        <input className="formInput"
          {...register(
            "email",
            {
              pattern: {
                value: /\S+@\S+\.\S+/,
              },
              required: true
            }
          )}
          id="email"
        />
        {errors.email && <span className="formError"> Valid email is required </span>}

        <label className="formTitle" htmlFor="message">Message:</label>

        <input className="formInput" {...register("message", { required: true })} id="message" />
        {errors.message && <span className="formError"> Message is required </span>}
        <input className="submit" type="submit" value="Submit" />
      </form>
    </Fragment>
  );
}
