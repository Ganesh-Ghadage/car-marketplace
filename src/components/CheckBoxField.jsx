import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

function CheckBoxField({item, handleInputChnage, featuresList}) {
  return (
    <div className="flex items-center space-x-2">
        <Checkbox 
        id={item?.name} 
        onCheckedChange={(value) => handleInputChnage(item?.name, value)}
        checked={featuresList?.[item?.name]} />
        <label
        htmlFor={item?.name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        {item?.label} 
        </label>
  </div>
  )
}

export default CheckBoxField