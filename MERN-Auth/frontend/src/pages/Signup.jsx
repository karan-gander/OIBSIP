/* eslint-disable react-hooks/rules-of-hooks */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApi } from "../controllers/useApi";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import * as yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "balck",
};
const schema = yup.object({
  email: yup
    .string()
    .email("Invaild email format")
    .required("Email is required"),
  fullname: yup.string().required("Full name is required"),
  password: yup.string().min(8, "Password length must be min 8"),
});
export function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //   console.log(errors.email, "err");
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await useApi(
      "post",
      "http://localhost:8000/api/v1/user/signup",
      data
    );
    // console.log(res);  
    const { statusCode, success } = res.data;
    console.log("success", success);

    const options = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    };

    if (success == true) {
      toast.success("User signup successfully", options);
      setLoading(false);
      reset();
    }

    if (res.response.status == 500) {
      toast.error(
        res && res.response && res.response.data && res.response.data.message,
        options
      );
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="w-full h-screen flex items-center justify-center">
        {loading ? (
          <HashLoader
            color="black"
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Full Name"
                  {...register("fullname")}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <span className="text-red-500">
                  {errors && errors.fullname && errors.fullname.message}
                </span>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  {...register("email")}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <span className="text-red-500">
                  {errors && errors.email && errors.email.message}
                </span>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  {...register("password")}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <span className="text-red-500">
                  {errors && errors.password && errors.password.message}
                </span>
              </div>

              <Button className="mt-6" type="submit" fullWidth>
                sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        )}
      </div>
    </>
  );
}
