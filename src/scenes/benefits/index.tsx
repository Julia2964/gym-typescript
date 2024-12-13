import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png"



const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Experience top-notch equipment and modern amenities designed to elevate your workouts. Our gym combines innovation and comfort to help you achieve your fitness goals in style.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "With hundreds of classes to choose from, there’s something for everyone! From high-energy workouts to relaxing sessions, explore options that keep you motivated and excited.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Experts and Pro Trainers",
        description: "Our certified experts and professional trainers are here to guide, motivate, and support you. Get personalized advice and expert coaching to achieve your fitness goals.",
    }
]

const container ={
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
        >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
                whileInView="visible"
                viewport={{once : true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: {opacity:1, x: 0}
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainer and classes to 
                    get you to your ultimate fitness goals with ease. We provide true 
                    care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}

            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden" 
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/*GRAPHICS AND DESCRIPTION */}

            <div className="mt-16 items-center justify-betweengap-20 md:mt-28 md:flex">
                {/* GRAPHIC*/}
               
               <img
                    className="mx-auto"
                    alt="benefits-page-graphics"
                    src={BenefitsPageGraphics}
                />

                
                {/*DESCRIPTION*/}
                <div>
                    {/*TITLE*/}
                <div className="relative">
                   <div className="before:absolute  before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once : true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x:50},
                            visible: {opacity:1, x: 0}
                        }}
                        >
                             <HText>
                                 MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                 <span className="text-primary-500">FIT</span>.
                             </HText>
                         </motion.div>
                     </div>
                </div>
                 
                    {/*DESCRIPT*/}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once : true, amount: 0.5 }}
                    transition={{ delay: 0.2 ,duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: {opacity:1, x: 0}
                    }}
                    >
                        <p className="my-5">
                        At our gym, we’re more than just a fitness center – we’re 
                        a community where smiles and sweat go hand in hand. Our members 
                        leave every session not only stronger but also happier, energized 
                        by a supportive atmosphere and expert guidance tailored to their
                         goals. Here, every step forward is a celebration, and every success
                         is shared.
                        </p>
                        <p className="mb-5">
                        Our members love what they do because they see results and feel 
                        inspired every day. From personal bests to newfound confidence, 
                        each individual’s journey is met with encouragement and positivity. 
                        Join our family of happy members who have transformed their fitness
                         routines into a lifestyle they genuinely enjoy!
                        </p>
                    </motion.div>

                    {/*BUTTON*/}

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles ">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>

                        </div>

                    </div>
                    
                </div>
            </div>


        </motion.div>
    </section>
  )
}

export default Benefits
