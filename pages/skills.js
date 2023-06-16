import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../public/skills/javascript.svg"
import git from "../public/skills/git.svg"
import linux from "../public/skills/linux.svg"
import python from "../public/skills/python.svg"
import reactIcon from "../public/skills/react.svg"
import tailwind from "../public/skills/tailwind.svg"


export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">SKILLS</h1>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="linux"  img={linux} />
                <SkillCard name="python"  img={python} />
                <SkillCard name="javascript"  img={javascript} />
                <SkillCard name="react"  img={reactIcon} />
                <SkillCard name="tailwind"  img={tailwind} />
                <SkillCard name="git" img={git} />
                </Slider>
            </div>
            
        </div>
    )
}
