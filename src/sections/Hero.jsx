import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes,statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage]= useState(bigShoe1)
  return (
 
    
    <section
        id="home"
        className="w-full  flex xl:flex-row flex-col  justify-center min-h-screen gap-10  max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat   text-green-800   font-bold">Our Winter Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10
                          ">The New Arrival</span>
                    <br/>
                    <span className=" text-blue-600 inline-block mt-3">Cosmos</span>
                    
                    </h1>
                    <p className="font-montserrat text-slate-gray  text-lg leading-8 mt-6 mb-14 sm:max-w-sm 
                    ">Explore the latest arrivals from Stylish Cosmos, where quality, comfort, and innovation converge to enhance your active lifestyle. Immerse yourself in a perfect blend of fashion and functionality with Cosmos clothes.</p>
                    <Button label="Shop now"  iconURL={arrowRight}/>
                    <div className="flex justify-start items-start
                    flex-wrap w-full mt-20 gap-16">
                        {statistics.map((stat,index)=>(
                            <div>
                                <p className="text-4xl  font-palanquin font-bold">{stat.value}</p>
                                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                                </div>
                        ))}
                    </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
              <img
                src={bigShoeImage} 
                alt="shoe collection"
                width={610}
                height={500}
                className="object-contain relative z-10 "
                 />
              <div className="flex sm-gap-6 gap-4 absolute -bottom-[5%] sm:leftt-[10%]  max-sm:px-6">
                {shoes.map((shoe)=>(<div key={shoe}>
                  <ShoeCard
                      imgURL={shoe}
                        changeBigShoeImage=
                        {(shoe)=> setBigShoeImage(shoe)}np
                        bigShoeImage={bigShoeImage}
                        
                        />
                  </div>
                    ))}
              </div>
            </div>
    </section>
  )
}

export default Hero
