import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <>
      <Header />
      <Title
        title="Authentic recipes"
        highlight={[1]}
        italic={[1]}
        subtitle="Try one of our pearl sugar recipe at the comfort of your home.
In the kitchen with waffle pantry."
      />
    </>
  );
}
