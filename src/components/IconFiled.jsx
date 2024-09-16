import { MdOutlineTitle } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { PiTrademark } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { RiDashboard2Line } from "react-icons/ri";
import { MdInvertColors } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { TbCar4Wd } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";



const iconMap = {
    MdOutlineTitle: <MdOutlineTitle />,
    FaTag: <FaTag />,
    FaDollarSign: <FaDollarSign />,
    IoLogoModelS: <IoLogoModelS />,
    PiTrademark: <PiTrademark />,
    MdOutlineCategory: <MdOutlineCategory />,
    CiBarcode: <CiBarcode />,
    RiDashboard2Line: <RiDashboard2Line />,
    MdInvertColors: <MdInvertColors />,
    BsFuelPump: <BsFuelPump />,
    GiGearStickPattern: <GiGearStickPattern />,
    TbCar4Wd: <TbCar4Wd />,
    CiMoneyCheck1: <CiMoneyCheck1 />,
    TbListDetails: <TbListDetails />,
    GiCarDoor: <GiCarDoor />,
    TbEngine: <TbEngine />
}

function IconFiled({icon}) {
  return (
    <div className="text-primary bg-blue-300 p-1 rounded-full">
        {iconMap[icon]}
    </div>
  )
}

export default IconFiled