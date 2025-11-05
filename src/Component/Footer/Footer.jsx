import React from 'react';

const Footer = () => {
    return (
        <div>
      <footer class="bg-gray-900 text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <div class="flex items-center space-x-2 mb-4 md:mb-0">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <i class="fas fa-play text-white text-xs"></i>
                    </div>
                    <span class="font-bold text-purple-300">HERO.IO</span>
                </div>
                
                <div class="text-center md:text-right">
                    <h4 class="font-semibold mb-2">Social Links</h4>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                Copyright © 2025 - All rights reserved
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;