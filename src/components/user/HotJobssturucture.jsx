import React, { useState } from "react";
import data from "./HotJobs.json";

const HotjobsStructure = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    coverLetter: "",
    resume: null,
    screeningAnswers: {},
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        screeningAnswers: {
          ...prevState.screeningAnswers,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e, jobTitle, email) => {
    e.preventDefault();
    const submissionData = {
      jobTitle,
      ...formData,
      submissionDate: new Date().toISOString(),
    };
    console.log("Form submitted:", submissionData);
    alert(`Application for ${jobTitle} submitted successfully!`);
  };

  if (!data || !Array.isArray(data)) {
    return <div className="text-center text-red-500">Error: Job data not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 bg-white font-sans">
      {data.map((job, index) => (
        <div key={index} className="mb-12">
          <h1 className="text-4xl font-normal text-center text-orange-500 mb-3">
            {job.title}
          </h1>
          <p className="text-center text-gray-600 mb-4">Company: {job.company}</p>
          <div className="border-t border-gray-400 w-20 mx-auto mb-8"></div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Job Description */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Full Job Description
              </h2>

              {/* Overview */}
              {job.fullJobDescription.overview && (
                <p className="mb-4 text-gray-700">
                  {job.fullJobDescription.overview}
                </p>
              )}

              {/* Benefits (if applicable) */}
              {job.fullJobDescription.benefits && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                    {job.fullJobDescription.benefits.map((benefit, i) => (
                      <li key={`benefit-${i}`}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Who Can Apply (if applicable) */}
              {job.fullJobDescription.whoCanApply && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Who Can Apply
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                    {job.fullJobDescription.whoCanApply.map((criteria, i) => (
                      <li key={`criteria-${i}`}>{criteria}</li>
                    ))}
                    <li>
                      If you are not authorized to work in Canada, do not apply.
                      The employer will not respond to your application.
                    </li>
                  </ul>
                </>
              )}

              {/* Job Details */}
              <h3 className="font-semibold text-gray-800 mb-2">Job Details</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Pay: {job.jobDetails.pay || "Not specified"}</li>
                <li>Job Type: {job.jobDetails.jobType || "N/A"}</li>
              </ul>

              {/* Qualifications */}
              {(job.fullJobDescription.education ||
                job.fullJobDescription.experience ||
                job.fullJobDescription.requirements) && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Qualifications
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                    {job.fullJobDescription.education && (
                      <li>Education: {job.fullJobDescription.education}</li>
                    )}
                    {job.fullJobDescription.experience && (
                      <li>Experience: {job.fullJobDescription.experience}</li>
                    )}
                    {job.fullJobDescription.requirements?.map((req, i) => (
                      <li key={`req-${i}`}>{req}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Responsibilities */}
              {job.fullJobDescription.responsibilities && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                    {job.fullJobDescription.responsibilities.map((resp, i) => (
                      <li key={`resp-${i}`}>{resp}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Additional Details */}
              {job.fullJobDescription.additionalDetails && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Additional Details
                  </h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                    {job.fullJobDescription.additionalDetails.workTerm && (
                      <li>
                        Work Term:{" "}
                        {job.fullJobDescription.additionalDetails.workTerm}
                      </li>
                    )}
                    {job.fullJobDescription.additionalDetails.workLanguage && (
                      <li>
                        Language:{" "}
                        {job.fullJobDescription.additionalDetails.workLanguage}
                      </li>
                    )}
                    {job.fullJobDescription.additionalDetails.hours && (
                      <li>
                        Hours: {job.fullJobDescription.additionalDetails.hours}
                      </li>
                    )}
                  </ul>
                </>
              )}

              {/* How to Apply */}
              {job.howToApply && (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    How to Apply
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {job.howToApply.instructions}
                  </p>
                  {job.howToApply.requiredDocuments && (
                    <p className="text-gray-700 mb-2">
                      Required Documents:{" "}
                      {job.howToApply.requiredDocuments.join(", ")}
                    </p>
                  )}
                  {job.howToApply.email && (
                    <p className="text-gray-700">
                      Email: <a href={`mailto:${job.howToApply.email}`} className="text-blue-500 underline">{job.howToApply.email}</a>
                    </p>
                  )}
                </>
              )}
            </div>

            {/* Right Column - Application Form */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Apply Now</h2>

              <form
                onSubmit={(e) =>
                  handleSubmit(e, job.title, job.howToApply.email)
                }
                className="space-y-4"
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    className="w-full border border-gray-300 p-3 rounded"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                    className="w-full border border-gray-300 p-3 rounded"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full border border-gray-300 p-3 rounded"
                    required
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Cover Letter*"
                    className="w-full border border-gray-300 p-3 rounded h-40"
                    required={job.howToApply.requiredDocuments?.includes(
                      "Cover letter"
                    )}
                  />
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  {/* Resume Upload */}
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <span className="text-orange-500 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                        </svg>
                      </span>
                      <span className="text-orange-500">Attach Resume</span>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">
                      {formData.resume
                        ? formData.resume.name
                        : "No file selected"}
                    </span>
                  </div>

                  {/* Cover Letter File Upload (Optional) */}
                  {job.howToApply.requiredDocuments?.includes("Cover letter") && (
                    <div className="flex items-center">
                      <label className="flex items-center cursor-pointer">
                        <span className="text-orange-500 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                          </svg>
                        </span>
                        <span className="text-orange-500">
                          Attach Cover Letter (Optional File)
                        </span>
                        <input
                          type="file"
                          name="coverLetterFile"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                      <span className="ml-auto text-gray-500 text-sm">
                        {formData.coverLetterFile
                          ? formData.coverLetterFile.name
                          : "No file selected"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Screening Questions */}
                {job.howToApply.screeningQuestions && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800">
                      Screening Questions
                    </h3>
                    {job.howToApply.screeningQuestions.map((question, i) => (
                      <div key={`screening-${i}`} className="flex items-center">
                        <input
                          type="checkbox"
                          name={`screening-${i}`}
                          checked={formData.screeningAnswers[`screening-${i}`] || false}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label className="text-gray-700">{question}</label>
                      </div>
                    ))}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-3xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  SUBMIT APPLICATION
                </button>

                {/* reCAPTCHA Notice */}
                <p className="text-sm text-gray-600 mt-2">
                  This site is protected by reCAPTCHA and the Google
                  <span className="text-orange-500"> Privacy Policy</span> and
                  <span className="text-orange-500"> Terms of Service</span>{" "}
                  apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotjobsStructure;