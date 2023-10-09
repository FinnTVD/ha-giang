'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(className)}
        {...props}
    />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex flex-1 items-center justify-between py-[0.5rem] font-medium transition-all [&[data-state=open]>svg]:rotate-45 max-md:text-[3.733rem] leading-[1.57] tracking-[0.00933rem] max-md:pb-[2rem] text-[0.875rem]',
                className,props?.index===0?'max-md:mt-[4.27rem]':'max-md:mt-[8.67rem]',
                props?.indexTab === props?.index ? 'text-primary-70' : 'text-gray-scale-50',
            )}
            {...props}
        >
            {children}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='w-[1rem] h-[1rem] max-md:w-[4.5rem] max-md:h-[4.5rem] transition-all duration-300'
            >
                <path
                    d='M5.18137 2.33594V3.58565L11.4549 3.58565L2.33203 12.7085L3.21516 13.5916L12.3464 4.4771V10.7506H13.5961V2.33594L5.18137 2.33594Z'
                    fill={props?.indexTab === props.index ? '#B34B1E' : '#727272'}
                />
            </svg>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            'overflow-hidden text-[0.875rem] max-md:text-[3.733rem] transition-all leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            className,
        )}
        {...props}
    >
        <div className='pt-0 pb-4'>{children}</div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
