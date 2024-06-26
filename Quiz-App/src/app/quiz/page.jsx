import QuizContainer from "@/components/QuizContainer/"

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-7 items-center">
      <h1 className="text-4xl font-bold mt-5">Welcome to Quiz</h1>
      <QuizContainer />
    </div>
  );
}

export default page