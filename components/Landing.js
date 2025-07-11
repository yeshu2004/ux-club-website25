import Nav from "./Nav";

export default function Landing() {
  return (
    <>
      <div className="h-screen w-full bg-[#0e0e0e] relative text-[#eceae5] pt-3 font-[Neue]">
        <Nav/>
        <h1 className="font-[Socilo] text-[6.5rem] leading-none pt-10 text-center">
          Club
        </h1>
      </div>
    </>
  );
}
