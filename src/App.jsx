import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const initialTickets = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still can't access their account.",
    customer: "John Smith",
    priority: "HIGH",
    status: "Open",
    createdAt: "2024-01-15",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "HIGH",
    status: "Open",
    createdAt: "2024-01-16",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is unresponsive.",
    customer: "Michael Brown",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2024-01-17",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    description:
      "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "LOW",
    status: "Open",
    createdAt: "2024-01-18",
  },
  {
    id: "#1005",
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Sophia Taylor",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2024-01-20",
  },
  {
    id: "#1006",
    title: "App Crash on Launch",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    customer: "David Wilson",
    priority: "HIGH",
    status: "Open",
    createdAt: "2024-01-19",
  },
  {
    id: "#1007",
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "James Anderson",
    priority: "HIGH",
    status: "Open",
    createdAt: "2024-01-21",
  },
  {
    id: "#1008",
    title: "Unable to Update Profile Picture",
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: "Olivia Martinez",
    priority: "LOW",
    status: "Open",
    createdAt: "2024-01-22",
  },
  {
    id: "#1009",
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Liam Thomas",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2024-01-17",
  },
  {
    id: "#1010",
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2024-01-24",
  },
];

const priorityStyles = {
  HIGH: "priority high",
  MEDIUM: "priority medium",
  LOW: "priority low",
};

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const activeTickets = useMemo(
    () => tickets.filter((ticket) => ticket.status !== "Resolved"),
    [tickets]
  );

  const inProgressTickets = useMemo(
    () => tickets.filter((ticket) => ticket.status === "In-Progress"),
    [tickets]
  );

  const inProgressCount = inProgressTickets.length;
  const resolvedCount = resolvedTickets.length;

  function addToInProgress(ticketId) {
    setTickets((prev) => {
      const ticket = prev.find((t) => t.id === ticketId);
      if (!ticket) return prev;

      if (ticket.status === "In-Progress") {
        toast.info("Ticket is already in progress.");
        return prev;
      }

      toast.success("Added to Task Status");
      return prev.map((t) =>
        t.id === ticketId ? { ...t, status: "In-Progress" } : t
      );
    });
  }

  function completeTicket(ticketId) {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    setTickets((prev) => prev.filter((t) => t.id !== ticketId));
    setResolvedTickets((prev) => [...prev, { ...ticket, status: "Resolved" }]);
    toast.success("Ticket completed and moved to resolved list");
  }

  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2200}
        pauseOnHover
        closeOnClick
      />

      <header className="topbar">
        <div className="brand">
          <div className="logo-strip">
            <span className="logo-dot" />
            <span className="logo-dot" />
            <span className="logo-dot" />
          </div>
          <span className="brand-name">CS — Ticket System</span>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            FAQ
          </a>
          <a href="#" className="nav-link">
            Changelog
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Download
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>

        <button className="button primary">+ New Ticket</button>
      </header>

      <main className="page">
        <section className="stats">
          <div className="stat-card in-progress">
            <div className="stat-title">In-Progress</div>
            <div className="stat-value">{inProgressCount}</div>
          </div>

          <div className="stat-card resolved">
            <div className="stat-title">Resolved</div>
            <div className="stat-value">{resolvedCount}</div>
          </div>
        </section>

        <section className="content">
          <div className="panel tickets">
            <div className="panel-header">
              <h2>Customer Tickets</h2>
              <div className="panel-subtitle">Click a ticket to start working on it</div>
            </div>

            <div className="tickets-list">
              {activeTickets.length === 0 ? (
                <div className="tickets-empty">
                  No active tickets. All tasks are resolved.
                </div>
              ) : (
                activeTickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    className="ticket"
                    onClick={() => addToInProgress(ticket.id)}
                  >
                    <div className="ticket-top">
                      <div className="ticket-info">
                        <strong className="ticket-title">{ticket.title}</strong>
                        <p className="ticket-desc">{ticket.description}</p>
                      </div>
                      <div className="ticket-meta">
                        <span
                          className={`ticket-status ${ticket.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {ticket.status}
                        </span>
                        <span className={priorityStyles[ticket.priority]}>
                          {ticket.priority}
                        </span>
                      </div>
                    </div>

                    <div className="ticket-bottom">
                      <span className="ticket-id">{ticket.id}</span>
                      <span className="ticket-date">{ticket.createdAt}</span>
                      <span className="ticket-customer">{ticket.customer}</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          <aside className="panel status">
            <div className="panel-header">
              <h2>Task Status</h2>
              <div className="panel-subtitle">Tickets you are currently working on</div>
            </div>

            {inProgressTickets.length === 0 ? (
              <div className="status-empty">
                Click a ticket card to add it to the task status.
              </div>
            ) : (
              <div className="task-list">
                {inProgressTickets.map((ticket) => (
                  <div key={ticket.id} className="task">
                    <div className="task-title">{ticket.title}</div>
                    <button
                      className="button success"
                      onClick={() => completeTicket(ticket.id)}
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="status-footer">
              <h3>Resolved Tasks</h3>
              {resolvedTickets.length === 0 ? (
                <p>No resolved tasks yet.</p>
              ) : (
                <div className="resolved-list">
                  {resolvedTickets.map((ticket) => (
                    <div key={ticket.id} className="resolved-item">
                      <span className="resolved-title">{ticket.title}</span>
                      <span className="resolved-meta">{ticket.id}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>CS — Ticket System</h3>
            <p>
              A simple dashboard for tracking customer support requests with an
              interactive task workflow.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Our Mission</a>
            <a href="#">Contact Sales</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Products & Services</a>
            <a href="#">Customer Stories</a>
            <a href="#">Download Apps</a>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Join Us</a>
          </div>
          <div className="footer-col footer-social">
            <h4>Social Links</h4>
            <a href="#" className="social-link">
              <span className="social-icon">✕</span>
              <span>@CS — Ticket System</span>
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">in</span>
              <span>@CS — Ticket System</span>
            </a>
            <a href="#" className="social-link">
              <span className="social-icon">f</span>
              <span>@CS — Ticket System</span>
            </a>
            <a href="mailto:support@cs.com" className="social-link">
              <span className="social-icon">✉</span>
              <span>support@cs.com</span>
            </a>
          </div>
        </div>
        <div className="footer-note">© 2025 CS — Ticket System. All rights reserved.</div>
      </footer>
    </div>
  );
}
