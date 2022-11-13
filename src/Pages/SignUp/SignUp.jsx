import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div classme="w-96 p-8">
        <h2 className="text-xl font-semibold text-center">SignUp </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="name"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error text-xs">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              type="email"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error text-xs">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/,
                  message: "password must be strong",
                },
              })}
              type="password"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-xs text-error">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-neutral mt-4 w-full"
            value="Sign up"
            type="submit"
          />
        </form>
        <p className="mt-4 text-sm text-center">
          Have an account ?{" "}
          <Link className="text-primary" to="/signup">
            {" "}
            Login Now
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </section>
  );
};

export default SignUp;
