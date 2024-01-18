import React from "react";
import { useRouter } from "next/router";

const LoginSignup = ({ type, url }) => {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [notFilled, setNotFilled] = React.useState(false);
  const [existsError, setExistsError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="flex absolute top-1/2 -tranlate-x-1/2 -translate-y-1/2 flex-col justify-center w-full max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{type}</h1>
          <div className="relative">
            <input
              type="text"
              className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="password"
              className="peer w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* add a fill required fields warning using tailwindcss*/}
          {notFilled && (
            <div
              class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                class="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div>
                <span class="font-medium">Fill all fields!</span>
              </div>
            </div>
          )}

          {type === "Signup"
            ? success && (
                <div
                  id="alert-additional-content-3"
                  class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                >
                  <div class="flex items-center">
                    <h3 class="text-sm font-medium">
                      You registered successfully!
                    </h3>
                  </div>
                </div>
              )
            : success && (
                <div
                  id="alert-additional-content-3"
                  class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                >
                  <div class="flex items-center">
                    <h3 class="text-sm font-medium">
                      You logged in successfully!
                    </h3>
                  </div>
                </div>
              )}

          {type === "Signup"
            ? existsError && (
                <div
                  class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div>
                    <span class="font-medium">User already exists!</span>
                  </div>
                </div>
              )
            : existsError && (
                <div
                  class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div>
                    <span class="font-medium">Invalid credentials!</span>
                  </div>
                </div>
              )}
          <button
            onClick={async () => {
              console.log("clicked");
              try {
                if (!username || !password) {
                  setNotFilled(true);
                  return;
                }

                const res = await fetch(`http://localhost:3001/${url}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username,
                    password,
                  }),
                });
                if (res.status >= 200 && res.status <= 299) {
                  setSuccess(true);
                  setNotFilled(false);
                  setExistsError(false);
                  const data = await res.json();
                  if (type === "Login") {
                    localStorage.setItem("token", data.token);
                    await router.push("/");
                    router.reload();
                  } else {
                    setTimeout(() => {
                      router.push("/login");
                    }, 1000);
                  }
                } else if (res.status == 400) {
                  setNotFilled(true);
                  setTimeout(() => {
                    setNotFilled(false);
                  }, 1000);
                  setSuccess(false);
                  setExistsError(false);
                } else if (res.status == 403) {
                  setExistsError(true);
                  setTimeout(() => {
                    setExistsError(false);
                  }, 1000);
                  setNotFilled(false);
                  setSuccess(false);
                }
                // setAccountCreated(true);
                // const error = document.querySelector(`.${formStyles.error}`) as HTMLElement;
                // error?.classList.add(`${formStyles.hide}`);
                // const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                // fill?.classList.add(`${formStyles.hide}`);

                // setTimeout(() => {
                //     const accountCreated = document.querySelector(`.${formStyles.accountCreated}`) as HTMLElement;
                //     accountCreated.classList.add(`${formStyles.hide}`);
                //     setEmail("");
                //     setUsername("");
                //     setPassword("");
                //     setFirstName("");
                //     setLastName("");
                //     openSignupModal();
                //     openSigninModal();

                // }, 500);

                // router.push(`${username}/orders`);
              } catch (error) {
                alert("error");
                console.error("Error:", error);
              }
            }}
            className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-800  "
          >
            {type}
          </button>
          <div className="flex flex-col items-center justify-center mt-6">
            <span className="text-sm text-center text-gray-400">
              {type === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <button
              onClick={() => {
                if (type === "Login") {
                  router.push("/signup");
                }
                if (type === "Signup") {
                  router.push("/login");
                }
              }}
              className="mx-2 text-sm font-semibold text-blue-500 hover:text-blue-600 hover:underline"
            >
              {type === "Login" ? "Signup" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
