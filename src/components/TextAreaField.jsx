import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { IconFiled } from '.'

function TextAreaField({item, handleInputChnage, carData}) {
  return (
    <div>
        <label htmlFor={item?.name} className='text-sm px-2 flex items-center gap-2 mb-1'> <IconFiled icon={item.icon} /> {item?.label} {item?.required && <span className='text-red-600'>*</span>} </label>
        <Textarea 
          id={item?.name} 
          name={item?.name} 
          placeholder={item?.placeholder}
          required={item?.required}
          defaultValue={carData?.[item?.name]}
          onChange={(e) => (handleInputChnage(item?.name, e.target.value))}
        />
    </div>
  )
}

export default TextAreaField