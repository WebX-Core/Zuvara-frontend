import Link from "next/link";

const Button = ({ content }: { content: string }) => {
  return (
    <div>
      <Link
        href="#"
        className="inline-block bg-foreground hover:bg-teal-800 text-white! font-semibold px-6 py-3 transition rounded-full"
      >
        {content}
      </Link>
    </div>
  );
};

export default Button;
