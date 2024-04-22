import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './AccordionsDemo';

interface ContentProps {
  id: string;
  text: string;
  answer: string;
}

interface AccordionDemoProps {
  content: ContentProps[];
}

const Accordions = ({ content }: AccordionDemoProps) => {
  return (
    <Accordion.Root
      className="bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/15"
      type="single"
      collapsible
    >
      {content.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
        >
          <AccordionTrigger>{item.text}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion.Root>
  );
};

export default Accordions;
