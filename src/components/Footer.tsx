import React from 'react';
import { Bot, Linkedin, Twitter, Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative">
                <Bot size={24} className="text-[#4A148C]" />
                <div className="absolute inset-0 bg-[#4A148C] blur-sm opacity-50 rounded-full" />
              </div>
              <span className="text-white font-bold text-lg">Lockhart.AI</span>
            </div>
            <p className="mb-4 max-w-sm mx-auto">
              Advanced AI solutions for businesses looking to automate customer interactions and optimize lead generation.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white/70 hover:text-[#4A148C] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#4A148C] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#4A148C] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#4A148C] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">AI Chat Agents</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">CRM Integration</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Analytics Dashboard</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-[#4A148C] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="mb-4">&copy; 2025 Lockhart.AI. All rights reserved.</p>
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:text-[#4A148C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#4A148C] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#4A148C] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;