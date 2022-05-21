module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    spacing: {
      10: "10px",
      15: "15px",
      20: "20px",
      25: "25px",
      30: "30px",
      35: "35px",
      40: "40px",
      45: "45px",
      50: "50px",
      55: "55px",
      60: "60px",
      65: "65px",
      70: "70px",
      75: "75px",
      80: "80px",
      85: "85px",
      90: "90px",
      95: "95px",
      100: "100px",
    },
    extend: {
      colors: {
        primary: "#f2784b",
        hover: "#e64206",
        header: "#222f3e",
        text: "#8395a7",
      },
      fontFamily: {
        header: ["Ubuntu"],
        text: ["Lato"],
      },
    },
  },
};
