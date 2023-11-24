import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";

export const metadata = {
  title: "Jumys App",
  description: "Найди работу в 2 клика",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
