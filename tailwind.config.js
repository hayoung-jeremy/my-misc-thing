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
      "NouvelR-Extrabold": ["NouvelR-Extrabold"],
      "NouvelR-Bold": ["NouvelR-Bold"],
      "NouvelR-Semibold": ["NouvelR-Semibold"],
      "NouvelR-Regular": ["NouvelR-Regular"],
      "NouvelR-Book": ["NouvelR-Book"],
      "NouvelR-Light": ["NouvelR-Light"],
      "NouvelR-KR-Extrabold": ["NouvelR-KR-Extrabold"],
      "NouvelR-KR-Bold": ["NouvelR-KR-Bold"],
      "NouvelR-KR-Semibold": ["NouvelR-KR-Semibold"],
      "NouvelR-KR-Regular": ["NouvelR-KR-Regular"],
      "NouvelR-KR-Book": ["NouvelR-KR-Book"],
      "NouvelR-KR-Light": ["NouvelR-KR-Light"],
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
