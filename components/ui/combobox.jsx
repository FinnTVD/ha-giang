'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function ComboboxDemo({ frameworks }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(frameworks[0]?.value)

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
                    className='w-[14vw] justify-between text-[1vw] font-poppins font-medium leading-normal tracking-[0.005rem] text-gray-scale-80 border-none whitespace-nowrap line-clamp-1 py-[0.25vw] px-[0.5vw]'
                >
                    {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select framework...'}
                    <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[14vw] p-0'>
                <Command>
                    <CommandInput placeholder='Search tour...' />
                    <CommandEmpty>No tour found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? '' : currentValue)
                                    setOpen(false)
                                }}
                                className='text-[1vw] font-poppins font-medium leading-normal tracking-[0.005rem] line-clamp-2'
                                title={framework.label}
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        value === framework.value ? 'opacity-100' : 'opacity-0',
                                    )}
                                />
                                {framework.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
