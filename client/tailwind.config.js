/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "chat-default":
          "url('https://media.istockphoto.com/id/1183632265/vector/set-of-contact-us-and-support-icons-vector-pattern-design.jpg?s=1024x1024&w=is&k=20&c=cx-tXY7gMMvnhtKKVh85J-YdrNTgMmKApYQB5XwgqDo=')",
      },
      backgroundSize: {
        "10%": "10%",
      },
      colors: {
        primary: "#00a884",
      },
    },
  },
  plugins: [],
};
