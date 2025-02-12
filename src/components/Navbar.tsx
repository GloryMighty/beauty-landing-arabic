
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const languages = [
  { code: 'ar', name: 'العربية' },
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
];

export const Navbar = () => {
  const [currentLang, setCurrentLang] = useState('ar');

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold">
          Beauty Clinic
        </a>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-8">
            <NavigationMenuItem>
              <a href="#services" className="text-sm font-medium hover:text-primary/80 transition-colors">
                Services
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
                Pricing
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">
                {languages.find(l => l.code === currentLang)?.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-32 gap-2 p-4">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm"
                        onClick={() => setCurrentLang(lang.code)}
                      >
                        {lang.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.nav>
  );
};
