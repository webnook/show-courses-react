const status = ["All", "Completed", "Upcoming", "Uncompleted"];

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mt-8 font-bold mb-8">My Courses (3)</h1>
      <div className="w-full flex items-center justify-evenly md:text-xl p-4">
        {status.map((s) => (
          <div className="p-2 cursor-pointer" key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
