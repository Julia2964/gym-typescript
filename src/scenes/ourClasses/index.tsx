import { SelectedPage, ClassType} from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"




const classes: Array<ClassType> =[
    {
        name: "Weight Training Classes",
       description: "Build strength and confidence with our weight training classes! Perfect for all levels, these sessions focus on proper technique, muscle growth, and overall power.",
        image: image1,
    },
    {
        name: "Yoga Classes",
       description: "Relax, stretch, and strengthen your body and mind in our yoga classes. Perfect for all levels, they offer balance, flexibility, and calmness.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
       description: "Strengthen your core and improve stability with targeted ab workouts. Perfect for all levels, these classes focus on building a strong, toned midsection.",
        image: image3,
    },
    {
        name: "Adventure Classes",
       description: "Unleash your inner explorer with our adventure classes! These dynamic, high-energy sessions combine fitness with fun challenges to keep you motivated and excited.",
        image: image4,
    },
    {
        name: "Fitness Classes",
       description: "Elevate your energy and achieve your goals with our fitness classes! Designed for all levels, they offer a mix of cardio, strength, and fun to keep you moving.",
        image: image5,
    },
    {
        name: "Training Classes",
       description: "Push your limits and reach new heights with our training classes! Tailored for all fitness levels, they focus on strength, endurance, and overall performance.",
        image: image6,
    },
]

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const OurClasses = ( { setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">

    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
                whileInView="visible"
                viewport={{once : true, amount: 0.5 }}
                transition={{duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: {opacity:1, x: 0}
                }}
        >
            <div className="md:w-3/5">
                <HText>
                    OUR CLASSES
                </HText>
                <p className="py-5">
                Discover a variety of classes designed to keep you motivated 
                and moving! From high-energy cardio sessions and strength training 
                to calming yoga and dynamic dance workouts, our expert instructors
                 cater to all fitness levels. Whether you’re looking to challenge 
                 yourself or unwind, our classes provide the perfect mix of fun,
                  intensity, and results. Find your favorite and make every workout 
                  exciting!
                </p>
            </div>

        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
                </ul>
        </div>
    </motion.div>
    </section>
  )
}

export default OurClasses