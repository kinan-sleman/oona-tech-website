import { service_1 } from "../../assets";
import AboutCard from "../products/AboutCard";

export default function Cards({useLang, direction}) {
  return (
    <div className="my-5 md:!mb-20 md:!mt-20 flex flex-col gap-5 md:flex-row md:justify-between md:items-center custom_container sm:custom_container 2xl:large_container">
      <AboutCard
        borderColor="border-[]"
        img={service_1}
        title={useLang?.about?.cards[0].title}
        description={useLang?.about?.cards[0].description}
        direction={direction}
      />
      <AboutCard
        borderColor="border-[]"
        img={service_1}
        title={useLang?.about?.cards[1].title}
        description={useLang?.about?.cards[1].description}
        direction={direction}
      />
      <AboutCard
        borderColor="border-[]"
        img={service_1}
        title={useLang?.about?.cards[2].title}
        description={useLang?.about?.cards[2].description}
        direction={direction}
      />
    </div>
  );
}
