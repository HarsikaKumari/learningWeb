export default function quizPage({params}: { params: { id: string } }) {
  return (
    <section>
      <h1>Quiz {params.id}</h1>
    </section>
  );
}
