import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaExclamationCircle,
  FaUser,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "bastabs398@gmail.com",
    href: "mailto:bastabs398@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
  {
    title: "Phone",
    value: "+91 98765 ******",
    href: "tel:+9198765",
    icon: <FaPhone size={20} />,
  },
  {
    title: "GitHub",
    value: "github.com/Bastab10",
    href: "https://github.com/Bastab10",
    icon: <FaGithub size={20} />,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/bastab-saikia",
    href: "https://linkedin.com/in/bastab-saikia",
    icon: <FaLinkedin size={20} />,
  },
];

// Reusable underline-style input with a leading icon, matching the
// reference layout while keeping the original palette/typography.
function IconField({
  id,
  label,
  optional,
  icon,
  error,
  as = "input",
  ...rest
}) {
  const Tag = as;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-[#111111]">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-[#9CA3AF]">(optional)</span>
        )}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
          {icon}
        </span>
        <Tag
          id={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-transparent pl-8 pr-2 pb-3 text-base text-[#111111] placeholder:text-[#9CA3AF] outline-none border-0 border-b transition-colors duration-200 resize-none ${
            error ? "border-red-500" : "border-[#E5E7EB] focus:border-[#111111]"
          }`}
          {...rest}
        />
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="text-xs text-red-500 flex items-center gap-1"
        >
          <FaExclamationCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const messageLength = formData.message.length;
  const maxLength = 1000;
  const isNearLimit = messageLength > maxLength * 0.9;
  const isAtLimit = messageLength >= maxLength;

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_right,#f2f2f2,transparent_45%)] px-8 lg:px-16 xl:px-24 py-24 lg:py-32 flex items-center">
      <div className="mx-auto w-full max-w-[1600px] pt-20 lg:pt-24">
        {" "}
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 lg:mb-32 max-w-[820px]"
        >
          <p className="font-extralight tracking-[0.3em] uppercase text-[#6B7280] mb-4 font-semibold flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-[#6B7280]" />
            Contact
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] font-extralight leading-[0.9] text-[#111111]">
            Let's Build
            <br />
            Something Great.
          </h2>
        </motion.div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-19 items-start">
          {/* Left: intro + contact list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <h3 className="text-2xl font-semibold text-[#111111] mb-4">
              Say Hello.
            </h3>
            <p className="text-[#6B7280] leading-relaxed mb-10">
              Got an idea, a project, or just want to chat about web dev &amp;
              design? Fill the form and I'll get back to you within a day or
              two.
            </p> */}

            <ul className="space-y-9">
              {contacts.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 text-[#111111]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111111] transition-colors duration-200 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white">
                      {c.icon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                        {c.title}
                      </span>
                      <span className="block text-sm font-medium">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Name + Email side by side */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              <IconField
                id="name"
                name="name"
                label="Name"
                // icon={<FaUser size={14} />}
                required
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <IconField
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <IconField
              id="subject"
              name="subject"
              label="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            {/* Message */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="sr-only">Message</span>
                <span
                  className={`ml-auto text-xs ${
                    isAtLimit
                      ? "text-red-500"
                      : isNearLimit
                        ? "text-orange-500"
                        : "text-[#9CA3AF]"
                  }`}
                >
                  {/* {messageLength}/{maxLength} */}
                </span>
              </div>
              <IconField
                id="message"
                name="message"
                as="textarea"
                label="Message"
                rows={3}
                // icon={<FaRegCommentDots size={14} className="mt-1" />}
                required
                maxLength={maxLength}
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm"
              >
                <FaCheck size={16} />
                <span>
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
              >
                <FaExclamationCircle size={16} />
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black h-[45px] px-10 text-sm font-semibold tracking-[0.3em] uppercase text-white transition-all duration-300 hover:bg-[#222] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg
                    className="h-3 w-2 animate-spin text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
