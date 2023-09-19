'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// const frameworks = [
//     {
//         value: 'hagianglooptour',
//         label: 'HA GIANG LOOP TOUR',
//     },
//     {
//         value: 'epicmotorbiketour',
//         label: 'EPIC MOTORBIKE TOUR',
//     },
// ]
const frameworks = [
    {
        value: 'next.js',
        label: 'HAGIANGLOOPTOUR',
    },
    {
        value: 'sveltekit',
        label: 'EPICMOTORBIKETOUR',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
]

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(frameworks[0]?.value)
    console.log('🚀 ~ file: combobox.jsx:47 ~ ComboboxDemo ~ value:', value)

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
                    className='w-[200px] justify-between text-[1vw] font-poppins font-medium leading-normal tracking-[0.005rem] text-gray-scale-80'
                >
                    {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select framework...'}
                    <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
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
