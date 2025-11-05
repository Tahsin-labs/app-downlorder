import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { addToStoreDB } from '../alljs/all';
const AppDetails = () => {

    const { id } = useParams()
    // console.log(id)
    //   the useLoderData is for loding data from fatch data....
    const data = useLoaderData()
    const singleData = data.find(detailapk => detailapk.id == id);
    const { title, downloads, ratingAvg, reviews, ratings,image } = singleData;


    // console.log(ratings);


const handleInstall = id =>{



addToStoreDB(id)

}





    return (
        <div>
            <div class="max-w-6xl mx-auto px-4 py-8">

                <div class="flex flex-col md:flex-row gap-8 items-start mb-8 border-b pb-8">

                    <div class="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
                           <img src={image} alt="" />
                    </div>

                    <div class="flex-1">
                        <h1 class="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
                        <p class="text-gray-600 mb-4">Developed by <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">Tahsin.Lab</a></p>


                        <div class="flex flex-wrap gap-6 mb-4">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-download text-green-600 text-xl"></i>
                                <div>
                                    <div class="text-xs text-gray-500">Downloads</div>
                                    <div class="text-2xl font-bold">{downloads}</div>
                                </div>
                            </div>

                            <div class="flex items-center gap-2">
                                <i class="fas fa-star text-yellow-500 text-xl"></i>
                                <div>
                                    <div class="text-xs text-gray-500">Average Ratings</div>
                                    <div class="text-2xl font-bold">{ratingAvg}</div>
                                </div>
                            </div>

                            <div class="flex items-center gap-2">
                                <i class="fas fa-comment-dots text-purple-600 text-xl"></i>
                                <div>
                                    <div class="text-xs text-gray-500">Total Reviews</div>
                                    <div class="text-2xl font-bold">{reviews}</div>
                                </div>
                            </div>
                        </div>




                       

                            <button onClick={()=> handleInstall(id)} class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                Install Now (291 MB)
                            </button>
                           




                    </div>
                </div>




                <div class="border-b ">


                    <BarChart width={400} height={250} data={ratings}>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis ></YAxis>
                        <Bar dataKey="count" fill='#FF8811'></Bar>
                    </BarChart>

                </div>





                <div class="mt-9">
                    <h2 class="text-xl font-bold mb-4">Description</h2>
                    <div class="prose prose-lg max-w-none">
                        <p class="mb-4">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>

                        <p class="mb-4">A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>

                        <p class="mb-0">For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;