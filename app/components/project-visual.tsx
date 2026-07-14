import type { Project } from "../data/portfolio";

export function ProjectVisual({ type, compact = false }: { type: Project["visual"]; compact?: boolean }) {
  if (type === "support") {
    return (
      <div className={`project-visual visual-support ${compact ? "compact" : ""}`} aria-label="Abstract Supportly product interface">
        <div className="mock-top"><i /><i /><i /><span>Supportly / Agent workspace</span></div>
        <div className="support-layout">
          <div className="mock-sidebar"><b>Queue</b><span className="active">All conversations <em>12</em></span><span>Assigned to me <em>4</em></span><span>Unassigned <em>3</em></span><span>Resolved <em>28</em></span></div>
          <div className="mock-ticket"><small>Ticket #1048 · HIGH PRIORITY</small><strong>Unable to access billing portal</strong><p>Customer reports an authentication loop after changing plan.</p><div className="message-bubble">Thanks for flagging this. I’m checking the account state now.</div></div>
          <div className="mock-copilot"><small>AI COPILOT</small><strong>Suggested next step</strong><p>Verify tenant membership and refresh the user’s access token.</p><button tabIndex={-1}>Use suggestion</button></div>
        </div>
      </div>
    );
  }
  if (type === "travel") {
    return (
      <div className={`project-visual visual-travel ${compact ? "compact" : ""}`} aria-label="Abstract TravelSphere multi-agent workflow">
        <div className="travel-orbit"><span className="orbit-core">Trip<br />brief</span><span>Flights</span><span>Hotels</span><span>Itinerary</span><span>Format</span></div>
        <div className="travel-plan"><small>TOKYO · 3 DAYS</small><strong>Your plan is ready</strong><div><i>01</i><p><b>Arrive & explore</b><br />Shibuya · Meiji Shrine</p></div><div><i>02</i><p><b>Modern Tokyo</b><br />TeamLab · Ginza</p></div></div>
      </div>
    );
  }
  return (
    <div className={`project-visual visual-workspace ${compact ? "compact" : ""}`} aria-label="Abstract LunarkChat AI workspace">
      <div className="workspace-nav"><span>✦ Lunark</span><i /><i /><i /></div>
      <div className="workspace-chat"><small>GEMINI 2.5 FLASH · RAG ACTIVE</small><div className="user-prompt">Summarize the uploaded report and identify the key risks.</div><div className="ai-response"><b>✦ Analysis</b><span /><span /><span className="short" /><small>3 sources · Report.pdf</small></div></div>
      <div className="workspace-files"><small>CONTEXT</small><strong>Report.pdf</strong><span>42 pages · indexed</span><div>Web search <b>ON</b></div><div>Long-term memory <b>ON</b></div></div>
    </div>
  );
}
