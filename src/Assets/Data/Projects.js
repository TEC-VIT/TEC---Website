import VisionForBlind from '../VisionForBlind.png'
import projectPoster from '../userimg.png'
import MasterSlaveRobotArm from '../MasterSlaveRobotArm.png'

const Projects = [
    {
        id: 1,
        name: "Vision For Blind",
        poster: VisionForBlind,
        description: 'The proposed smart goggles help visually impaired people in their day to day life. It has machine learning models embedded in it that help to detect any kind of real-world object and also feed the same data as auditory outputs. This system is also capable of recognizing any known person that has to be previously stored in the database. In this way, it can assist and guide the visually impaired person by telling them about the surroundings so that they can get a feeling of it.'
    }, 
    {
        id: 2,
        name: "Master Slave Robot Arm",
        poster: MasterSlaveRobotArm,
        description: '• Objective: Developed a prototype arm that could imitate the actions of a master arm. \n• Slave arm’s fingers controlled by flex sensors present on the master arm using servo motors. \n• Tools/Technologies used: Arduino Uno, Flex Sensors, Servo motors and programmed in Embedded C.'
    },
    {
        id: 3,
        name: "Iris controlled wheelchair prototype for paralysis patients",
        poster: projectPoster,
        description: 'The project aims to aid the patient suffering from complete paralysis. With the help of IoT, Embedded System, and Computer vision tools a wheelchair prototype was made whose movement can be controlled by moving the Iris of the Eye. With room for more add-ons, features like GPS location, monitoring the wheelchair, or fall detection, and more gestures can be customized to the wheelchair when eye movements like blinking are taken into account. This project tries to provide a bit of freedom to those who require constant help/monitoring.'
    },
    {
        id: 4,
        name: "Smart Workspace",
        poster: projectPoster,
        description: 'Making use of Computer vision algorithms along with sensor interfacing, smart workspace is a project that aims to build smart and eco-friendly workspaces/office spaces. In these workspaces, the electronic device usage can be monitored and restricted based on the occupancy in one particular area of the workspace. With its efficient feedback loop mechanism, the system sends data in real-time to the user via a mobile application. The application helps the user monitor and keep track of the activities in the office space.'
    },
    {
        id: 5,
        name: "Pic to Code",
        poster: projectPoster,
        description: 'This project aims to convert a hand-drawn design of a website into actual HTML and CSS code. Datasets of elements such as text fields, dropdowns, etc are used to detect the number of fields(dropdowns, text fields, etc), the field position, and its dimensions. The output is a well-defined HTML and CSS code for the input sketch/picture.'
    },
    {
        id: 6,
        name: "Smart Wheelchair",
        poster: projectPoster,
        description: 'To develop a next-generation smart wheelchair for people suffering from paralysis and are handicapped, which will help them to come over their self mobility constraints. To develop a low cost, reliable, easily controllable, and green wheelchair. People affected by any form of paralysis like Monoplegia, Paraplegia, Quadriplegia, ALS, etc, can be assisted by this chair. Irrespective of the  paralysis type, this system helps the person to move on their own and reduce the dependency on others. '
    }
]

export default Projects