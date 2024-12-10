export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  export interface BenefitType{
    icon: JSX.Element;
    title: string;
    description: string
  }

  export interface ClassType{
    name: string, 
    description?: string, //? means that it's optional 
    image: string
  }
