import {  
  modalImg,  
} from "../../assets";  
import SocialLinks from "./SocialLinks";

function Modal({ isOpen, closeModal, message, direction, useLang }) {  
  if (!isOpen) return null;  

  return (  
    <div  
      className={`${  
        isOpen ? "flex justify-center items-center" : "hidden"  
      } fixed !z-[102] inset-0 flex justify-center items-center bg-black bg-opacity-50`}  
      onClick={closeModal}  
    >  
      <dialog  
        className={`bg-white m-auto mt-16 rounded-lg shadow-lg sm:max-w-[30rem] md:max-w-[50%] lg:max-w-[489px] w-full p-6 ${  
          isOpen  
            ? "flex items-center justify-center flex-col mx-auto overflow-auto max-h-[562px]"  
            : "hidden"  
        }`}  
        onClick={(e) => e.stopPropagation()} 
      >  
        <img src={modalImg} alt="" className="mx-auto mb-4 size-[200px]" />  
        <h3  
          dir={direction ? "ltr" : "rtl"}  
          className="font-bold text-gray-800 text-xl mb-2"  
        >  
          {message.title}  
        </h3>  
        <p  
          dir={direction ? "ltr" : "rtl"}  
          className="text-gray-600 text-base mb-4"  
        >  
          {message.content}  
        </p>  

        <button type="submit" onClick={closeModal} className="button11">  
          <span  
            className="text-[#00A7E1] border transition-all duration-300 border-[#00A7E1] rounded-[30px] font-normal text-xs 2xl:text-lg py-3 px-16 md:mt-5 mt-8"  
          >  
            {useLang?.demo.form[17]}
          </span>  
        </button>  
        <span  
          className="text-black border-none transition-all duration-300 rounded-[30px] font-normal text-base py-3 px-16 md:mt-5 mt-8"  
        >  
            {useLang?.demo.form[18]}
        </span>  
        <SocialLinks />  
      </dialog>  
    </div>  
  );  
}  

export default Modal;