import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container max-w-screen-xl mx-auto p-2 text-center min-h-screen">
      <Header />
      <CourseList />
      <Footer />
    </div>
  );
};

export default App;
