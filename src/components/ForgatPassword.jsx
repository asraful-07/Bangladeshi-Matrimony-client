import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const ForgatPassword = () => {
  const { forgotPassword } = useContext(AuthContext);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      return toast.error("Please provide valid email address");
    }
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-md shadow-xl p-6">
          <h1 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h1>
          <form onSubmit={handlePasswordReset} className="space-y-4">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
                aria-label="Email Address"
              />
            </div>
            {/* Reset Password Button */}
            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Reset Password"}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600 text-sm">
            Remembered your password?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Back to Login
            </a>
          </p>
          {/* Feedback Messages */}
          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-center mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgatPassword;
