import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Swal from "sweetalert2";
import backgroundImage from "../assets/images/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";

const Register = () => {
  const [loading2, setLoading2] = useState(false);

  const [file, setFile] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("traveler");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- VALIDATION LOGIC ---

    if (password !== repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
      return;
    }
    if (email === "" || password === "" || name === "" || mobile === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing required fields!",
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire("Please enter a valid email address", "", "error");
      return;
    }

    // --- UPDATED BANGLADESHI MOBILE VALIDATION ---
    const bangladeshiMobileRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (!bangladeshiMobileRegex.test(mobile)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid Bangladeshi mobile number (e.g., 01xxxxxxxxx).",
      });
      return;
    }
    // --- END OF MOBILE VALIDATION ---

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Do you want to sign up with Travely?",
      showDenyButton: true,
      confirmButtonText: "Yes, Sign Up",
      denyButtonText: `Don't Sign Up`,
    });

    if (!result.isConfirmed) {
      return;
    }

    setLoading2(true);

    try {
      // Check for existing user first to avoid unnecessary image uploads
      const existingUser = await axios.get(`auth/check-email?email=${email}`);

      if (existingUser.data.message === "Email already exists") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "A user with this email already exists!",
        });
        setLoading2(false);
        return;
      }

      let imageUrl = ""; // Default empty image URL

      // --- IMPROVED IMAGE UPLOAD HANDLING ---
      // Upload image to Cloudinary if a file is selected
      if (file) {
        try {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload"); // Make sure this is your correct preset
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlwgfnikw/image/upload",
            data
          );
          imageUrl = uploadRes.data.url;
        } catch (uploadError) {
          console.error("Cloudinary Upload Error:", uploadError);
          // Notify user that image upload failed but registration can continue
          await Swal.fire({
            icon: "warning",
            title: "Image Upload Failed",
            text: "Your profile picture could not be uploaded, but you can still complete your registration.",
          });
          // imageUrl remains ""
        }
      }
      // --- END OF IMPROVED HANDLING ---

      // Create user data object
      const newUser = {
        name,
        email,
        mobile,
        country,
        type,
        password,
        img: imageUrl, // Will be empty if upload failed or no file was selected
      };

      // Register the user
      await axios.post("auth/register", newUser);

      Swal.fire(
        "Congratulations!",
        "You have successfully registered with Travely.",
        "success"
      );
      navigate("/login");
    } catch (err) {
      // Handle potential errors during registration
      let errorMessage = "Something went wrong. Please try again.";
      if (err.response && err.response.status === 409) {
        errorMessage = "A user with this email already exists!";
      } else if (err.message) {
        errorMessage = err.message;
      }
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errorMessage,
      });
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold">SIGN UP</h2>
        </div>
        <div className="mb-6 flex sm:flex-row justify-center">
          <img
            className="rounded-full object-cover"
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="avatar"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-row justify-center items-center text-center">
              <label htmlFor="file" className="cursor-pointer">
                Click here to add a profile picture:{" "}
                <DriveFolderUploadOutlinedIcon />
              </label>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  if (selectedFile && !selectedFile.type.startsWith("image/")) {
                    Swal.fire("Please select an image file", "", "error");
                    return;
                  }
                  setFile(selectedFile);
                }}
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Email"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Mobile (e.g., 01...)"
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Country"
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] focus:ring outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="block text-base bordder-[#E9EDF4] border appearance-none w-full py-3 px-5   bg-[#FCFDFE] rounded-3xl  border-slate-300 focus:outline-none focus:ring"
                >
                  <option value="traveler">Traveler</option>
                  <option value="hotelOwner">Hotel Owner</option>
                  <option value="vehicleOwner">Vehicle Owner</option>
                  <option value="resturentOwner">Restaurant Owner</option>
                  <option value="tourGuide">Tour Guide</option>
                  <option value="eventOrganizer">Event Organizer</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.354 7.354a2 2 0 00-2.828 0L10 8.172 7.475 5.646a2 2 0 10-2.828 2.828l3.182 3.182a2 2 0 002.828 0l3.182-3.182a2 2 0 000-2.828z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-9">
              <input
                placeholder="Repeat Password"
                type="password"
                id="repeatPassword"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="bordder-[#E9EDF4] w-full text-base rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className=" w-full font-bold text-center hover:bg-gray-600 cursor-pointer rounded-3xl bg-[#41A4FF] py-3 px-5 text-white transition hover:bg-opacity-90"
                disabled={loading2}
              >
                {loading2 ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
        {loading2 && <Spinner />}

        <div className="flex flex-col justify-center text-center pb-20">
          <p className="text-base text-[#adadad]">
            Already a member?
            <Link
              to="/login"
              className="text-primary hover:underline ms-2 font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
