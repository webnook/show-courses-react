const CourseCard = ({ course }) => {
  return (
    <div className="bg-white flex items-center rounded-xl shadow-md mb-8 p-4">
      <div className="p-4">
        <img
          className="w-60 h-auto rounded-xl"
          src={course.imageUrl}
          alt={course.title}
        />
      </div>
      <div className="w-full px-2 text-left">
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
};

export default CourseCard;

const CourseCardBody = ({ course }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold md:text-2xl mb-4">{course.title}</p>
          <p className="text-slate-500 md:text-xl mb-4">{course.description}</p>
        </div>
        <div className="font-bold">⭐ {course.rate}</div>
      </div>
      <div className="flex items-center gap-x-4 text-sm md:text-lg">
        {course.tags.map((t) => (
          <span className="bg-gray-300 p-2 rounded-xl mb-6" key={t}>
            {t}
          </span>
        ))}
      </div>
    </>
  );
};

const CourseCardFooter = ({ course }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-y-4 md:flex-row md:items-center md:justify-between mb-4">
        <div>
          {new Date(course.start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        <div
          className={`font-bold text-sm md:text-lg px-4 py-2 rounded-2xl ${
            course.status === "Completed"
              ? "bg-green-200 text-green-800"
              : course.status === "Active"
              ? "bg-orange-200 text-orange-800"
              : "bg-gray-200 text-gray-800"
          }`}>
          {course.status}
        </div>
      </div>
    </>
  );
};
