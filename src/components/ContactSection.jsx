import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import { useTheme } from "@/hooks/useTheme";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
      'service_65ohny9', // TODO: Replace with your EmailJS service ID
      'template_iasa8ps', // TODO: Replace with your EmailJS template ID
      e.target,
      'Pa6ppW3q9D8xePtr3' // TODO: Replace with your EmailJS public key
    )
    .then((result) => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-background">
      {theme === "light" && <BackgroundShapes />}
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div
            className="bg-card p-8 rounded-2xl shadow-md border border-border"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Varun kumar..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="varun@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>

          <div className="pt-8 text-center">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/varunkumarelluru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/varunkumarelluru"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.85 10.94.57.1.77-.25.77-.54v-2.01c-3.19.7-3.86-1.54-3.86-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.63 0-1.25.44-2.27 1.17-3.07-.12-.28-.51-1.43.11-2.98 0 0 .96-.31 3.15 1.17a10.91 10.91 0 012.87-.39c.97.01 1.94.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.55.23 2.7.11 2.98.73.8 1.17 1.82 1.17 3.07 0 4.37-2.7 5.33-5.27 5.61.41.35.78 1.05.78 2.12v3.14c0 .3.2.65.78.54A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
