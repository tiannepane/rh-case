"use client";

import { useState, useEffect, useRef } from "react";

type Screen = "0A" | "0B" | "1";

// ─── Shared: Top Black Bar ────────────────────────────────────────────────────
function TopBar() {
  const items = ["MoneySense", "ratehub.ca", "CanWise"];

  return (
    <div
      style={{
        width: "100%",
        background: "#000",
        padding: "10px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 28,
      }}
    >
      {items.map((item) => (
        <span
          key={item}
          style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.5, whiteSpace: "nowrap" }}
        >
          {item}
        </span>
      ))}

      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#fff",
            color: "#000",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            flexShrink: 0,
          }}
        >
          rh
        </span>
        <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, lineHeight: 1.5, whiteSpace: "nowrap" }}>
          insurance
        </span>
      </span>
    </div>
  );
}

// ─── Shared: Main Nav ─────────────────────────────────────────────────────────
function MainNav({ loggedIn, onSignIn }: { loggedIn: boolean; onSignIn: () => void }) {
  const navLinks = ["Mortgages", "Credit Cards", "Banking", "Loans", "Investing", "Insurance", "Blog"];

  return (
    <nav
      style={{
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        height: 68,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        gap: 0,
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: 36,
          color: "#000",
          letterSpacing: "-1px",
          flexShrink: 0,
        }}
      >
        ratehub.ca
      </span>

      {/* spacer pushes nav links to the right */}
      <div style={{ flex: 1 }} />

      {/* nav links: right-aligned, flush against icons */}
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginRight: 24 }}>
        {navLinks.map((link) => (
          <span
            key={link}
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#111",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {link}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {loggedIn ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </>
        ) : (
          <>
            <button
              onClick={onSignIn}
              style={{ background: "none", border: "none", color: "#0077B6", fontSize: 16, cursor: "pointer", fontWeight: 500, padding: 0 }}
            >
              Sign in
            </button>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </>
        )}
      </div>
    </nav>
  );
}

// ─── Screen 0A — Homepage Logged Out ─────────────────────────────────────────
function Screen0A({ onGoSignIn, onSignIn }: { onGoSignIn: () => void; onSignIn: () => void }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <TopBar />
      <MainNav loggedIn={false} onSignIn={onGoSignIn} />

      <main style={{ paddingTop: 64, paddingBottom: 64, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#000", marginBottom: 12, lineHeight: 1.2 }}>
            Canada&apos;s best mortgage rates
          </h1>
          <p style={{ fontSize: 16, color: "#111", margin: 0 }}>
            Compare rates from 50+ lenders in minutes
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: 4,
            padding: 32,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            maxWidth: 720,
            width: "100%",
            margin: "32px auto 0",
          }}
        >
          <label style={{ display: "block", fontSize: 14, color: "#111", marginBottom: 8, fontWeight: 500 }}>
            Mortgage amount
          </label>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <input
              readOnly
              value="$400,000"
              style={{
                flex: 1,
                border: "1px solid #e5e5e5",
                borderRadius: 4,
                padding: "10px 14px",
                fontSize: 16,
                color: "#111",
                background: "#fafafa",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "#0077B6",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "10px 24px",
                fontSize: 16,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Compare rates
            </button>
          </div>
        </div>

        <div
          style={{
            maxWidth: 720,
            width: "100%",
            margin: "16px auto 0",
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            borderRadius: 8,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 20, flexShrink: 0 }}>🔒</span>
          <p style={{ fontSize: 15, color: "#111", flex: 1, margin: 0 }}>
            Sign in to see personalized insights based on your mortgage profile and renewal date
          </p>
          <button
            onClick={onSignIn}
            style={{
              background: "#0077B6",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "10px 20px",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Screen 0B — Sign In ──────────────────────────────────────────────────────
function Screen0B({ onSignedIn, onGoHome }: { onSignedIn: () => void; onGoHome: () => void }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <TopBar />
      <MainNav loggedIn={false} onSignIn={onGoHome} />

      <main style={{ display: "flex", justifyContent: "center", padding: "80px 24px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: 32,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            maxWidth: 420,
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", fontWeight: 700, fontSize: 20, color: "#000", marginBottom: 20 }}>
            ratehub.ca
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#000", textAlign: "center", marginBottom: 8 }}>
            Welcome back
          </h2>
          <p style={{ fontSize: 15, color: "#111", textAlign: "center", marginBottom: 28, lineHeight: 1.5 }}>
            Sign in to access your personalized mortgage dashboard
          </p>

          <button
            onClick={onSignedIn}
            style={{
              width: "100%",
              background: "#fff",
              border: "1px solid #dadce0",
              borderRadius: 4,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              cursor: "pointer",
              marginBottom: 20,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            <span style={{ fontSize: 15, color: "#111", fontWeight: 500 }}>Continue with Google</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
            <span style={{ fontSize: 13, color: "#888" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
          </div>

          <input
            type="email"
            placeholder="Email address"
            disabled
            style={{
              width: "100%",
              border: "1px solid #e5e5e5",
              borderRadius: 4,
              padding: "10px 14px",
              fontSize: 15,
              color: "#bbb",
              background: "#fafafa",
              marginBottom: 12,
              outline: "none",
            }}
          />

          <button
            disabled
            style={{
              width: "100%",
              background: "#e5e5e5",
              color: "#aaa",
              border: "none",
              borderRadius: 4,
              padding: "10px 20px",
              fontSize: 15,
              fontWeight: 500,
              cursor: "not-allowed",
              marginBottom: 20,
            }}
          >
            Continue with email
          </button>

          <p style={{ fontSize: 12, color: "#aaa", textAlign: "center", lineHeight: 1.6 }}>
            By continuing, you agree to Ratehub&apos;s Terms of Service and Privacy Policy
          </p>
        </div>
      </main>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ activeItem, onItemClick }: { activeItem: string; onItemClick: (item: string) => void }) {
  const topItems = ["Overview"];
  const productItems = ["Mortgage", "Auto insurance", "Home insurance", "Credit Card", "Profile", "Referrals"];

  const renderItem = (item: string) => {
    const isActive = item === activeItem;
    return (
      <button
        key={item}
        onClick={() => onItemClick(item)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          padding: "0 32px",
          lineHeight: 2.4,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontSize: 18,
          color: "#000",
          fontWeight: isActive ? 700 : 400,
        }}
      >
        {isActive ? (
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#0077B6", flexShrink: 0 }} />
        ) : (
          <span style={{ width: 10, flexShrink: 0 }} />
        )}
        {item}
      </button>
    );
  };

  return (
    <aside
      style={{
        position: "fixed",
        top: 109,
        left: 0,
        width: 260,
        height: "calc(100vh - 109px)",
        paddingTop: 32,
        background: "#fff",
        overflowY: "auto",
        zIndex: 10,
      }}
    >
      {topItems.map(renderItem)}

      {/* divider below Overview */}
      <div style={{ height: 1, background: "#e5e5e5", margin: "8px 32px 8px" }} />

      {productItems.map(renderItem)}
    </aside>
  );
}

// ─── Counter: counts down from 145 to 138 at 120ms intervals ─────────────────
function SimpleCounter({ from = 145, to = 138 }: { from?: number; to?: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let current = from;
    const interval = setInterval(() => {
      current--;
      if (spanRef.current) spanRef.current.textContent = String(current);
      if (current <= to) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [from, to]);
  return <span ref={spanRef} style={{ color: "#0077B6" }}>{from}</span>;
}

// ─── Demo Toggle Bar ──────────────────────────────────────────────────────────
type DemoState = "existing" | "new" | "none";

function DemoToggleBar({
  demoState,
  setDemoState,
}: {
  demoState: DemoState;
  setDemoState: (s: DemoState) => void;
}) {
  const options: { key: DemoState; label: string }[] = [
    { key: "existing", label: "Existing user" },
    { key: "new", label: "New to Ratehub" },
    { key: "none", label: "No mortgage" },
  ];
  return (
    <div
      style={{
        background: "#1a1a1a",
        borderRadius: 8,
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <span style={{ color: "#fff", fontSize: 12, fontWeight: 500, opacity: 0.6 }}>
        Demo mode
      </span>
      <div style={{ display: "flex", gap: 8 }}>
        {options.map(({ key, label }) => {
          const active = demoState === key;
          return (
            <button
              key={key}
              onClick={() => setDemoState(key)}
              style={{
                fontSize: 13,
                borderRadius: 20,
                padding: "6px 16px",
                cursor: "pointer",
                border: active ? "none" : "1px solid rgba(255,255,255,0.3)",
                background: active ? "#fff" : "transparent",
                color: active ? "#1a1a1a" : "#fff",
                fontWeight: active ? 600 : 400,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ─── Overview Content ─────────────────────────────────────────────────────────
function OverviewContent({
  demoState,
  setDemoState,
  onStartRenewal,
  onOpenMortgageForm,
}: {
  demoState: DemoState;
  setDemoState: (s: DemoState) => void;
  onStartRenewal: () => void;
  onOpenMortgageForm: () => void;
}) {
  const [showSources, setShowSources] = useState(false);

  return (
    <>
      <style>{`.rh-src-toggle:hover{text-decoration:underline}.rh-src-link:hover{text-decoration:underline}.rh-alert-link:hover{text-decoration:underline}`}</style>
      {/* Unified header block — Segment 1 (existing) */}
      {demoState === "existing" && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 400, color: "#000", marginBottom: 20 }}>
            Good morning, Artem
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#000", lineHeight: 1.3 }}>
            Your mortgage renews in{" "}
            <SimpleCounter />
            {" "}days.
          </div>

          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0077B6", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Mortgage Amount</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#000", lineHeight: 1, marginBottom: 8 }}>$487,000</div>
              <div style={{ fontSize: 13, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>5-year fixed at 2.14%</div>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0077B6", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Best Rate Today</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#000", lineHeight: 1, marginBottom: 8 }}>4.19%</div>
              <div style={{ fontSize: 13, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>Down from 4.34% last month</div>
            </div>

            <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0077B6", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Est. Monthly Change</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#0077B6", lineHeight: 1, marginBottom: 8 }}>+$612</div>
              <div style={{ fontSize: 13, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>At today&apos;s best rate of 4.19%</div>
            </div>
          </div>
        </div>
      )}

      {/* ── State 2 header: New to Ratehub ── */}
      {demoState === "new" && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 400, color: "#000", marginBottom: 20 }}>
            Good morning, Artem
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#000", lineHeight: 1.3, marginBottom: 28 }}>
            Your renewal insights are almost ready.
          </div>
        </div>
      )}

      {/* ── State 3: No mortgage ── */}
      {demoState === "none" && (
        <div>
          <div style={{ fontSize: 14, fontWeight: 400, color: "#000", marginBottom: 20 }}>
            Good morning, Artem
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#000", lineHeight: 1.3, marginBottom: 28 }}>
            Your auto insurance renews in{" "}<SimpleCounter from={96} to={89} />{" "}days.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0077B6", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Best Rate in Toronto</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#000", lineHeight: 1, marginBottom: 8 }}>8% lower</div>
              <div style={{ fontSize: 13, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>Than the same time last year</div>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: 12, padding: "24px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0077B6", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 10 }}>Your Renewal</div>
              <div style={{ fontSize: 36, fontWeight: 700, color: "#0077B6", lineHeight: 1, marginBottom: 8 }}>June 2026</div>
              <div style={{ fontSize: 13, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>About 90 days from today</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "#F8F8F8", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", flexShrink: 0, marginRight: 12, display: "inline-block" }} />
                <span style={{ fontSize: 15, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>
                  Your auto insurance may have room to drop. Toronto rates are down 8% this year. Takes 2 minutes to check.
                </span>
              </div>
              <span className="rh-alert-link" style={{ fontSize: 14, color: "#0077B6", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none" }}>
                Compare my rate →
              </span>
            </div>

            <div style={{ background: "#F8F8F8", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", flexShrink: 0, marginRight: 12, display: "inline-block" }} />
                <span style={{ fontSize: 15, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>
                  You browsed cash back cards 3 times this week. The BMO CashBack Mastercard just dropped its annual fee.
                </span>
              </div>
              <span className="rh-alert-link" style={{ fontSize: 14, color: "#0077B6", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none" }}>
                See if you qualify →
              </span>
            </div>

            <div style={{ background: "#F8F8F8", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A", flexShrink: 0, marginRight: 12, display: "inline-block" }} />
                <span style={{ fontSize: 15, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>
                  No TFSA on file yet. You could keep up to $7,000 this year completely tax-free.
                </span>
              </div>
              <span className="rh-alert-link" style={{ fontSize: 14, color: "#0077B6", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none" }}>
                Show me rates →
              </span>
            </div>
          </div>

        </div>
      )}

      {/* ── State 1: Ratehub Ready card ── */}
      {demoState === "existing" && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: 8,
            padding: "40px 44px 24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", display: "inline-block", flexShrink: 0, marginRight: 8 }} />
              <span style={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Ratehub Ready</span>
              <span style={{ background: "#0077B6", color: "#fff", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "2px 10px" }}>
                New
              </span>
            </div>
          </div>

          <div style={{ fontSize: 14, color: "#000", lineHeight: 1.7, marginBottom: 20 }}>
            The Bank of Canada held its rate at 2.25% this week, and lenders have started moving fixed rates down in response. Based on your $487,000 mortgage, today&apos;s best 5-year fixed is 4.19%. Your{" "}
            <span style={{ background: "#EFF8FF", color: "#0077B6", fontWeight: 600, padding: "1px 5px", borderRadius: 3 }}>September 3</span>
            {" "}renewal is approaching — and right now, the timing is actually working in your favour.
          </div>

          <div>
            <button
              onClick={onStartRenewal}
              style={{ background: "#0077B6", color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer", width: "fit-content" }}
            >
              Explore your renewal options →
            </button>
            <div style={{ marginTop: 20, paddingTop: 16, fontFamily: "'Courier New', Courier, monospace" }}>
              <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.3px" }}>
                Based on Bank of Canada, Globe and Mail, and Ratehub market reports · Updated May 3, 2026
              </span>{" "}
              <span
                className="rh-src-toggle"
                onClick={() => setShowSources((s) => !s)}
                style={{ fontSize: 11, color: "#0077B6", fontWeight: 500, cursor: "pointer", letterSpacing: "0.3px" }}
              >
                {showSources ? "Hide sources ↑" : "See sources ↓"}
              </span>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: showSources ? 200 : 0,
                  opacity: showSources ? 1 : 0,
                  transition: "max-height 200ms ease, opacity 200ms ease",
                  marginTop: 10,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <a href="#" className="rh-src-link" style={{ fontSize: 11, color: "#0077B6", textDecoration: "none", letterSpacing: "0.2px" }}>
                    Bank of Canada — Policy rate decision, April 2026
                  </a>
                  <a href="#" className="rh-src-link" style={{ fontSize: 11, color: "#0077B6", textDecoration: "none", letterSpacing: "0.2px" }}>
                    Globe and Mail — Fixed mortgage rates ease as lenders respond to BoC hold
                  </a>
                  <a href="#" className="rh-src-link" style={{ fontSize: 11, color: "#0077B6", textDecoration: "none", letterSpacing: "0.2px" }}>
                    Ratehub.ca — Canada mortgage rate forecast, May 2026
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── State 1: Alert rows ── */}
      {demoState === "existing" && (
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#F8F8F8", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", flexShrink: 0, marginRight: 12, display: "inline-block" }} />
              <span style={{ fontSize: 15, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>
                You browsed cash back cards this week. The BMO CashBack Mastercard just dropped its annual fee.
              </span>
            </div>
            <span className="rh-alert-link" style={{ fontSize: 14, color: "#0077B6", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none" }}>
              See if you qualify →
            </span>
          </div>

          <div style={{ background: "#F8F8F8", borderRadius: 8, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", flexShrink: 0, marginRight: 12, display: "inline-block" }} />
              <span style={{ fontSize: 15, color: "#000", fontWeight: 400, lineHeight: 1.5 }}>
                High-interest savings accounts are at 4.5% right now. Your money could be working harder.
              </span>
            </div>
            <span className="rh-alert-link" style={{ fontSize: 14, color: "#0077B6", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none" }}>
              Show me rates →
            </span>
          </div>
        </div>
      )}

      {/* ── State 2: Ratehub Ready card ── */}
      {demoState === "new" && (
        <div style={{ background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", borderRadius: 12, padding: "40px 44px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0077B6", display: "inline-block", flexShrink: 0, marginRight: 8 }} />
            <span style={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Ratehub Ready</span>
            <span style={{ background: "#0077B6", color: "#fff", fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "2px 10px" }}>
              New
            </span>
          </div>

          <div style={{ fontSize: 16, color: "#000", lineHeight: 1.8, marginBottom: 28 }}>
            We can see you have been exploring mortgage options. Add your details and we will show you exactly what renewal looks like for your situation — including today&apos;s best rate and what your payments could look like.
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={onOpenMortgageForm}
              style={{ background: "#0077B6", color: "#fff", border: "none", borderRadius: 8, padding: "14px 28px", fontSize: 15, fontWeight: 500, cursor: "pointer", width: "fit-content" }}
            >
              Add my mortgage details →
            </button>
          </div>
        </div>
      )}

    </>
  );
}

// ─── Application Card ─────────────────────────────────────────────────────────
function ApplicationCard({
  isRecent,
  name,
  mortgageType,
  mortgageAmount,
  lastModified,
  showUpload,
}: {
  isRecent?: boolean;
  name: string;
  mortgageType: string;
  mortgageAmount: string;
  lastModified: string;
  showUpload?: boolean;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        padding: 32,
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left: tag + title + metadata */}
      <div style={{ flex: 1 }}>
        {isRecent && (
          <div
            style={{
              display: "inline-block",
              background: "#FCD34D",
              color: "#000",
              fontSize: 13,
              fontWeight: 600,
              borderRadius: 6,
              padding: "4px 12px",
              marginBottom: 12,
            }}
          >
            Your most recent application
          </div>
        )}

        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#000",
            marginTop: isRecent ? 12 : 0,
            marginBottom: 20,
          }}
        >
          {name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { label: "MORTGAGE TYPE:", value: mortgageType },
            { label: "MORTGAGE AMOUNT:", value: mortgageAmount },
            { label: "LAST MODIFIED:", value: lastModified },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                lineHeight: 1.8,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "#555555",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "#000",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: action links, vertically centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
          flexShrink: 0,
          marginLeft: 32,
          alignSelf: "center",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            color: "#0077B6",
            fontSize: 15,
            fontWeight: 400,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: 0,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          resume application
        </button>

        {showUpload && (
          <button
            style={{
              background: "none",
              border: "none",
              color: "#0077B6",
              fontSize: 15,
              fontWeight: 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: 0,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            upload documents
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Mortgage Form ────────────────────────────────────────────────────────────
function MortgageForm({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: () => void }) {
  const [rateType, setRateType] = useState("5-year fixed");

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <div style={{ width: "100%", height: 4, background: "#e0e0e0" }}>
        <div style={{ width: "40%", height: "100%", background: "#0077B6" }} />
      </div>

      <div style={{ padding: "20px 32px" }}>
        <span style={{ fontWeight: 500, fontSize: 24, color: "#000", letterSpacing: "-0.5px" }}>
          ratehub.ca
        </span>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", paddingTop: 64, paddingLeft: 24, paddingRight: 24, paddingBottom: 80 }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: "#000", textAlign: "center", marginBottom: 56 }}>
          Tell us about your mortgage.
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {/* Q1: Renewal date */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>
              When does your mortgage renew?
            </div>
            <div style={{ fontSize: 14, color: "#555", marginBottom: 16 }}>
              Your renewal date helps us show you the most relevant rates and timing.
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                defaultValue="09"
                placeholder="MM"
                style={{ width: 120, border: "1px solid #ccc", borderRadius: 4, padding: "16px 20px", fontSize: 16, color: "#000", outline: "none" }}
              />
              <input
                defaultValue="03"
                placeholder="DD"
                style={{ width: 120, border: "1px solid #ccc", borderRadius: 4, padding: "16px 20px", fontSize: 16, color: "#000", outline: "none" }}
              />
              <input
                defaultValue="2026"
                placeholder="YYYY"
                style={{ width: 160, border: "1px solid #ccc", borderRadius: 4, padding: "16px 20px", fontSize: 16, color: "#000", outline: "none" }}
              />
            </div>
          </div>

          {/* Q2: Mortgage balance */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>
              What is your remaining mortgage balance?
            </div>
            <div style={{ fontSize: 14, color: "#555", marginBottom: 16 }}>
              This is the remaining balance on your mortgage. We use this to show your new monthly payment.
            </div>
            <input
              defaultValue="$487,000"
              style={{ width: "100%", border: "1px solid #ccc", borderRadius: 4, padding: "16px 20px", fontSize: 16, color: "#000", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          {/* Q3: Rate type */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 16 }}>
              What type of rate do you have?
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["5-year fixed", "3-year fixed", "Variable", "Other"].map((opt) => {
                const selected = rateType === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setRateType(opt)}
                    style={{
                      border: selected ? "2px solid #0077B6" : "1px solid #ccc",
                      background: selected ? "#EFF8FF" : "#fff",
                      color: selected ? "#0077B6" : "#555",
                      fontSize: 16,
                      fontWeight: selected ? 500 : 400,
                      padding: 18,
                      borderRadius: 4,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Q4: Current rate */}
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>
              What is your current interest rate?
            </div>
            <div style={{ fontSize: 14, color: "#555", marginBottom: 16 }}>
              This is the rate on your existing mortgage, not what you are looking for.
            </div>
            <input
              defaultValue="2.14%"
              style={{ width: 240, border: "1px solid #ccc", borderRadius: 4, padding: "16px 20px", fontSize: 16, color: "#000", outline: "none" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 56 }}>
          <button
            onClick={onCancel}
            style={{ fontSize: 15, color: "#555", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", padding: 0 }}
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            style={{ background: "#0077B6", color: "#fff", fontSize: 16, fontWeight: 500, padding: "18px 48px", borderRadius: 4, border: "none", cursor: "pointer", minWidth: 200 }}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 1 — Dashboard shell (Overview default) ───────────────────────────
function Screen1({ onGoHome }: { onGoHome: () => void }) {
  const [activeNav, setActiveNav] = useState("Overview");
  const [demoState, setDemoState] = useState<DemoState>("existing");
  const [showMortgageForm, setShowMortgageForm] = useState(false);

  if (showMortgageForm) {
    return (
      <MortgageForm
        onCancel={() => setShowMortgageForm(false)}
        onSubmit={() => { setShowMortgageForm(false); setDemoState("existing"); }}
      />
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <TopBar />
      <MainNav loggedIn={true} onSignIn={onGoHome} />

      <Sidebar activeItem={activeNav} onItemClick={setActiveNav} />

      <main
        style={{
          marginLeft: 260,
          padding: "48px 40px 40px 56px",
          background: "#fff",
          minHeight: "calc(100vh - 109px)",
        }}
      >
        <div style={{ maxWidth: 860 }}>
          {activeNav === "Overview" && (
            <DemoToggleBar demoState={demoState} setDemoState={setDemoState} />
          )}

          {activeNav === "Overview" && (
            <OverviewContent
              demoState={demoState}
              setDemoState={setDemoState}
              onStartRenewal={() => setActiveNav("Mortgage")}
              onOpenMortgageForm={() => setShowMortgageForm(true)}
            />
          )}

          {activeNav === "Mortgage" && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 600, color: "#000" }}>
                  My applications
                </span>
                <button
                  style={{
                    border: "2px solid #0077B6",
                    color: "#0077B6",
                    background: "#fff",
                    borderRadius: 8,
                    padding: "14px 28px",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  start new application
                </button>
              </div>

              <ApplicationCard
                isRecent
                name="Refinance"
                mortgageType="REFINANCE"
                mortgageAmount="$487,000"
                lastModified="May 2nd, 2026"
              />

              <ApplicationCard
                name="1 Front St, Toronto ON M5E 1W2"
                mortgageType="HELOC"
                mortgageAmount="$50,000"
                lastModified="May 2nd, 2026"
                showUpload
              />

              <ApplicationCard
                name="Pre-Approval"
                mortgageType="PURCHASE"
                mortgageAmount="$688,000"
                lastModified="April 20th, 2026"
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

// ─── Root: Screen Router ──────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("0A");

  return (
    <>
      {screen === "0A" && (
        <Screen0A onGoSignIn={() => setScreen("0B")} onSignIn={() => setScreen("0B")} />
      )}
      {screen === "0B" && (
        <Screen0B onSignedIn={() => setScreen("1")} onGoHome={() => setScreen("0A")} />
      )}
      {screen === "1" && <Screen1 onGoHome={() => setScreen("0A")} />}
    </>
  );
}
