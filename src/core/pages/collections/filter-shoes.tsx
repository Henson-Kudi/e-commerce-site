import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import React from 'react'

function Filters() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Best selling" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">ALphabetically a-z</SelectItem>
        <SelectItem value="dark">ALphabetically z-a</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
        <SelectItem value="system">High-low</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default Filters

