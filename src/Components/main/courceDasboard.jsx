import React, { useState } from 'react';
import { auth } from "../reuse/auth/firebase";
import {signOut} from 'firebase/auth';
import { Search, Bell, Mail, User, Settings, LogOut, Home, Inbox, BookOpen, CheckSquare, Users, ChevronRight, ChevronLeft, Edit, MoreVertical, Menu, X } from 'lucide-react';
import Course1 from "../../assets/img1.jpg"
import { useNavigate } from 'react-router-dom';
const CourseCard = ({ title, type, progress, instructor }) => (
  <div className="rounded-xl overflow-hidden shadow-md bg-white">
    <div className="relative h-32  bg-gray-200">
    <img src={Course1} style={{backgroundSize:"cover", backgroundPosition:"center"}} className="relative h-32 w-full bg-gray-200"/>
      <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
        <MoreVertical size={16} />
      </div>
    </div>
    <div className="p-4">
      <div className="mb-2">
        <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase" 
              style={{ backgroundColor: type === 'FRONTEND' ? '#f3e8ff' : '#e0f2fe', 
                       color: type === 'FRONTEND' ? '#9333ea' : '#0284c7' }}>
          {type}
        </span>
      </div>
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
          ))}
        </div>
        <span className="ml-2 text-xs text-gray-500">+{progress}</span>
        <button className="ml-auto bg-purple-600 rounded-full p-1">
          <ChevronRight size={16} color="white" />
        </button>
      </div>
    </div>
  </div>
);

const CourseProgressCard = ({ type, title, watched }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm relative">
    <div className="absolute top-2 right-2">
      <MoreVertical size={16} />
    </div>
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
      <div className="w-5 h-5 bg-purple-600 rounded-full" />
    </div>
    <div className="text-xs text-gray-600">{watched} Watched</div>
    <div className="text-sm font-medium text-center">{title}</div>
    <div className="absolute top-2 left-2">
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-purple-100">
        <div className="w-3 h-3 bg-purple-600 rounded-full" />
      </div>
    </div>
  </div>
);

const CourseRow = ({ instructor, date, type, title , profile}) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center py-3 border-b border-gray-100">
    <div className="flex items-center gap-3">
      <img src={profile} className="w-8 h-8 rounded-full" />
      <div>
        <div className="text-sm font-medium">{instructor}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
    </div>
    <div className="mt-2 md:mt-0">
      <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase" 
            style={{ backgroundColor: type === 'FRONTEND' ? '#f3e8ff' : '#e0f2fe', 
                     color: type === 'FRONTEND' ? '#9333ea' : '#0284c7' }}>
        {type}
      </span>
    </div>
    <div className="text-sm mt-2 md:mt-0">{title}</div>
    <div className="flex justify-end mt-2 md:mt-0">
      <button className="p-1 rounded text-gray-500 hover:bg-gray-100">
        <Edit size={16} />
      </button>
    </div>
  </div>
);

const MentorCard = ({ name, role, profile }) => (
  <div className="flex items-center justify-between my-2">
    <div className="flex items-center gap-3">
      <img src={profile} className="w-8 h-8 rounded-full" />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
    <button className="px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
      Follow
    </button>
  </div>
);

const CoursueDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm">
        <button onClick={toggleSidebar} className="p-2">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-600" />
          <span className="font-bold text-lg text-purple-700">UNIQUE SOLUTIONS</span>
        </div>
        <button onClick={toggleRightSidebar} className="p-2">
          <User size={24} />
        </button>
      </div>

      <div className="flex relative">
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static top-0 left-0 z-40 h-screen bg-white w-62 border-r border-gray-100 p-4 md:block`}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-600" />
              <span className="font-bold text-lg text-purple-700">UNIQUE SOLUTIONS</span>
            </div>
            <button className="md:hidden" onClick={toggleSidebar}>
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-4">OVERVIEW</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-purple-700 font-medium">
                <Home size={20} />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Inbox size={20} />
                <span>Inbox</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <BookOpen size={20} />
                <span>Lesson</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <CheckSquare size={20} />
                <span>Task</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Users size={20} />
                <span>Group</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="text-xs font-semibold text-gray-500 mb-4">FRIENDS</div>
            <ul className="space-y-3">
              {[
                { name: 'Andrew Meter', role: 'Software Developer', profile: 'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552712/profile_9_wzaoie.png' },
                { name: 'Jeff Linkoin', role: 'Product Owner', profile: 'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552714/profile_8_zbiivp.png' },
                { name: 'Sasha Melstone', role: 'HR Manager' , profile: 'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552708/profile_2_ex2ycu.png' },
              ].map(friend => (
                <li key={friend.name} className="flex items-center gap-3">
                  <img src={friend.profile} className="w-8 h-8 rounded-full bg-gray-300" />
                  <div>
                    <div className="text-sm font-medium">{friend.name}</div>
                    <div className="text-xs text-gray-500">{friend.role}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="text-xs font-semibold text-gray-500 mb-4">SETTINGS</div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <Settings size={20} />
                <span>Settings</span>
              </li>
              <li>
                <button className="flex items-center gap-3 text-red-500" onClick={handleLogout}>
                <LogOut size={20} />
                <span>Logout</span>
                </button>
                
              </li>
            </ul>
          </div>
        </div>

        {(sidebarOpen || rightSidebarOpen) && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => {
              setSidebarOpen(false);
              setRightSidebarOpen(false);
            }}
          />
        )}
  
        <div className="flex-1 p-4 md:p-6 w-full">
          <div className="hidden md:flex justify-between mb-6">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search your course here..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
            <div className="flex items-center">
              <button className="p-2">
                <Settings size={20} />
              </button>
            </div>
          </div>

          <div className="md:hidden relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search your course here..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
          </div>         
    
          <div className="bg-purple-500 rounded-xl p-4 md:p-6 mb-6 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-purple-400 opacity-60 -mr-10 -mb-10" />
            <div>
              <div className="text-xs font-medium text-purple-100 mb-1">ONLINE COURSE</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Sharpen Your Skills With<br />Professional Online Courses</h2>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                Join Now
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
  
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <CourseProgressCard type="Frontend" title="Front-end" watched="8/15" />
              <CourseProgressCard type="Backend" title="Back-end" watched="3/14" />
              <CourseProgressCard type="Design" title="Product Design" watched="2/8" />
              <CourseProgressCard type="Management" title="Project Manager" watched="9/10" />
            </div>
          </div>
    
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Continue Watching</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded-full border border-gray-200">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1 rounded-full border border-gray-200">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <CourseCard
                title="Beginner's Guide To Becoming A Professional Frontend Developer"
                type="FRONTEND"
                progress="124"
                instructor="Alex Morgan"
              />
              <CourseCard
                title="Beginner's Guide To Becoming A Professional Backend Developer"
                type="BACKEND"
                progress="27"
                instructor="Nikolas Helmet"
              />
              <CourseCard
                title="Beginner's Guide To Becoming A Professional Frontend Developer"
                type="FRONTEND"
                progress="87"
                instructor="Andrew Kooller"
              />
            </div>
          </div>
  
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Mentor</h3>
              <a href="#" className="text-sm text-purple-600">See All</a>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'Alex Morgan', date: '25/02/2023', type: 'FRONTEND', title: 'Understanding Concept Of React' , profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552566/samples/man-on-a-street.jpg'},
                { name: 'Nikolas Helmet', date: '18/03/2023', type: 'BACKEND', title: 'Concept Of The Data Base', profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552707/profile_11_v9oamq.png' },
                { name: 'Josh Freakson', date: '12/04/2023', type: 'BACKEND', title: 'Core Development Approaches', profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552707/profile_14_flxrlx.png' }
              ].map(course => (
                <CourseRow
                  key={course.name}
                  instructor={course.name}
                  date={course.date}
                  type={course.type}
                  title={course.title}
                  profile={course.profile}
                />
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex items-center">
              <img src='https://res.cloudinary.com/dxutqk10a/image/upload/v1739552712/profile19_ufjfc7.png' className="w-12 h-12 rounded-full border-2 border-purple-500 mr-3"/>
              <div>
                <h3 className="font-semibold">V</h3>
                <p className="text-xs text-gray-500">Continue Your Journey</p>
              </div>
            </div>
            <button 
              onClick={toggleRightSidebar}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs"
            >
              View Profile
            </button>
          </div>
        </div>
 
        <div className={`${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static top-0 right-0 z-40 h-screen bg-white w-64 border-l border-gray-100 p-6 overflow-y-auto`}>
          <div className="flex justify-between items-center md:hidden mb-6">
            <h3 className="font-semibold">Your Profile</h3>
            <button onClick={toggleRightSidebar}>
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col items-center mb-6">
          <img src='https://res.cloudinary.com/dxutqk10a/image/upload/v1739552712/profile19_ufjfc7.png' className="w-12 h-12 rounded-full border-2 border-purple-500 mr-3"/>
            <h3 className="font-semibold mb-1">VIDHYA S</h3>
            <p className="text-xs text-center text-gray-500">Continue Your Journey And Achieve Your Target</p>
            
            <div className="flex justify-between w-full mt-4">
              <button className="p-2 rounded-full border border-gray-200">
                <Bell size={16} />
              </button>
              <button className="p-2 rounded-full border border-gray-200">
                <Mail size={16} />
              </button>
              <button className="p-2 rounded-full border border-gray-200">
                <User size={16} />
              </button>
            </div>
          </div>
       
          <div className="mb-6">
            <div className="h-32 flex items-end justify-between">
              {[40, 60, 75, 90, 100].map((height, i) => (
                <div key={i} className="w-6 rounded-t-md bg-gradient-to-t from-purple-700 to-purple-300" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>          
        
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Mentor</h3>
              <button className="p-1 rounded-full border border-gray-200">
                <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'Kiliam Rosvelt', role: 'Software Developer' , profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552712/profile_10_ncqagf.png'  },
                { name: 'Teodor Maskevich', role: 'Project Owner' , profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552710/profile_3_qscjmt.png' },
                { name: 'Andrew Kooller', role: 'Frontend Developer', profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552712/profile_6_nimu42.png'  },
                { name: 'Adam Chekish', role: 'Backend Developer' , profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552709/profile_21_ebnzfs.png'  },
                { name: 'Anton Peterson', role: 'Software Developer', profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552566/samples/look-up.jpg'  },
                { name: 'Matew Jackson', role: 'Product Designer', profile:'https://res.cloudinary.com/dxutqk10a/image/upload/v1739552566/samples/smile.jpg'  }
              ].map(mentor => (
                <MentorCard key={mentor.name} name={mentor.name} role={mentor.role} profile={mentor.profile} />
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-purple-600">See All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursueDashboard;