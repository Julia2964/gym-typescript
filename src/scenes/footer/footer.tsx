import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = () => {
  return (
    <footer
        className="bg-primary-100 py-16"
    >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                Stronger, healthier, and happier – one workout at a time.
                </p>
                <p>
                © EVOGYM 2024. All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                   LINKS 
                </h4>
                <p className="my-5">Privacy Policy</p>
                <p className="my-5">Terms & Conditions</p>
                <p className="my-5">Contact Us</p>

            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                   Contact Us 
                </h4>
                <p className="my-5">Location</p>
                <p>(333) 857-378-982-4</p>

            </div>
        </div>
    </footer>
  )
}

export default Footer