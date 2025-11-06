import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                  
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <img
                                src="https://i.ibb.co.com/93Wt51DN/logo.png"
                                alt="Logo"
                                className="w-8 h-8"
                            />
                            <h2 className="text-xl font-bold text-white">HERO.IO</h2>
                        </div>
                        <p className="text-sm">
                            Download and explore the best apps with HERO.IO — your trusted
                            platform for safe and fast app downloads.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://play.google.com/store/games?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="w-32"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    className="w-32"
                                />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-white transition">Home</a>
                            </li>
                            <li>
                                <a href="/apps" className="hover:text-white transition">Apps</a>
                            </li>
                            <li>
                                <a href="/installation" className="hover:text-white transition">Installation</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-3">Connect With Us</h3>
                        <p className="text-sm mb-3">Follow us on social media for updates and new app releases.</p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                    alt="Facebook"
                                    className="w-6 h-6 hover:opacity-80"
                                />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                    alt="Twitter"
                                    className="w-6 h-6 hover:opacity-80"
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                    alt="Instagram"
                                    className="w-6 h-6 hover:opacity-80"
                                />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                                    alt="YouTube"
                                    className="w-6 h-6 hover:opacity-80"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} HERO.IO — Created by Tahsin iiucan.
                </div>
            </footer>
        </div>
    );
};

export default Footer;