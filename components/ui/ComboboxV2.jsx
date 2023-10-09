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
                    className='w-[20rem] justify-between text-[1rem] font-poppins font-bold max-md:font-semibold leading-normal tracking-[0.005rem] text-gray-scale-80 border-none whitespace-nowrap line-clamp-1 py-[0.25rem] px-[0.5rem] max-md:text-[3.733rem] max-md:leading-[1.57] max-md:w-full uppercase max-md:h-fit max-md:px-[1.5rem] max-md:py-[1.25rem]'
                >
                    {value || 'Select tour...'}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='13'
                      height='8'
                      viewBox='0 0 13 8'
                      fill='none'
                    >
                      <path
                        d='M6.50329 3.88944L2.88713 0.273436C2.70358 0.0897039 2.47909 -0.0019532 2.21368 -0.00195319C1.9483 -0.00195318 1.72392 0.0897302 1.54039 0.273436L0.982264 0.831382C0.798793 1.01483 0.707031 1.23935 0.707031 1.50465C0.707031 1.76995 0.798793 1.99437 0.982264 2.1781L5.82612 7.02932C6.00967 7.2129 6.23413 7.30469 6.49957 7.30469C6.765 7.30469 6.98928 7.21293 7.17291 7.02932L12.0168 2.17812C12.2003 1.99439 12.2921 1.77 12.2921 1.50467C12.2921 1.23934 12.2003 1.01485 12.0168 0.831408L11.4587 0.273462C11.2753 0.0897298 11.0521 -0.00192783 10.789 -0.00192782C10.5262 -0.00192781 10.3005 0.0897561 10.112 0.273462L6.50329 3.88944Z'
                        fill='#727272'
                      />
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0 w-[20rem] max-md:w-full font-poppins z-[9999]'>
                <Command>
                    {/* <CommandInput placeholder='Search tour...' /> */}
                    {/* <CommandEmpty>No tour found.</CommandEmpty> */}
                    <CommandGroup className='max-md:p-[1.25rem]'>
                        {allTourHG?.nodes?.map((item, index) => (
                            <CommandItem
                                key={index}
                                onSelect={(currentValue) => {
                                    setValue(currentValue)
                                    setOpen(false)
                                    setTour(item)
                                }}
                                className='text-[1rem] font-poppins font-bold max-md:font-semibold leading-normal tracking-[0.005rem] line-clamp-2 max-md:text-[3.733rem] max-md:leading-[1.57] max-md:px-[1.5rem] max-md:py-[1.375rem]'
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4 max-md:w-[5rem] max-md:h-[4rem]',
                                        value?.toLowerCase() === item?.title?.toLowerCase()
                                            ? 'opacity-100'
                                            : 'opacity-0',
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
