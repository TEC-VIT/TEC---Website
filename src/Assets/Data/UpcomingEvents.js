import UIUXPoster from '../UpcomingEvents/UI_UX.jpg'
import AppDevPoster from '../UpcomingEvents/AppDev.jpg'

// {
//     id: 1,
//     event: "WebDev Session",
//     time: "30-11-2020",
//     poster: webDevPoster,
//     registration: 'https://docs.google.com/forms/d/e/1FAIpQLScvdOGqVmcsYqPXd8WHmfMPZYKjC4UyTiLRVvN4VnpYKKDzLQ/viewform?embedded=true',
//     details: 'Event Details'
// }

const UpcomingEvents = [
    {
        id: 1,
        event: "IoT interfacing: UI/UX",
        time: "29th January, 2022 6:30PM",
        poster: UIUXPoster,
        details: <div>"Design is intelligence made visible."<br />TEC-VIT brings you an all new introductory UI/UX session focusing on the fundamentals of designing an IoT application for end-users. The session provides hands-on experience on how to design and implement a robust prototype of an app that can interact with IoT devices.<br /><br />Suited and booted for learning? Tune in to the first session of a thrilling two part App-Dev series to learn everything from the basics of UI/UX to the design of an IoT application.<br /><br />Join us at 6:30 PM on January 29th to know more about IoT Interfacing: UI/UX! Link in Bio!<br /><br />Register now on <a href='https://vtop.vit.ac.in/vtop/initialProcess' target='_blank' rel='noreferrer'>VTOP</a>! Stay Tuned!</div>
    },
    {
        id: 2,
        event: "IoT interfacing: App Dev",
        time: "30th January, 2022 6:30PM",
        poster: AppDevPoster,
        details: <div>Do you wanna dive deep into the basics of application development? Do you consider developing apps is equivalent to a thrilling quest? Do you find the need of a robust & easy to use frontend to control IoT/IIoT devices?<br /><br />If so, then our next session "IoT Interfacing : App Dev" is specially meant for you where we'll make you familiar with the basics of app development, such as application dev tools & environment, components, services, etc. followed by a workshop, full of creativity and panache to help you in building an application from scratch, to control and monitor real-time data in any electronics project.<br /><br />Register now on <a href='https://vtop.vit.ac.in/vtop/initialProcess' target='_blank' rel='noreferrer'>VTOP</a>! Happy developing ! :)</div>
    }
]

export default UpcomingEvents