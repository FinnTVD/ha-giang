'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function ComboboxV2({ allTourHG, setTour }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(allTourHG?.nodes[0]?.title)

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
        >
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    title={value}
                    className='w-[14vw] justify-between text-[1vw] font-poppins font-medium leading-normal tracking-[0.005vw] text-gray-scale-80 border-none whitespace-nowrap line-clamp-1 py-[0.25vw] px-[0.5vw] max-md:text-[3.733vw] max-md:leading-[1.57] max-md:w-full uppercase'
                >
                    {value || 'Select tour...'}
                    <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[14vw] p-0 max-md:w-full font-poppins'>
                <Command>
                    <CommandInput placeholder='Search tour...' />
                    <CommandEmpty>No tour found.</CommandEmpty>
                    <CommandGroup>
                        {allTourHG?.nodes?.map((item, index) => (
                            <CommandItem
                                key={index}
                                onSelect={(currentValue) => {
                                    setValue(currentValue)
                                    setOpen(false)
                                    setTour(item)
                                }}
                                className='text-[1vw] font-poppins font-medium leading-normal tracking-[0.005vw] line-clamp-2 max-md:text-[3.733vw] max-md:leading-[1.57]'
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        value === item?.title?.toLowerCase() ? 'opacity-100' : 'opacity-0',
                                    )}
                                />
                                {item?.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
