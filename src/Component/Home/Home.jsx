import { Link, useLoaderData } from "react-router";
import App from "../App/App";


const Home = () => {




    const apk = useLoaderData();
    console.log(apk)



    return (
        <div>
            <section class="py-16 px-4">
                <div class="container mx-auto text-center">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">
                        We Build <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Productive</span> Apps
                    </h1>
                    <p class="text-gray-600 max-w-3xl mx-auto mb-8">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button class="bg-white border border-gray-300 rounded-lg px-6 py-3 flex items-center justify-center hover:bg-gray-50 transition">
                            <a className='flex gap-2.5' href="https://play.google.com/store/games?hl=en">

                                <img src={'https://i.ibb.co.com/ycKsP2gT/fi-16076057.png'} alt="" />
                                <span>Play store</span>
                            </a>
                        </button>
                        <button class="bg-white border border-gray-300 rounded-lg px-6 py-3 flex items-center justify-center hover:bg-gray-50 transition">
                            <a className='flex gap-2.5' href="https://www.apple.com/app-store/" >
                                <img src={'https://i.ibb.co.com/8gmQyfNy/Group.png'} alt="" className='items-center' />
                                <span>App store</span>
                            </a>
                        </button>
                    </div>

                    <div class="relative max-w-4xl mx-auto">
                        {/* <img src="https://placehold.co/400x700/1f2937/ffffff?text=App+Screenshot" alt="Mobile App" class="mx-auto rounded-3xl shadow-2xl relative z-10"> */}

                        <img src={'https://i.ibb.co.com/wFZJcY1D/hero.png'} alt="" />

                    </div>
                </div>
            </section>

            <section class="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Trusted By Millions, Built For You</h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="text-xs uppercase tracking-wide opacity-80 mb-2">Total Downloads</div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">29.6M</div>
                            <div class="text-sm opacity-80">21% More Than Last Month</div>
                        </div>

                        <div class="text-center">
                            <div class="text-xs uppercase tracking-wide opacity-80 mb-2">Total Reviews</div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">906K</div>
                            <div class="text-sm opacity-80">46% More Than Last Month</div>
                        </div>

                        <div class="text-center">
                            <div class="text-xs uppercase tracking-wide opacity-80 mb-2">Active Apps</div>
                            <div class="text-4xl md:text-5xl font-bold mb-2">132+</div>
                            <div class="text-sm opacity-80">31 More Will Launch</div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-16 px-4">
                <div class="container mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Trending Apps</h2>
                    <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* the card   ............... */}
                        {

                            apk.map(apps => <App apps={apps}></App>)


                        }
                    </div>

                    <div class="text-center mt-12">

                        <Link to="/apps">   <button class="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition">
                            Show All
                        </button>  </Link>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;




//  <span class="font-bold text-purple-600"><NavLink  to="/">HERO.IO</NavLink></span>