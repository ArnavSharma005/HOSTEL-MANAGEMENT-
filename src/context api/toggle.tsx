import { createContext, useContext, useState, ReactNode } from 'react';

// Create a context with a default value
interface PopupContextProps {
  isOpen: boolean;
  togglePopup: () => void;
  announce:boolean;
  toggleAnnounce:()=>void;
  toggleEmergency:()=>void;
  isLogin:boolean;
  toggleLogin:()=>void;
  emergency:boolean;
}





const PopupContext = createContext<PopupContextProps | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

// Create a provider component
export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
const [announce,setannounce]=useState<boolean>(false);
const [emergency,setEmergency]=useState<boolean>(false);
const [isLogin,setLogin]=useState<boolean>(false);

const toggleLogin=()=>setLogin(!isLogin)
const toggleEmergency=()=>
  setEmergency(!emergency)



  const toggleAnnounce=()=>setannounce(!announce)
  const togglePopup = () =>{ 
    setIsOpen(!isOpen);
  }

  return (
    <PopupContext.Provider value={{ isLogin,toggleLogin,isOpen,toggleEmergency,emergency, togglePopup,announce,toggleAnnounce }}>
      {children}
    </PopupContext.Provider>
  );
};
