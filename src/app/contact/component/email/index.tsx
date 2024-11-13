"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import LottieContainer from "@/app/components/lottie";
import animation from "./contactHson.json";
const Email = () => {
  const pathname: string = usePathname();
  const [loading, setLoading] = useState(false);

  const methods: any = useForm({
    mode: "onChange",
  });
  const { register } = methods;
  const handleSubmit = async (data: any) => {
    setLoading(true);

    try {
      const response = await axios.post("", data);

      // Handle success
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your question has been sent successfully!",
        });
        methods.reset();
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send your question. Please try again later.";
      Swal.fire({
        icon: error,
        // title: {error},
        text: errorMessage,
      });
      console.error("Error sending question:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("watch", methods.watch("subject"));
  return (
    <div className={`${styles.emailContainer}`}>
      <div className={styles.contnet}>
        <div className={styles.leftDiv}>
          <div>
            <LottieContainer animation={animation} loop={true} />
          </div>
        </div>
        <div className={styles.rightDiv}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <div className={styles.rightDiv}>
                <h1>Email us your inquiry</h1>
                <p>
                  Leave your inquiry to our team and we will get back to you as
                  soon as possible.
                </p>

                {/* Name Field */}
                <div>
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  {methods.formState.errors.name && (
                    <p className={styles.error}>
                      {methods.formState.errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {methods.formState.errors.email && (
                    <p className={styles.error}>
                      {methods.formState.errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {methods.formState.errors.phone && (
                    <p className={styles.error}>
                      {methods.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                {/* <div>
                  <label htmlFor="subject">subject</label>
                  <select
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  >
                    <option value="Customer Support">Customer Support</option>
                    <option value="Educational partnership">
                      Educational partnership
                    </option>
                    <option value="Business Relationship">
                      Business Relationship
                    </option>
                    <option value="Content Suggestion">
                      Content Suggestion
                    </option>
                    <option value="App Feedback">App Feedback</option>
                  </select>
                  {methods.formState.errors.subject && (
                    <p className={styles.error}>
                      {methods.formState.errors.subject.message}
                    </p>
                  )}
                </div> */}

                {/* Question Field */}
                <div>
                  <label htmlFor="question">question</label>
                  <textarea
                    {...register("question", {
                      required: "Question is required",
                    })}
                  />
                  {methods.formState.errors.question && (
                    <p className={styles.error}>
                      {methods.formState.errors.question.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    className={styles.btn}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending...." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Email;
