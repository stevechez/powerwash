import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="lg:w-7/12 lg:mx-auto px-6">
      <h1
        className="permanent-marker my-8
			 text-5xl font-bold text-blue-950 text-center bg-gradient-to-r from-white to-blue-200 rounded-lg py-4"
      >
        Contact
      </h1>
      <p className="text-xl mb-4 lg:mr-12">
        Thank you for considering my piano lesson services. I am a highly
        experienced and passionate piano teacher who can help you develop your
        skills and achieve your musical goals.
      </p>
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="lg:w-1/2">
          <div className="font-semibold text-gray-950 mt-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            650-793-8244
          </div>
          <div className="whitespace-nowrap font-semibold text-gray-950 pr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />{" "}
            </svg>
            <span>stevechez@gmail.com</span>
            <hr className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <h4 className="text-2xl mb-2 font-semibold text-blue-950">
              Address
            </h4>
            <p>840 Seacliff Drive</p>
            <p>Aptos, CA</p>
            <div className="mt-12 w-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.251440579182!2d-121.92372402382823!3d36.979930957546976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e15c1044b999d%3A0x7545b18a9aa6c143!2s840%20Seacliff%20Dr%2C%20Aptos%2C%20CA%2095003!5e0!3m2!1sen!2sus!4v1681939253200!5m2!1sen!2sus"
                width={350}
                height={250}
                className="md:w-72 lg:w-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="w-full lg:w-1/2">
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <p className="mt-8 text-lg mb-2">Name</p>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              width={400}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <p className="text-lg mb-2">Email</p>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              width={400}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <p className="text-lg mb-2">Subject</p>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
              width={400}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <p className="text-lg mb-2">Message</p>
            <Textarea
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              width={400}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
