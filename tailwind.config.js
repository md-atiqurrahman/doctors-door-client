/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url('/src/assets/images/bg.png')",
        appointmentBg: "url('/src/assets/images/appointment.png')",
      },
      boxShadow: {
        customShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
