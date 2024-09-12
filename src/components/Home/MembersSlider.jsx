import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import MemberCard from "./MemberCard";
import { useEffect, useState } from "react";
import { helenImg, reemImg, torkImg } from "../../assets";
function MembersSlider() {
  const members = [
    {
      id: 1,
      name: "Helen Nouman",
      img: helenImg,
      description:
        " Tork He is Superman superhero, the hidden hand that is always  working day and night with all hope, not a normal hero perhaps a hero with superpowers but with a kind heart. ⭐",
      color: "bg-[#FF9E9E]",
    },
    {
      id: 2,
      name: "Abdulhamid Tork",
      img: torkImg,
      description:
        " Tork He is Superman superhero, the hidden hand that is always  working day and night with all hope, not a normal hero perhaps a hero with superpowers but with a kind heart. ⭐",
      color: "bg-[#00A7E1]",
    },
    {
      id: 3,
      name: "Reem Deeb",
      img: reemImg,
      description:
        " Tork He is Superman superhero, the hidden hand that is always  working day and night with all hope, not a normal hero perhaps a hero with superpowers but with a kind heart. ⭐",
      color: "bg-[#FFD74B]",
    },
  ];
  const [active, setActive] = useState(2);
  const [data, setData] = useState(members);
  const [sliderInd, setIndex] = useState();
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
    let newMembers = [...members];
    const [activeMember] = members.splice(active - 1, 1);
    newMembers = newMembers.filter((item) => item.id !== active);
    const middlePosition = Math.floor(newMembers.length / 2);
    newMembers.splice(middlePosition, 0, activeMember);
    setData(newMembers);
  }, [active, members]);
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="custom_container">
      <section className="ml-8">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          onSlideChange={(e) => {
            console.log(e);
            setIndex(e.realIndex);
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {members.map((item, index) => {
            return (
              <SwiperSlide>
                <MemberCard
                  activeId={active}
                  active={index == sliderInd}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                  setActive={setActive}
                  color={item.color}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default MembersSlider;
