"use client";

type ScriptLine = {
  label: string;
  speaker: string;
  copy: string;
  note?: string;
};

const scriptLines: ScriptLine[] = [
  {
    label: "Hook (0-5s)",
    speaker: "Creator selfie",
    copy:
      "I thought mastering CAD meant burning out... until this institute challenged me with a 7-day build sprint.",
    note: "Immediate tension between ambition and overwhelm."
  },
  {
    label: "Problem (5-12s)",
    speaker: "Creator voiceover + quick b-roll of messy sketches",
    copy:
      "I was stuck turning ideas into investor-ready models. Tutorials felt like puzzles dumped on my desk with no picture.",
    note: "Emotional context: frustration and lost confidence."
  },
  {
    label: "Value Proof (12-25s)",
    speaker: "Creator on screen highlighting dashboard",
    copy:
      "Their mentor-led micro-cohorts changed everything. Live critiques, AI-assisted workflows, and a brutal-but-fair capstone review? My prototype went from rookie block-out to funding-ready in three weeks.",
    note: "Concrete transformation anchored in value."
  },
  {
    label: "Entertainment Beat (25-32s)",
    speaker: "Creator goofy grin, split screen before/after",
    copy:
      "Also... they gamified revisions. I literally earned badges for fixing fillets. Yes, I bragged about XP points on a date.",
    note: "Light moment keeps attention high."
  },
  {
    label: "Social Proof (32-38s)",
    speaker: "Creator with phone screenshot",
    copy:
      "See this? Industry mentor marking my draft with laser-focused notes at 11:37 PM. They do not let you coast.",
    note: "UGC authenticity—real artifact."
  },
  {
    label: "CTA (38-45s)",
    speaker: "Creator direct address",
    copy:
      "If you want your CAD work to look like it belongs in a pitch deck, not a dorm room? Tap the link, grab their free skills audit, and see if you can survive week one.",
    note: "Bold, time-bound call to action."
  }
];

const emotionalBeats = [
  "Opens with vulnerability—fear of burnout and stagnation humanizes the creator.",
  "Showcases the moment confidence returns through mentor support.",
  "Ends with a daring challenge that stirs ambition and FOMO."
];

const valueBeats = [
  "Mentor-led micro-cohorts replace one-size-fits-all tutorials.",
  "AI-assisted workflow and capstone review compress learning into actionable sprints.",
  "Free skills audit CTA ties the video to a tangible next step."
];

export default function Page() {
  return (
    <main>
      <div className="grid">
        <section className="card">
          <span className="tag">UGC Script Blueprint</span>
          <h1 style={{ fontSize: "2.4rem", marginTop: "1rem", marginBottom: "0.75rem" }}>
            CAD Training Institute · 45s UGC Spot
          </h1>
          <p style={{ color: "rgba(148, 163, 184, 0.85)", lineHeight: 1.7 }}>
            High-converting user generated content script that blends emotional honesty with high-value proof points.
            Designed for vertical video with quick cuts, selfie shots, and dynamic overlays.
          </p>
        </section>

        <section className="card">
          <p className="section-title">Storyboard & Dialogue</p>
          <div className="timeline">
            {scriptLines.map((line) => (
              <article key={line.label} className="timeline-item">
                <span className="timeline-label">{line.label}</span>
                <div className="script-line">
                  <span className="script-role">{line.speaker}</span>
                  <p className="timeline-copy">{line.copy}</p>
                  {line.note ? (
                    <p
                      style={{
                        margin: 0,
                        color: "rgba(148, 163, 184, 0.75)",
                        fontSize: "0.85rem"
                      }}
                    >
                      {line.note}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <a className="cta" href="#cta">
            Deliver Script
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="card" id="cta">
          <p className="section-title">Hook · Emotional Arc · CTA</p>
          <div className="metadata-grid">
            <div className="metadata-item">
              <span className="metadata-label">Hook Concept</span>
              <span className="metadata-value">
                “Burnout to Breakthrough” — conflict-driven selfie opener
              </span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Primary CTA</span>
              <span className="metadata-value">Tap link → Free CAD Skills Audit → Cohort waitlist</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-label">Editing Notes</span>
              <span className="metadata-value">Jump cuts, on-screen captions, emoji overlays</span>
            </div>
          </div>
        </section>

        <section className="card">
          <p className="section-title">Emotional Beats</p>
          <div className="beats">
            {emotionalBeats.map((beat) => (
              <div key={beat} className="beat">
                <p style={{ margin: 0, lineHeight: 1.6 }}>{beat}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <p className="section-title">Value Drivers</p>
          <div className="beats">
            {valueBeats.map((beat) => (
              <div key={beat} className="beat">
                <p style={{ margin: 0, lineHeight: 1.6 }}>{beat}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
