import React from 'react'
import { Input } from "@/components/ui/input"
import { IconFiled } from '.'

function InputField({item, handleInputChnage, carData}) {
  return (
    <div className='w-full'>
      <label 
        htmlFor={item?.name} 
        className='text-sm px-2 flex items-center gap-2 mb-1'> 
        <IconFiled icon={item.icon} />
        {item?.label} {item?.required && <span className='text-red-600'>*</span>} 
      </label>
      <Input 
        name={item?.name} 
        id={item?.name} 
        type={item?.type} 
        required={item?.required} 
        placeholder={item?.placeholder}
        defaultValue={carData?.[item?.name]}
        onChange={(e) => (handleInputChnage(item?.name, e.target.value))}
        />
    </div>
  )
}

export default InputField