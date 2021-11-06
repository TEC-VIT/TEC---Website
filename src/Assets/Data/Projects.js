import VisionForBlind from '../Projects/VisionForBlind.webp'
import MasterSlaveRobotArm from '../Projects/MasterSlaveRobotArm.webp'
import IrisControlledWheelchair from '../Projects/IrisControlledWheelchair.webp'
import PicToCode from '../Projects/PinToCode.webp'
import SmartWorkspace from '../Projects/SmartWorkspace.webp'

const Projects = [
    {
        id: 1,
        name: "Vision For Blind",
        likes: 0,
        poster: VisionForBlind,
        intro: "The proposed smart goggles help visually impaired people in their day to day life.", 
        date: '15/2/21',
        description: 'The proposed smart goggles help visually impaired people in their day to day life. It has machine learning models embedded in it that help to detect any kind of real-world object and also feed the same data as auditory outputs. This system is also capable of recognizing any known person that has to be previously stored in the database. In this way, it can assist and guide the visually impaired person by telling them about the surroundings so that they can get a feeling of it.'
    }, 
    {
        id: 2,
        name: "Master Slave Robot Arm",
        likes: 0,
        poster: MasterSlaveRobotArm,
        intro: 'Developed a prototype arm that could imitate the actions of a master arm.',
        date: '15/2/21',
        description: '• Objective: Developed a prototype arm that could imitate the actions of a master arm. \n• Slave arm’s fingers controlled by flex sensors present on the master arm using servo motors. \n• Tools/Technologies used: Arduino Uno, Flex Sensors, Servo motors and programmed in Embedded C.'
    },
    {
        id: 3,
        name: "Iris controlled wheelchair prototype for paralysis patients",
        likes: 0,
        poster: IrisControlledWheelchair,
        intro: 'The project aims to aid the patient suffering from complete paralysis.',
        date: '15/2/21',
        description: 'The project aims to aid the patient suffering from complete paralysis. With the help of IoT, Embedded System, and Computer vision tools a wheelchair prototype was made whose movement can be controlled by moving the Iris of the Eye. With room for more add-ons, features like GPS location, monitoring the wheelchair, or fall detection, and more gestures can be customized to the wheelchair when eye movements like blinking are taken into account. This project tries to provide a bit of freedom to those who require constant help/monitoring.'
    },
    {
        id: 4,
        name: "Smart Workspace",
        likes: 0,
        poster: SmartWorkspace,
        intro: 'Making use of Computer vision algorithms along with sensor interfacing, smart workspace is a project that aims to build smart and eco-friendly workspaces/office spaces.',
        date: '15/2/21',
        description: 'Making use of Computer vision algorithms along with sensor interfacing, smart workspace is a project that aims to build smart and eco-friendly workspaces/office spaces. In these workspaces, the electronic device usage can be monitored and restricted based on the occupancy in one particular area of the workspace. With its efficient feedback loop mechanism, the system sends data in real-time to the user via a mobile application. The application helps the user monitor and keep track of the activities in the office space.'
    }
]

export default Projects