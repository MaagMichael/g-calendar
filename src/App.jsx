import { useState } from "react";
import "./App.css";

function App() {
  const room1_key = "NjRlNDA3YjUzMDc0ODZjYjA4NTkwYmQ2NWY0NjQ1OWI4NzE4MTdhMGQ2MjQ0MDNiOTdmNTRjNDQ2MTQ4MDY2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
  const room2_key = "YThkMzMyOTY1YTY1MmM1MTMzM2ZjZjRlNzgxYmQxZTBhYzhmMDYzN2QxYjZmMTI3NGM5OWRhZWNkMzNmOGVkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"

  return (
    <>
      <h1>Google Calendar read out</h1>
      
        {/* src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&showNav=1&showDate=1&showTabs=0&showCalendars=0&showTz=0&hl=en_GB&src=NjRlNDA3YjUzMDc0ODZjYjA4NTkwYmQ2NWY0NjQ1OWI4NzE4MTdhMGQ2MjQ0MDNiOTdmNTRjNDQ2MTQ4MDY2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00" */}
      
      <h3>Room 1</h3>

      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&showNav=1&showDate=1&showTabs=0&showCalendars=0&showTz=0&hl=en_GB&src=NjRlNDA3YjUzMDc0ODZjYjA4NTkwYmQ2NWY0NjQ1OWI4NzE4MTdhMGQ2MjQ0MDNiOTdmNTRjNDQ2MTQ4MDY2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
      ></iframe>

      <h3>Room 2</h3>

      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&showNav=1&showDate=1&showTabs=0&showCalendars=0&showTz=0&hl=en_GB&src=YThkMzMyOTY1YTY1MmM1MTMzM2ZjZjRlNzgxYmQxZTBhYzhmMDYzN2QxYjZmMTI3NGM5OWRhZWNkMzNmOGVkY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
      ></iframe>
    </>
  );
}

export default App;
