import { useState } from "react";
import "./App.css";

function App() {
  const room1_key =
    "ZDcwNThkOWQzODM5YzczZDYzNTM1Y2IxY2U5MDE4OWMwNjA2NTMzNmYyZjAzYjU0NzE5ZjAxMGI2NTVkMGYwYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
  const room2_key =
    "NDIxZjg0NzhlN2FlMjMzYjIzYmMyZTc2NDY2NDE2YzdjOGEwZWMzZjkzMWU1ZTA4ZTdhNjE4ZDAzZTFmYTBlNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
  
  return (
    <>
      <h1>Google Calendar read out</h1>
      {/* src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src= <KEY> &color=%23EF6C00"> */}
      <h3>Room 1</h3>
      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src=ZDcwNThkOWQzODM5YzczZDYzNTM1Y2IxY2U5MDE4OWMwNjA2NTMzNmYyZjAzYjU0NzE5ZjAxMGI2NTVkMGYwYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
      ></iframe>

      <h3>Room 2</h3>
      

      <iframe 
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src=NDIxZjg0NzhlN2FlMjMzYjIzYmMyZTc2NDY2NDE2YzdjOGEwZWMzZjkzMWU1ZTA4ZTdhNjE4ZDAzZTFmYTBlNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00">
      </iframe>
    </>
  );
}

export default App;
