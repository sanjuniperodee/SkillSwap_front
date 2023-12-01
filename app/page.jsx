import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";

export const metadata = {
  title: "Skill Swap",
  description: "Делись своими знаниями и обретай новые",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
