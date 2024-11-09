import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section
      id="customize"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        
          <h2 className="font-palanquin text-4xl capitalize font-bold  lg:max-w-lg">
          CUSTOMIZED FASHION:
                  <span 
                  className=" text-coral-red ">  MAKE YOUR STYLE  </span>
                   <span
                    className="text-coral-red">
                     UNIQUE
                      </span> 
              
                    </h2>
                    <p className="mt-4 lg:max-w-lg info-text ">Transform your style into a unique statement with Cosmos Clothing's customization option, allowing you to tailor colors, patterns, and details to craft personalized, one-of-a-kind apparel that reflects your individuality.
                    </p>
                    <p className="mt-6 lg:max-w-lg info-text">Dedicated to customized excellence, ensuring satisfaction through meticulous attention to detail.</p>
                  <div className="mt-11">
                  <Button label="View Details"/>
                  </div>
                  
     
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />

      </div>
    </section>
  )
}

export default SuperQuality
