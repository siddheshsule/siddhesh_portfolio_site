'use client'

import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

type LiProps = {
  href: string;
  children: ReactNode;
  isActive: boolean;
};

const Li = ({ href, children, isActive }: LiProps) => {
  return (
    <li
      className={`hover:text-white text-lg tracking-wider transition-colors duration-200 ${
        isActive ? "text-white" : "hover:text-white"
      } active:text-white`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(()=>{
        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects','contact'];
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if(!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >=100;
            });
            setActiveSection(currentSection || '');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

  return (
    <div>
      <ul className="flex gap-6 uppercase tracking-normal">
        <Li href="#about" isActive={activeSection === 'about'}>About</Li>
        <Li href="#experience" isActive={activeSection === 'experience'}>Experience</Li>
        <Li href="#projects" isActive={activeSection === 'projects'}>Projects</Li>
        <Li href="#contact" isActive={activeSection === 'contact'}>Contact</Li>
      </ul>
    </div>
  );
};

export default Navbar;
