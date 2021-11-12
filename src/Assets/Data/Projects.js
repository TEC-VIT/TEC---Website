import VisionForBlind from '../Projects/VisionForBlind.webp'
import MasterSlaveRobotArm from '../Projects/MasterSlaveRobotArm.webp'
import IrisControlledWheelchair from '../Projects/IrisControlledWheelchair.webp'
import PicToCode from '../Projects/PinToCode.webp'
import SmartWorkspace from '../Projects/SmartWorkspace.webp'
import SmartAmbience from '../Projects/SmartAmbience.webp'
import Greenhouse from '../Projects/Greenhouse.webp'
import LiFiIndoorNavigationSystem from '../Projects/LiFiIndoorNavigationSystem.webp'

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
        name: "Smart Ambience",
        likes: 0,
        poster: SmartAmbience,
        intro: "Building an efficient power management system for homes", 
        date: "15/2/21",
        description: "This project revolves around building an efficient power management system for homes wherein we can control the lights, ACs, fans, and other devices according to our requirement. We collect the datasets of temperature, humidity and light intensity patterns of a particular area and automate electronic devices using those"
    },
    {
        id: 5,
        name: "Li-Fi Indoor Navigation",
        likes: 0,
        poster: LiFiIndoorNavigationSystem,
        intro: "Creating an app for indoor navigation system using Light Fidelity which can also be used easily by the visually impaired", 
        date: "15/2/21",
        description: "GPS and other satellite technologies lack precision or fail entirely, such as inside multistory buildings. Using Indoor navigation we can visualise the inside of a building and navigate ourselves through it. Usage of LED lights reduces 50% of total energy consumption. This facilitates a future in front of us; Li-Fi. This technology is used for transmitting data through Visible Light Communication(VLC)."
    },{
        id: 6,
        name: "Green House Climate Controller",
        likes: 0,
        poster: Greenhouse,
        intro: "A Greenhouse Climate Controller System that can help agricultural researchers study the growth, bearing and general physiological activity of specific plant species under various climatic conditions.", 
        date: "15/2/21",
        description: "This project is aimed at creating a Greenhouse Climate Controller System that can help agricultural researchers study the growth, bearing of fruits and flowers, health, and general physiological activity of specific plant species under various climatic conditions. Environmental Parameters like Temperature, Humidity, Ambient Light and Soil Moisture are kept under control as per crop need, using Sensors and Devices like AC, Dehumidifiers, Light, Foggers, and Water Pumps."
    },
    {
        id: 7,
        name: "Smart Workspace",
        likes: 0,
        poster: SmartWorkspace,
        intro: 'Making use of Computer vision algorithms along with sensor interfacing, smart workspace is a project that aims to build smart and eco-friendly workspaces/office spaces.',
        date: '15/2/21',
        description: 'Making use of Computer vision algorithms along with sensor interfacing, smart workspace is a project that aims to build smart and eco-friendly workspaces/office spaces. In these workspaces, the electronic device usage can be monitored and restricted based on the occupancy in one particular area of the workspace. With its efficient feedback loop mechanism, the system sends data in real-time to the user via a mobile application. The application helps the user monitor and keep track of the activities in the office space.'
    }
]

export default Projects