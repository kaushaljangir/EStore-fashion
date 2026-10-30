
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./Signup.css";
import "./Login.css";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await signup({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      navigate("/");
    } catch (error) {
      setError(error.message || "Unable to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card signup-card">
        <Link to="/" className="auth-logo">
          E<span>STORE</span>
        </Link>

        <h1>Create account</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="signup-name">Your name</label>

          <input
            id="signup-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            minLength={2}
            required
          />

          <label htmlFor="signup-email">Email address</label>

          <input
            id="signup-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="signup-password">Password</label>

          <div className="auth-password">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              value={form.password}
              onChange={handleChange}
              minLength={8}
              required
            />

            <button
              type="button"
              className="auth-password-toggle"
              onClick={() =>
                setShowPassword((previous) => !previous)
              }
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          <label htmlFor="signup-confirm-password">
            Confirm password
          </label>

          <div className="auth-password">
            <input
              id="signup-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="auth-password-toggle"
              onClick={() =>
                setShowConfirmPassword((previous) => !previous)
              }
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        <p className="auth-legal">
          By creating an account, you agree to E STORE's{" "}
          <Link to="/conditions">Conditions of Use</Link> and{" "}
          <Link to="/privacy">Privacy Notice</Link>.
        </p>
      </section>
    </main>
  );
};

export default Signup;
