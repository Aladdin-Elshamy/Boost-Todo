import { Logo } from "@/utilities/icons.utilities";

export default function Header() {
  return (
    <header className="bg-headerBg">
      <div className="container py-24">
        <h1 className="font-black flex items-center gap-3 justify-center text-4xl">
          <Logo />
          <div>
            <span className="text-primary">to</span>
            <span className="text-secondary">do</span>
          </div>
        </h1>
      </div>
    </header>
  );
}
