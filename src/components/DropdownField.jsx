import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { IconFiled } from '.'
  

function DropdownField({item, handleInputChnage,carData}) {
  
  return (
    <div>
        <label htmlFor={item?.name} className='text-sm px-2 flex items-center gap-2 mb-1'> <IconFiled icon={item.icon} /> {item?.label} {item?.required && <span className='text-red-600'>*</span>} </label>
        <Select required={item?.required}
          onValueChange={(value) => handleInputChnage(item?.name, value)}
          defaultValue={carData?.[item?.name]}
        >
        <SelectTrigger className="w-full">
            <SelectValue placeholder={carData?.[item?.name] ? carData?.[item?.name] : item?.placeholder} id={item?.name}/>
        </SelectTrigger>
        <SelectContent>
            {item?.options.map((option) => (
                <SelectItem value={option} key={option}>{option}</SelectItem>
            ))}
        </SelectContent>
        </Select>
    </div>
  )
}

export default DropdownField