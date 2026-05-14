"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, InputGroup, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createAuthClient } from "better-auth/client";
const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const authClient = createAuthClient();

  const googleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      // router.push('/signin')
    });
    if (data) {
      // redirect('/sigin')
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <StyledWrapper>
      <div className="mx-auto flex justify-center my-10">
        <form onSubmit={handleSignUp} className="form card">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>

          <label>
            <label>Name:</label>
            <input
              required
              type="text"
              name="name"
              className="input  items-center flex"
              placeholder="Enter Your Name"
            />
          </label>
          <label>
            <label>Image uri:</label>
            <input
              required
              type="text"
              neme="image"
              className="input  items-center flex"
              placeholder="Image url"
            />
          </label>
          <label>Email:</label>
          <label>
            <input
              required
              type="email"
              name="email"
              className="input items-center flex py-3"
              placeholder="Enter Your Email"
            />
          </label>
          <label>Password:</label>
          <TextField className="w-full max-w-full" name="password">
            <InputGroup>
              <InputGroup.Input
                placeholder="Enter Your Password"
                className="w-full max-w-full py-3"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <button type="submit" className="btn btn-accent text-white text-lg">
            Submit
          </button>
          <div className="divider text-lg">or</div>
          {/* Google */}
          <button
            onClick={googleSignIn}
            className="btn bg-white text-black text-lg border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Signin with Google
          </button>

          <p className="signin">
            Already have an acount ? <a href="/signin">Signin</a>{" "}
          </p>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    width: 450px;

    padding: 30px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default SignUpForm;
