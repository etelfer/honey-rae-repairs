import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilter } from "./TicketFilter.jsx"


export const TicketList = () => {

  const [allTickets, setAllTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
    setAllTickets(ticketsArray)
    console.log("tickets set!")
  })
  }, []) //ONLY runs on initial render of component, is getting tickets using fetch in other module and putting them into an array to be used later.

    useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
     ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
)
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])
  // takes all tickets and filters them by what is in the description so when what is typed in the search matches it will only display those that match.  this is a flag that only runs when it sees that search term or allTickets changes and then rerenders filtering based on what either changed to.

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
    setFilteredTickets(emergencyTickets)
    }
    else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])
  // if show emergency only is selected, then filter all tickets that if the ticket's emergency keys value is true it will display but if show emergency only is not selected then just show all tickets. this is a flag that only runs when it sees that showEmergencyOnly or allTickets changes and then rerenders filtering based on what either changed to.


  return ( <div className="tickets-container">
    <h2>Tickets</h2>
<TicketFilter 
setShowEmergencyOnly={setShowEmergencyOnly} 
setSearchTerm={setSearchTerm}/>
    <article className="tickets">
      {filteredTickets.map((ticketObj) => {
        return <Ticket ticket={ticketObj}  key={ticketObj.id}/>
      })}
    </article>
    </div>
  )
}