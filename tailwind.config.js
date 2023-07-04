/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      AppleSDGothicNeoT: ["AppleSDGothicNeoT"],
      AppleSDGothicNeoUL: ["AppleSDGothicNeoUL"],
      AppleSDGothicNeoL: ["AppleSDGothicNeoL"],
      AppleSDGothicNeoM: ["AppleSDGothicNeoM"],
      AppleSDGothicNeoR: ["AppleSDGothicNeoR"],
      AppleSDGothicNeoSB: ["AppleSDGothicNeoSB"],
      AppleSDGothicNeoB: ["AppleSDGothicNeoB"],
      AppleSDGothicNeoEB: ["AppleSDGothicNeoEB"],
      AppleSDGothicNeoH: ["AppleSDGothicNeoH"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
