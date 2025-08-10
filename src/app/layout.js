import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Digital Idea Garden",
    default: "Digital Idea Garden – Grow Your Ideas Effortlessly",
  },
  description:
    "Digital Idea Garden is a creative platform that helps you capture, organize, and develop your ideas from simple seeds into fully grown projects. With AI-powered suggestions, intuitive tagging, and a beautiful garden-inspired interface, nurture your thoughts and bring them to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
