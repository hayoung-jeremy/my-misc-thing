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
      "NouvelR-KR-Bold": ["NouvelR-KR-Bold"],
      "NouvelR-KR-Book": ["NouvelR-KR-Book"],
      "NouvelR-KR-Extrabold": ["NouvelR-KR-Extrabold"],
      "NouvelR-KR-Light": ["NouvelR-KR-Light"],
      "NouvelR-KR-Regular": ["NouvelR-KR-Regular"],
      "NouvelR-KR-Semibold": ["NouvelR-KR-Semibold"],
      "NouvelR-Bold": ["NouvelR-Bold"],
      "NouvelR-Book": ["NouvelR-Book"],
      "NouvelR-Extrabold": ["NouvelR-Extrabold"],
      "NouvelR-Light": ["NouvelR-Light"],
      "NouvelR-Regular": ["NouvelR-Regular"],
      "NouvelR-Semibold": ["NouvelR-Semibold"],
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
