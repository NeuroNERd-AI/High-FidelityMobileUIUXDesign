import { useState } from "react";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
   ───────────────────────────────────────────── */
const C = {
  green:       "#4A7A5A",
  greenLight:  "#EBF3EE",
  greenDark:   "#2F5438",
  coral:       "#D96B4F",
  coralLight:  "#FAE8E3",
  brown:       "#8B6B3D",
  brownLight:  "#F5EFE4",
  cream:       "#FAF8F3",
  card:        "#FFFFFF",
  border:      "#DDD5C7",
  muted:       "#EDE8DC",
  mutedFg:     "#7A6E60",
  fg:          "#2A2520",
  fgSub:       "#5A4A38",
  phoneBg:     "#E8E2D8",
};

/* ─────────────────────────────────────────────
   ICONS
   ───────────────────────────────────────────── */
type SvgProps = { size?: number; color?: string };

const Ic = {
  Home: ({ size = 26, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Game: ({ size = 26, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2l-4 5-4-5"/><line x1="9" y1="14" x2="15" y2="14"/><line x1="12" y1="11" x2="12" y2="17"/>
    </svg>
  ),
  Heart: ({ size = 26, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Bell: ({ size = 26, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  User: ({ size = 26, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Sun: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Check: ({ size = 20, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Clock: ({ size = 16, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Star: ({ size = 16, filled = false }: SvgProps & { filled?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? C.coral : "none"} stroke={C.coral} strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  ChevRight: ({ size = 18, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevLeft: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  Pill: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 20.5L3.5 13.5a7 7 0 0 1 9.9-9.9l7 7a7 7 0 0 1-9.9 9.9z"/><line x1="8.5" y1="15.5" x2="15.5" y2="8.5"/>
    </svg>
  ),
  Walk: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="4" r="2"/><path d="m9 20 2-8 4 4 2-6"/><path d="m6 15 2-4 5 2"/>
    </svg>
  ),
  Puzzle: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.408 0l-1.569-1.568a.953.953 0 0 0-.878-.289c-.322.049-.607.225-.613.482-.05 1.516-1.266 2.722-2.785 2.722-1.542 0-2.793-1.251-2.793-2.793C3 16.734 4.206 15.519 5.72 15.469c.257-.006.433-.291.482-.613a.953.953 0 0 0-.289-.878L4.345 12.41a2.404 2.404 0 0 1 0-3.408l1.61-1.61a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 3.408 0l1.568 1.568c.23.23.556.338.878.289Z"/>
    </svg>
  ),
  Music: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  Type: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
  ),
  Photo: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  ),
  Plus: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  WifiOff: ({ size = 18, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="1" y1="1" x2="23" y2="23"/>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
      <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3"/>
    </svg>
  ),
  Share: ({ size = 22, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Eye: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Grid: ({ size = 28, color = "currentColor" }: SvgProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   BASE COMPONENTS
   ───────────────────────────────────────────── */

/* Button */
function PrimaryButton({ label, onClick, fullWidth, size = "md", disabled }: {
  label: string; onClick?: () => void; fullWidth?: boolean; size?: "md" | "lg"; disabled?: boolean;
}) {
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ backgroundColor: disabled ? C.border : C.green, color: C.card, borderRadius: 16, minHeight: size === "lg" ? 60 : 54 }}
      className={`${fullWidth ? "w-full" : "px-8"} ${size === "lg" ? "text-xl py-4" : "text-lg py-3"} font-extrabold tracking-wide transition-all active:scale-95 shadow-sm disabled:cursor-not-allowed`}>
      {label}
    </button>
  );
}

function SecondaryButton({ label, onClick, fullWidth }: {
  label: string; onClick?: () => void; fullWidth?: boolean;
}) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: "transparent", color: C.green, borderRadius: 16, border: `2px solid ${C.green}`, minHeight: 54 }}
      className={`${fullWidth ? "w-full" : "px-8"} py-3 text-lg font-extrabold tracking-wide transition-all active:scale-95`}>
      {label}
    </button>
  );
}

function DestructiveButton({ label, onClick, fullWidth }: {
  label: string; onClick?: () => void; fullWidth?: boolean;
}) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.coralLight, color: C.coral, borderRadius: 16, border: `2px solid ${C.coral}`, minHeight: 54 }}
      className={`${fullWidth ? "w-full" : "px-8"} py-3 text-lg font-extrabold tracking-wide transition-all active:scale-95`}>
      {label}
    </button>
  );
}

/* Icon Button */
function IconButton({ icon, label, onClick, variant = "ghost", badge }: {
  icon: React.ReactNode; label: string; onClick?: () => void;
  variant?: "ghost" | "tinted" | "solid"; badge?: number;
}) {
  const bg = variant === "solid" ? C.green : variant === "tinted" ? C.greenLight : "transparent";
  const iconColor = variant === "solid" ? C.card : C.green;
  return (
    <button onClick={onClick}
      style={{ minWidth: 56, minHeight: 56, borderRadius: 16, backgroundColor: bg, color: iconColor, position: "relative" }}
      className="flex flex-col items-center justify-center gap-1 p-3 transition-all active:scale-90"
      aria-label={label}>
      {icon}
      {label && <span className="text-xs font-bold" style={{ color: C.mutedFg }}>{label}</span>}
      {badge !== undefined && badge > 0 && (
        <span style={{ position: "absolute", top: 6, right: 6, width: 18, height: 18, borderRadius: 99, backgroundColor: C.coral, color: C.card, fontSize: 10, fontWeight: 800 }}
          className="flex items-center justify-center">{badge}</span>
      )}
    </button>
  );
}

/* Avatar */
function Avatar({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", backgroundColor: C.brownLight, border: `2px solid ${C.border}`, flexShrink: 0 }}
      className="flex items-center justify-center">
      <span style={{ color: C.brown, fontSize: size * 0.36, fontWeight: 900 }}>{initials}</span>
    </div>
  );
}

/* Status Badge */
type BadgeType = "success" | "warning" | "info" | "pending" | "error";
const badgeStyles: Record<BadgeType, { bg: string; text: string }> = {
  success: { bg: C.greenLight,   text: C.greenDark },
  warning: { bg: "#FEF3C7",      text: "#92400E" },
  info:    { bg: "#E0F2FE",      text: "#0369A1" },
  pending: { bg: C.muted,        text: C.fgSub },
  error:   { bg: C.coralLight,   text: C.coral },
};
function StatusBadge({ label, type }: { label: string; type: BadgeType }) {
  const s = badgeStyles[type];
  return (
    <span style={{ backgroundColor: s.bg, color: s.text, borderRadius: 24, fontSize: 13, fontWeight: 700 }}
      className="inline-flex items-center gap-1 px-3 py-1">
      {label}
    </span>
  );
}

/* Progress Bar */
function ProgressBar({ label, current, total, color = C.green, showCount = true }: {
  label: string; current: number; total: number; color?: string; showCount?: boolean;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}` }} className="p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-base font-bold" style={{ color: C.fgSub }}>{label}</span>
        {showCount && <span className="text-base font-extrabold" style={{ color }}>{current}/{total}</span>}
      </div>
      <div style={{ backgroundColor: C.muted, borderRadius: 99, height: 12 }}>
        <div style={{ backgroundColor: color, borderRadius: 99, height: 12, width: `${pct}%`, transition: "width 0.5s ease" }}/>
      </div>
      <div className="mt-2 text-sm font-semibold" style={{ color: C.mutedFg }}>{pct}% complete</div>
    </div>
  );
}

/* Large Card */
function Card({ title, children, accent, noPad }: {
  title?: string; children: React.ReactNode; accent?: string; noPad?: boolean;
}) {
  return (
    <div style={{ backgroundColor: C.card, borderRadius: 24, border: `1px solid ${C.border}`, borderTop: accent ? `4px solid ${accent}` : `1px solid ${C.border}` }}
      className={`shadow-sm ${noPad ? "" : "p-5"}`}>
      {title && <div className="text-lg font-bold mb-4 px-5 pt-5" style={{ color: C.fgSub }}>{title}</div>}
      {noPad ? children : <div>{children}</div>}
    </div>
  );
}

/* Reminder Card */
function ReminderCard({ icon, title, time, done, onToggle }: {
  icon: React.ReactNode; title: string; time: string; done: boolean; onToggle: () => void;
}) {
  return (
    <div style={{ backgroundColor: done ? C.greenLight : C.card, borderRadius: 20, border: `2px solid ${done ? C.green : C.border}` }}
      className="flex items-center gap-4 p-4 shadow-sm">
      <div style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: done ? C.green : C.muted, flexShrink: 0 }}
        className="flex items-center justify-center">
        {done ? <Ic.Check size={22} color={C.card}/> : icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-lg font-bold" style={{ color: done ? C.greenDark : C.fg, textDecoration: done ? "line-through" : "none" }}>{title}</div>
        <div className="flex items-center gap-1 mt-0.5">
          <Ic.Clock size={13} color={C.mutedFg}/>
          <span className="text-sm font-semibold" style={{ color: C.mutedFg }}>{time}</span>
        </div>
      </div>
      <button onClick={onToggle}
        style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: done ? C.green : C.muted, border: `2px solid ${done ? C.green : C.border}`, flexShrink: 0 }}
        className="flex items-center justify-center transition-all active:scale-90"
        aria-label={done ? "Mark undone" : "Mark done"}>
        {done && <Ic.Check size={22} color={C.card}/>}
      </button>
    </div>
  );
}

/* Game Card */
function GameCard({ icon, title, subtitle, stars, iconBg, onPlay }: {
  icon: React.ReactNode; title: string; subtitle: string; stars: number; iconBg: string; onPlay: () => void;
}) {
  return (
    <button onClick={onPlay}
      style={{ backgroundColor: C.card, borderRadius: 24, border: `1px solid ${C.border}` }}
      className="w-full text-left p-4 shadow-sm flex items-center gap-4 active:scale-95 transition-all">
      <div style={{ width: 60, height: 60, borderRadius: 18, backgroundColor: iconBg, flexShrink: 0 }}
        className="flex items-center justify-center">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-lg font-extrabold" style={{ color: C.fg }}>{title}</div>
        <div className="text-sm font-medium mt-0.5" style={{ color: C.mutedFg }}>{subtitle}</div>
        <div className="flex items-center gap-0.5 mt-1.5">
          {[1,2,3,4,5].map(s => <Ic.Star key={s} size={14} filled={s <= stars}/>)}
        </div>
      </div>
      <Ic.ChevRight size={20} color={C.mutedFg}/>
    </button>
  );
}

/* Empty State */
function EmptyState({ icon, title, body, action }: {
  icon: React.ReactNode; title: string; body: string; action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 text-center gap-4">
      <div style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: C.muted }}
        className="flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-xl font-extrabold mb-2" style={{ color: C.fg }}>{title}</div>
        <div className="text-base font-medium leading-relaxed" style={{ color: C.mutedFg }}>{body}</div>
      </div>
      {action}
    </div>
  );
}

/* Offline Banner */
function OfflineBanner() {
  return (
    <div style={{ backgroundColor: "#FEF3C7", borderBottom: `2px solid #F59E0B`, color: "#92400E" }}
      className="flex items-center gap-2 px-4 py-3">
      <Ic.WifiOff size={18} color="#B45309"/>
      <span className="font-bold text-sm flex-1">No internet · Playing in offline mode</span>
    </div>
  );
}

/* Toast */
function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-28 left-4 right-4 z-50 pointer-events-none">
      <div style={{ backgroundColor: C.greenDark, borderRadius: 18, color: C.card }}
        className="flex items-center gap-3 px-5 py-4 shadow-2xl">
        <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: C.green, flexShrink: 0 }}
          className="flex items-center justify-center">
          <Ic.Check size={18} color={C.card}/>
        </div>
        <span className="text-base font-bold">{message}</span>
      </div>
    </div>
  );
}

/* Modal Sheet */
function ModalSheet({ title, body, onConfirm, onCancel }: {
  title: string; body: string; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-end"
      style={{ backgroundColor: "rgba(42,37,32,0.55)" }}>
      <div style={{ backgroundColor: C.card, borderRadius: "28px 28px 0 0", width: "100%" }} className="p-6 pb-10">
        <div className="w-12 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: C.border }}/>
        <div className="text-2xl font-extrabold mb-3" style={{ color: C.fg, fontFamily: "'Lora', serif" }}>{title}</div>
        <div className="text-lg font-medium leading-relaxed mb-8" style={{ color: C.mutedFg }}>{body}</div>
        <div className="flex flex-col gap-3">
          <PrimaryButton label="Yes, continue" onClick={onConfirm} fullWidth size="lg"/>
          <SecondaryButton label="No, go back" onClick={onCancel} fullWidth/>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BOTTOM NAVIGATION (5 destinations)
   ───────────────────────────────────────────── */
type Tab = "home" | "games" | "memories" | "reminders" | "profile";
const NAV_ITEMS: { id: Tab; label: string; Icon: (p: SvgProps) => React.ReactElement }[] = [
  { id: "home",      label: "Home",      Icon: Ic.Home },
  { id: "games",     label: "Games",     Icon: Ic.Game },
  { id: "memories",  label: "Memories",  Icon: Ic.Heart },
  { id: "reminders", label: "Reminders", Icon: Ic.Bell },
  { id: "profile",   label: "Profile",   Icon: Ic.User },
];

function BottomNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div style={{ backgroundColor: C.card, borderTop: `1.5px solid ${C.border}` }} className="flex items-stretch">
      {NAV_ITEMS.map(({ id, label, Icon }) => {
        const on = active === id;
        return (
          <button key={id} onClick={() => onChange(id)}
            style={{ flex: 1, minHeight: 64, color: on ? C.green : C.mutedFg }}
            className="flex flex-col items-center justify-center gap-1 py-2 relative transition-all active:scale-90"
            aria-label={label} aria-current={on ? "page" : undefined}>
            {on && (
              <span style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: 3, borderRadius: "0 0 4px 4px", backgroundColor: C.green }}/>
            )}
            <Icon size={24} color={on ? C.green : C.mutedFg}/>
            <span style={{ fontSize: 10, fontWeight: on ? 800 : 600, color: on ? C.green : C.mutedFg }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   APP SCREENS
   ───────────────────────────────────────────── */

/* ── GAME CATALOGUE ── */
type GameKey = "memory" | "song" | "word" | "photo" | "recall" | "pattern";

interface GameMeta {
  emoji: string;
  title: string;
  description: string;
  steps: string[];
  time: string;
  level: string;
  levelNote: string;
  iconBg: string;
  cardBg: string;
  icon: React.ReactNode;
  bigIcon: React.ReactNode;
  stars: number;
  played: number;
  culturalTheme: string;
}

const GAME_META: Record<GameKey, GameMeta> = {
  memory: {
    emoji: "🧩",
    title: "Memory Match",
    description: "Find two cards that show the same picture.",
    steps: [
      "Tap any card to flip it over.",
      "Find the card that shows the same picture.",
      "Match all pairs to finish. Take your time!",
    ],
    time: "About 5 minutes",
    level: "Gentle",
    levelNote: "Simple pictures, no time limit",
    iconBg: C.green,
    cardBg: C.greenLight,
    icon: <Ic.Puzzle size={28} color={C.card}/>,
    bigIcon: <Ic.Puzzle size={44} color={C.card}/>,
    stars: 4,
    played: 12,
    culturalTheme: "🌸 🦋 🌿 🪔 🦜 🍵",
  },
  song: {
    emoji: "🎵",
    title: "Song Quiz",
    description: "Listen and guess the familiar tune from Northeast India.",
    steps: [
      "Listen to a short melody.",
      "Choose the song name from four choices.",
      "Trust your memory — you know these songs!",
    ],
    time: "About 4 minutes",
    level: "Familiar",
    levelNote: "Songs you already know and love",
    iconBg: C.coral,
    cardBg: C.coralLight,
    icon: <Ic.Music size={28} color={C.card}/>,
    bigIcon: <Ic.Music size={44} color={C.card}/>,
    stars: 3,
    played: 8,
    culturalTheme: "Bihu · Bhawaiya · Rabindra Sangeet",
  },
  word: {
    emoji: "🔤",
    title: "Word Match",
    description: "Look at a picture and find the matching word.",
    steps: [
      "Look at the picture shown.",
      "Find the matching word below.",
      "Read slowly — there is no rush.",
    ],
    time: "About 6 minutes",
    level: "Gentle",
    levelNote: "Everyday words, familiar pictures",
    iconBg: C.brown,
    cardBg: C.brownLight,
    icon: <Ic.Type size={28} color={C.card}/>,
    bigIcon: <Ic.Type size={44} color={C.card}/>,
    stars: 5,
    played: 20,
    culturalTheme: "🍛 🏔️ 🌺 🛖 🎋",
  },
  photo: {
    emoji: "🖼️",
    title: "Photo Stories",
    description: "Look at a photo and remember the people and places.",
    steps: [
      "Look at the photo carefully.",
      "Answer a simple question about it.",
      "Every memory you recall is wonderful.",
    ],
    time: "About 4 minutes",
    level: "Gentle",
    levelNote: "Your own photos and familiar faces",
    iconBg: "#5B8FB9",
    cardBg: "#EAF3F9",
    icon: <Ic.Photo size={28} color={C.card}/>,
    bigIcon: <Ic.Photo size={44} color={C.card}/>,
    stars: 4,
    played: 6,
    culturalTheme: "Family · Festivals · Home",
  },
  recall: {
    emoji: "👁️",
    title: "Object Recall",
    description: "Look carefully and remember the familiar objects.",
    steps: [
      "Look at the objects shown carefully.",
      "When ready, tap 'I remember these'.",
      "Find those same objects from the bigger group.",
    ],
    time: "About 5 minutes",
    level: "Gentle",
    levelNote: "Familiar everyday objects",
    iconBg: "#7B6FA0",
    cardBg: "#F0EDF8",
    icon: <Ic.Eye size={28} color={C.card}/>,
    bigIcon: <Ic.Eye size={44} color={C.card}/>,
    stars: 3,
    played: 5,
    culturalTheme: "Pictures: tea, lamps, flowers & everyday objects",
  },
  pattern: {
    emoji: "🔲",
    title: "Pattern Sequence",
    description: "Look at the pattern and choose what comes next.",
    steps: [
      "Look at the row of pictures.",
      "See how they repeat.",
      "Choose the picture that comes next.",
    ],
    time: "About 4 minutes",
    level: "Gentle",
    levelNote: "Simple repeating patterns",
    iconBg: "#C17D3C",
    cardBg: "#F8F0E3",
    icon: <Ic.Grid size={28} color={C.card}/>,
    bigIcon: <Ic.Grid size={44} color={C.card}/>,
    stars: 3,
    played: 4,
    culturalTheme: "Pictures: nature, flowers & familiar shapes",
  },
};

const GAME_ORDER: GameKey[] = ["memory", "recall", "pattern", "song", "word", "photo"];

/* ── GAME INTRODUCTION SCREEN ── */
function GameIntroScreen({ gameKey, onStart, onBack }: {
  gameKey: GameKey; onStart: () => void; onBack: () => void;
}) {
  const m = GAME_META[gameKey];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", backgroundColor: C.cream }}>

      {/* ── Top bar with back ── */}
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12, flexShrink: 0 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back to games">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.mutedFg }}>Brain Games</span>
      </div>

      {/* ── Scrollable body ── */}
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>

        {/* Hero banner */}
        <div style={{ margin: "24px 20px 0", borderRadius: 28, backgroundColor: m.iconBg,
          padding: "32px 24px 28px", display: "flex", flexDirection: "column",
          alignItems: "center", gap: 16, position: "relative", overflow: "hidden" }}>
          {/* Decorative background ring */}
          <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%",
            border: `32px solid rgba(255,255,255,0.1)`, top: -60, right: -60, pointerEvents: "none" }}/>
          <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%",
            border: `20px solid rgba(255,255,255,0.08)`, bottom: -40, left: -30, pointerEvents: "none" }}/>

          {/* Icon circle */}
          <div style={{ width: 96, height: 96, borderRadius: 30,
            backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.35)" }}
            className="flex items-center justify-center">
            {m.bigIcon}
          </div>

          {/* Game name */}
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 28, fontWeight: 700,
              lineHeight: 1.2, margin: "0 0 8px" }}>
              {m.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 16, fontWeight: 500,
              lineHeight: 1.5, margin: 0, maxWidth: 260 }}>
              {m.description}
            </p>
          </div>

          {/* Meta pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ backgroundColor: "rgba(255,255,255,0.22)", color: "#fff",
              borderRadius: 24, fontSize: 13, fontWeight: 700, padding: "5px 14px",
              display: "flex", alignItems: "center", gap: 5 }}>
              <Ic.Clock size={13} color="#fff"/> {m.time}
            </span>
            <span style={{ backgroundColor: "rgba(255,255,255,0.22)", color: "#fff",
              borderRadius: 24, fontSize: 13, fontWeight: 700, padding: "5px 14px" }}>
              ✦ {m.level}
            </span>
          </div>
        </div>

        {/* Content cards */}
        <div style={{ padding: "20px 20px 8px", display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Your level */}
          <div style={{ backgroundColor: C.card, borderRadius: 22, border: `1.5px solid ${C.border}`,
            padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: m.cardBg,
              flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22 }}>
              🌱
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: 6 }}>
                Your Level
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: C.fg, marginBottom: 4 }}>{m.level}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {[m.levelNote, "No time limit", `Played ${m.played} times`].map(line => (
                  <div key={line} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%",
                      backgroundColor: C.mutedFg, flexShrink: 0 }}/>
                    <span style={{ fontSize: 14, fontWeight: 500, color: C.mutedFg }}>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to play — 3 numbered steps */}
          <div style={{ backgroundColor: C.card, borderRadius: 22, border: `1.5px solid ${C.border}`,
            padding: "18px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: 16 }}>
              How to Play
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {m.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  {/* Step number */}
                  <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: m.cardBg,
                    flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    border: `2px solid ${m.iconBg}44` }}>
                    <span style={{ fontSize: 15, fontWeight: 900, color: m.iconBg }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 500, color: C.fgSub, lineHeight: 1.55,
                    margin: "4px 0 0", flex: 1 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pictures note */}
          <div style={{ backgroundColor: m.cardBg, borderRadius: 20, border: `1px solid ${C.border}`,
            padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: C.card,
              border: `1px solid ${C.border}`, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              🖼️
            </div>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.fgSub, margin: 0, lineHeight: 1.5 }}>
              Pictures: nature, food, animals &amp; familiar objects
            </p>
          </div>

        </div>
      </div>

      {/* ── Pinned CTA ── */}
      <div style={{ padding: "12px 20px 28px", flexShrink: 0,
        borderTop: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        <PrimaryButton label={`Start Game  ${m.emoji}`} onClick={onStart} fullWidth size="lg"/>
        <div style={{ marginTop: 12 }}>
          <SecondaryButton label="Go Back" onClick={onBack} fullWidth/>
        </div>
      </div>

    </div>
  );
}

/* ── GAMES HOME SCREEN ── */
function GamesScreen({ onOpenIntro }: { onOpenIntro: (g: GameKey) => void }) {
  const [activeFilter, setActiveFilter] = useState<"all" | "memory" | "language" | "music" | "stories">("all");

  const filters: { id: typeof activeFilter; label: string }[] = [
    { id: "all",      label: "All Games" },
    { id: "memory",   label: "Memory" },
    { id: "language", label: "Language" },
    { id: "music",    label: "Music" },
    { id: "stories",  label: "Stories" },
  ];

  const filterMap: Record<GameKey, typeof activeFilter> = {
    memory:  "memory",
    recall:  "memory",
    pattern: "memory",
    song:    "music",
    word:    "language",
    photo:   "stories",
  };

  const visible = activeFilter === "all"
    ? GAME_ORDER
    : GAME_ORDER.filter(k => filterMap[k] === activeFilter);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

      {/* ── Header ── */}
      <div style={{ padding: "24px 20px 0" }}>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 30, fontWeight: 700,
          lineHeight: 1.2, margin: "0 0 4px" }}>
          Brain Games
        </h1>
        <p style={{ fontSize: 15, fontWeight: 500, color: C.mutedFg, margin: 0 }}>
          A little practice every day
        </p>
      </div>

      {/* ── Today's progress ── */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ backgroundColor: C.card, borderRadius: 26, border: `1.5px solid ${C.border}`,
          borderTop: `4px solid ${C.green}`, padding: "18px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: 3 }}>
                Today's Progress
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: C.fg }}>2 of 3 done</div>
            </div>
            <div style={{ width: 54, height: 54, borderRadius: 18, backgroundColor: C.greenLight,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 26 }}>🌿</span>
            </div>
          </div>
          {/* Bar */}
          <div style={{ backgroundColor: C.muted, borderRadius: 99, height: 12 }}>
            <div style={{ backgroundColor: C.green, borderRadius: 99, height: 12, width: "67%",
              transition: "width 0.5s ease" }}/>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>
              1 game left for today
            </span>
            <span style={{ fontSize: 13, fontWeight: 800, color: C.green }}>67%</span>
          </div>

          {/* Weekly mini-stats */}
          <div style={{ display: "flex", borderTop: `1px solid ${C.border}`, marginTop: 14,
            paddingTop: 14, gap: 0 }}>
            {[
              { num: "14", label: "This Week" },
              { num: "4",  label: "Best Streak" },
              { num: "82%", label: "Avg Score" },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ flex: 1, textAlign: "center",
                borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.green }}>{s.num}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.mutedFg, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category filter (scrollable, visually secondary) ── */}
      <div style={{ padding: "20px 20px 0", overflowX: "auto", display: "flex", gap: 8,
        scrollbarWidth: "none" }}>
        {filters.map(f => (
          <button key={f.id} onClick={() => setActiveFilter(f.id)}
            style={{ borderRadius: 24, whiteSpace: "nowrap", flexShrink: 0, fontSize: 14,
              fontWeight: 700, padding: "8px 18px", minHeight: 38,
              backgroundColor: activeFilter === f.id ? C.green : C.muted,
              color: activeFilter === f.id ? C.card : C.fgSub,
              border: activeFilter === f.id ? `2px solid ${C.green}` : `2px solid transparent`,
              transition: "all 0.15s" }}
            className="active:scale-95">
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Game cards ── */}
      <div style={{ padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        {visible.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: C.mutedFg,
            fontSize: 16, fontWeight: 500 }}>
            No games in this category yet.
          </div>
        ) : visible.map(key => {
          const m = GAME_META[key];
          return (
            <button key={key} onClick={() => onOpenIntro(key)}
              style={{ backgroundColor: C.card, borderRadius: 26, border: `1.5px solid ${C.border}`,
                padding: 0, overflow: "hidden", width: "100%", textAlign: "left" }}
              className="active:scale-95 transition-all shadow-sm"
              aria-label={`Play ${m.title}`}>
              <div style={{ display: "flex", alignItems: "stretch" }}>

                {/* Colour sidebar + icon */}
                <div style={{ width: 80, backgroundColor: m.iconBg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "20px 0", position: "relative", overflow: "hidden" }}>
                  {/* subtle ring */}
                  <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%",
                    border: "16px solid rgba(255,255,255,0.15)", top: -20, left: -20 }}/>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    {m.icon}
                  </div>
                </div>

                {/* Text content */}
                <div style={{ flex: 1, padding: "18px 16px 16px", display: "flex",
                  flexDirection: "column", gap: 6, minWidth: 0 }}>
                  <div style={{ fontSize: 19, fontWeight: 800, color: C.fg, lineHeight: 1.2 }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.mutedFg, lineHeight: 1.45 }}>
                    {m.description}
                  </div>

                  {/* Stars + play count */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[1,2,3,4,5].map(s => <Ic.Star key={s} size={15} filled={s <= m.stars}/>)}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.mutedFg }}>
                      {m.played} times played
                    </span>
                  </div>

                  {/* Level + time chips */}
                  <div style={{ display: "flex", gap: 8, marginTop: 2, flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: m.cardBg, color: C.fgSub, borderRadius: 24,
                      fontSize: 12, fontWeight: 700, padding: "3px 10px" }}>
                      ✦ {m.level}
                    </span>
                    <span style={{ backgroundColor: C.muted, color: C.fgSub, borderRadius: 24,
                      fontSize: 12, fontWeight: 700, padding: "3px 10px",
                      display: "flex", alignItems: "center", gap: 4 }}>
                      <Ic.Clock size={11} color={C.mutedFg}/> {m.time}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div style={{ display: "flex", alignItems: "center", paddingRight: 16, flexShrink: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: m.cardBg,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Ic.ChevRight size={18} color={m.iconBg}/>
                  </div>
                </div>

              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}

/* HOME */
function HomeScreen({ onNavigate, onOpenGame }: {
  onNavigate: (t: Tab) => void;
  onOpenGame: (g: GameKey) => void;
}) {
  const h = new Date().getHours();
  const greetingText = h < 12 ? "Good Morning" : h < 17 ? "Good Afternoon" : "Good Evening";
  const greetingEmoji = h < 12 ? "🌅" : h < 17 ? "☀️" : "🌙";

  const reminders = [
    { icon: <Ic.Pill size={22} color={C.coral}/>,  iconBg: C.coralLight, label: "Morning Medicine", time: "8:00 AM",  done: true  },
    { icon: <Ic.Walk size={22} color="#3B82F6"/>, iconBg: "#EFF6FF",     label: "Evening Walk",      time: "5:30 PM",  done: false },
    { icon: <Ic.Pill size={22} color={C.coral}/>,  iconBg: C.coralLight, label: "Evening Medicine",  time: "8:00 PM",  done: false },
  ];

  const games: { key: GameKey; emoji: string; label: string; sub: string; bg: string }[] = [
    { key: "memory", emoji: "🧩", label: "Memory Match",  sub: "Find pairs",     bg: C.greenLight },
    { key: "song",   emoji: "🎵", label: "Song Quiz",     sub: "Guess the tune", bg: C.coralLight },
    { key: "word",   emoji: "🔤", label: "Word Match",    sub: "Bengali words",  bg: C.brownLight },
    { key: "photo",  emoji: "🖼️", label: "Photo Stories", sub: "Your photos",    bg: "#EAF3F9"    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", paddingBottom: 24, gap: 20, paddingTop: 24 }}>

      {/* ① Greeting row — left: text, right: tappable avatar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 20 }} aria-hidden>{greetingEmoji}</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: C.mutedFg }}>{greetingText}</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 32, fontWeight: 700,
            lineHeight: 1.15, margin: 0 }}>
            Meena Devi
          </h1>
        </div>

        {/* Avatar — taps to Profile */}
        <button onClick={() => onNavigate("profile")}
          style={{ width: 62, height: 62, borderRadius: "50%", backgroundColor: C.brownLight,
            border: `3px solid ${C.green}`, flexShrink: 0 }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Open your profile">
          <span style={{ color: C.brown, fontSize: 22, fontWeight: 900 }}>MD</span>
        </button>
      </div>

      {/* ② Streak / Encouragement */}
      <div style={{ padding: "0 20px" }}>
        <div style={{ backgroundColor: C.green, borderRadius: 26, color: C.card,
          display: "flex", alignItems: "center", gap: 16, padding: "20px 22px" }}>
          <span style={{ fontSize: 44, lineHeight: 1, flexShrink: 0 }} aria-hidden>🌿</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, opacity: 0.75, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 4 }}>
              Today's Streak
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.2, marginBottom: 4 }}>
              14 days in a row!
            </div>
            <div style={{ fontSize: 14, opacity: 0.82, fontWeight: 500, lineHeight: 1.45 }}>
              You are doing wonderfully, Meena.
            </div>
          </div>
        </div>
      </div>

      {/* ③ Today's Reminders — full card is tappable → Reminders */}
      <div style={{ padding: "0 20px" }}>
        <button onClick={() => onNavigate("reminders")}
          style={{ width: "100%", textAlign: "left" }}
          className="active:opacity-75 transition-opacity"
          aria-label="Open today's reminders">
          <div style={{ backgroundColor: C.card, borderRadius: 26,
            border: `1.5px solid ${C.border}`, borderTop: `4px solid ${C.coral}` }}>
            {/* Card header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 20px 12px" }}>
              <span style={{ fontSize: 17, fontWeight: 800, color: C.fgSub }}>
                Today's Reminders
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.coral }}>See all →</span>
            </div>
            {/* Rows */}
            <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: 0 }}>
              {reminders.map((r, i) => (
                <div key={r.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "11px 4px" }}>
                    {/* Icon */}
                    <div style={{ width: 50, height: 50, borderRadius: 16, flexShrink: 0,
                      backgroundColor: r.done ? C.greenLight : r.iconBg,
                      display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {r.done ? <Ic.Check size={22} color={C.green}/> : r.icon}
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3,
                        color: r.done ? C.mutedFg : C.fg,
                        textDecoration: r.done ? "line-through" : "none" }}>
                        {r.label}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}>
                        <Ic.Clock size={13} color={C.mutedFg}/>
                        <span style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>{r.time}</span>
                      </div>
                    </div>
                    {/* Badge */}
                    <StatusBadge
                      label={r.done ? "Done ✓" : i === 1 ? "Upcoming" : "Later"}
                      type={r.done ? "success" : i === 1 ? "info" : "pending"}
                    />
                  </div>
                  {i < reminders.length - 1 && (
                    <div style={{ height: 1, backgroundColor: C.border, marginLeft: 64 }}/>
                  )}
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>

      {/* ④ Games Today progress — tappable → Games */}
      <div style={{ padding: "0 20px" }}>
        <button onClick={() => onNavigate("games")}
          style={{ width: "100%", textAlign: "left" }}
          className="active:opacity-75 transition-opacity"
          aria-label="See games progress">
          <div style={{ backgroundColor: C.card, borderRadius: 26, border: `1.5px solid ${C.border}`,
            borderTop: `4px solid ${C.green}`, padding: "18px 20px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 17, fontWeight: 800, color: C.fgSub }}>Games Today</span>
              <span style={{ fontSize: 24, fontWeight: 900, color: C.green }}>2 / 3</span>
            </div>
            {/* Bar */}
            <div style={{ backgroundColor: C.muted, borderRadius: 99, height: 14 }}>
              <div style={{ backgroundColor: C.green, borderRadius: 99, height: 14, width: "67%",
                transition: "width 0.5s ease" }}/>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.mutedFg }}>2 done · 1 left for today</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.green }}>See all →</span>
            </div>
          </div>
        </button>
      </div>

      {/* ⑤ Play Now — 2×2 game cards, each opens game intro */}
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: C.fgSub }}>Play Now</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>4 games</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {games.map(g => (
            <button key={g.key} onClick={() => onOpenGame(g.key)}
              style={{ backgroundColor: g.bg, borderRadius: 24, border: `1.5px solid ${C.border}`,
                minHeight: 140, padding: "22px 12px", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 8 }}
              className="active:scale-95 transition-all"
              aria-label={`Play ${g.label}`}>
              <span style={{ fontSize: 40, lineHeight: 1 }} aria-hidden>{g.emoji}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: C.fg, textAlign: "center",
                lineHeight: 1.25 }}>
                {g.label}
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: C.mutedFg }}>{g.sub}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

/* MEMORIES */
function MemoriesScreen({ onOpenDetail }: { onOpenDetail: () => void }) {
  const memories = [
    { emoji: "👨‍👩‍👧‍👦", title: "Family Reunion",  date: "Bihu 2023",   desc: "With Priya and the grandchildren at Jorhat" },
    { emoji: "🌸",         title: "Garden Morning", date: "March 2024",  desc: "My rose garden after the rains" },
    { emoji: "🏠",         title: "Our Home",       date: "1985",        desc: "The house we built in Guwahati" },
  ];

  return (
    <div className="flex flex-col gap-5 px-4 pt-5 pb-4">
      <div>
        <h1 className="text-[28px] font-extrabold" style={{ fontFamily: "'Lora', serif", color: C.fg }}>My Memories</h1>
        <p className="text-sm font-medium mt-0.5" style={{ color: C.mutedFg }}>Your special moments</p>
      </div>

      <div className="flex gap-3">
        <button style={{ flex: 1, backgroundColor: C.green, color: C.card, borderRadius: 16, minHeight: 52, fontWeight: 800, fontSize: 15 }}
          className="flex items-center justify-center gap-2 active:scale-95 transition-all">
          <Ic.Plus size={18} color={C.card}/> Add Memory
        </button>
        <button style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
          className="flex items-center justify-center active:scale-90">
          <Ic.Share size={20} color={C.fgSub}/>
        </button>
      </div>

      {memories.map(m => (
        <button key={m.title}
          onClick={onOpenDetail}
          style={{ backgroundColor: C.card, borderRadius: 22, border: `1px solid ${C.border}`, width: "100%", textAlign: "left" }}
          className="flex items-center gap-4 p-4 shadow-sm active:opacity-80 transition-opacity"
          aria-label={`Open memory: ${m.title}`}>
          <div style={{ width: 64, height: 64, borderRadius: 18, backgroundColor: C.brownLight, flexShrink: 0, fontSize: 32 }}
            className="flex items-center justify-center">{m.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-extrabold" style={{ color: C.fg }}>{m.title}</div>
            <div className="text-xs font-bold uppercase tracking-wide mt-0.5" style={{ color: C.coral }}>{m.date}</div>
            <div className="text-sm font-medium mt-1 leading-snug" style={{ color: C.mutedFg }}>{m.desc}</div>
          </div>
          <Ic.ChevRight size={18} color={C.mutedFg}/>
        </button>
      ))}

      {/* Empty state example (shown when no memories) */}
      <div style={{ display: "none" }}>
        <EmptyState
          icon={<Ic.Heart size={36} color={C.mutedFg}/>}
          title="No memories yet"
          body="Add your first special memory — a photo, a place, or a moment you love."
          action={<PrimaryButton label="Add a Memory" onClick={() => {}}/>}
        />
      </div>
    </div>
  );
}

/* REMINDERS */
type ReminderItem = { id: number; title: string; time: string; done: boolean; type: "pill" | "walk" | "sun" };
function RemindersScreen({ onOpenDetail }: { onOpenDetail: () => void }) {
  const [items, setItems] = useState<ReminderItem[]>([
    { id: 1, title: "Morning Medicine", time: "8:00 AM",  done: true,  type: "pill" },
    { id: 2, title: "Morning Walk",     time: "9:00 AM",  done: true,  type: "walk" },
    { id: 3, title: "Afternoon Medicine",time: "1:00 PM", done: false, type: "pill" },
    { id: 4, title: "Evening Walk",     time: "5:30 PM",  done: false, type: "walk" },
    { id: 5, title: "Evening Medicine", time: "8:00 PM",  done: false, type: "pill" },
  ]);
  const [toast, setToast] = useState<string | null>(null);

  const icons: Record<ReminderItem["type"], React.ReactNode> = {
    pill: <Ic.Pill size={22} color={C.coral}/>,
    walk: <Ic.Walk size={22} color="#3B82F6"/>,
    sun:  <Ic.Sun size={22} color="#D97706"/>,
  };

  function toggle(id: number) {
    const item = items.find(r => r.id === id)!;
    setItems(rs => rs.map(r => r.id === id ? { ...r, done: !r.done } : r));
    if (!item.done) {
      setToast(`"${item.title}" marked as done!`);
      setTimeout(() => setToast(null), 2500);
    }
  }

  const done = items.filter(r => r.done).length;

  return (
    <div className="flex flex-col gap-4 px-4 pt-5 pb-4 relative">
      <div>
        <h1 className="text-[28px] font-extrabold" style={{ fontFamily: "'Lora', serif", color: C.fg }}>Today's Plan</h1>
        <p className="text-sm font-medium mt-0.5" style={{ color: C.mutedFg }}>{done} of {items.length} tasks done</p>
      </div>
      <ProgressBar label="Tasks completed" current={done} total={items.length} color={C.coral}/>
      <div className="flex flex-col gap-3">
        {items.map(r => (
          <div key={r.id} onClick={onOpenDetail} role="button" tabIndex={0}
            onKeyDown={e => e.key === "Enter" && onOpenDetail()}
            style={{ cursor: "pointer" }}
            aria-label={`Open ${r.title}`}>
            <ReminderCard icon={icons[r.type]} title={r.title} time={r.time} done={r.done}
              onToggle={() => { toggle(r.id); }}/>
          </div>
        ))}
      </div>
      {done === items.length && (
        <div style={{ backgroundColor: C.greenLight, borderRadius: 20, border: `2px solid ${C.green}` }}
          className="flex flex-col items-center py-6 px-4 text-center gap-2">
          <span className="text-4xl">🌟</span>
          <div className="text-xl font-extrabold" style={{ color: C.greenDark }}>All done for today!</div>
          <div className="text-base font-medium" style={{ color: C.greenDark }}>Well done — you finished everything!</div>
        </div>
      )}
      {toast && <Toast message={toast}/>}
    </div>
  );
}

/* PROFILE */
function ProfileScreen({ onOpenSub }: { onOpenSub: (s: string) => void }) {
  const settings = [
    { e: "♿", l: "Accessibility", sub: "Text size, contrast, sound", key: "accessibility" },
    { e: "🗣️", l: "Language",       sub: "English, Assamese, Bengali…", key: "language" },
    { e: "🎙️", l: "Voice Assistant", sub: "Speak to navigate the app",   key: "voice" },
    { e: "❓", l: "Help & Support",  sub: "FAQs and caregiver contact",   key: "help" },
    { e: "ℹ️", l: "About NeuroNerd", sub: "Version 1.0 · Northeast India", key: "about" },
  ];

  return (
    <div className="flex flex-col gap-5 px-4 pt-5 pb-4">
      <div className="flex flex-col items-center gap-3 py-3">
        <div style={{ width: 84, height: 84, borderRadius: "50%", backgroundColor: C.brownLight, border: `3px solid ${C.green}` }}
          className="flex items-center justify-center">
          <span style={{ fontSize: 34, fontWeight: 900, color: C.brown }}>MD</span>
        </div>
        <div className="text-2xl font-extrabold text-center" style={{ fontFamily: "'Lora', serif", color: C.fg }}>Meena Devi</div>
        <StatusBadge label="Active · 14 day streak" type="success"/>
      </div>

      <Card title="Achievements" accent={C.brown}>
        <div className="grid grid-cols-3 gap-2">
          {[{ e: "🎮", n: "47", l: "Games\nPlayed" }, { e: "⭐", n: "82%", l: "Avg\nScore" }, { e: "🔥", n: "14", l: "Day\nStreak" }].map(s => (
            <div key={s.l} style={{ backgroundColor: C.muted, borderRadius: 16 }} className="flex flex-col items-center gap-1 py-4">
              <div className="text-xl">{s.e}</div>
              <div className="text-xl font-extrabold" style={{ color: C.fg }}>{s.n}</div>
              <div className="text-xs font-bold text-center whitespace-pre-line" style={{ color: C.mutedFg }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="My Caregiver" accent={C.coral}>
        <div className="flex items-center gap-4">
          <Avatar name="Priya Devi" size={54}/>
          <div className="flex-1">
            <div className="text-lg font-extrabold" style={{ color: C.fg }}>Priya Devi</div>
            <div className="text-sm font-medium" style={{ color: C.mutedFg }}>Daughter · Guwahati</div>
            <div className="text-sm font-semibold mt-1" style={{ color: C.green }}>Last check-in: Today, 10:30 AM</div>
          </div>
        </div>
      </Card>

      <Card noPad>
        {settings.map(({ e, l, sub, key }, i, arr) => (
          <div key={l}>
            <button onClick={() => onOpenSub(key)}
              className="w-full flex items-center gap-4 px-5 py-4 active:opacity-70 text-left"
              style={{ minHeight: 64 }}>
              <span className="text-2xl">{e}</span>
              <div style={{ flex: 1 }}>
                <div className="text-base font-bold" style={{ color: C.fg }}>{l}</div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: C.mutedFg }}>{sub}</div>
              </div>
              <Ic.ChevRight size={18} color={C.mutedFg}/>
            </button>
            {i < arr.length - 1 && <div style={{ height: 1, backgroundColor: C.border, marginLeft: 64 }}/>}
          </div>
        ))}
      </Card>

      <DestructiveButton label="Sign Out" onClick={() => {}} fullWidth/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MEMORY MATCH — full 3-phase game experience
   ───────────────────────────────────────────── */

/* 4 culturally-grounded Northeast India pairs */
const PAIRS: { emoji: string; label: string; bg: string }[] = [
  { emoji: "🌺", label: "Foxtail Orchid",  bg: "#FAE8F0" },
  { emoji: "🍵", label: "Assam Tea",       bg: "#F5EFE4" },
  { emoji: "🪔", label: "Diya lamp",       bg: "#FEF3C7" },
  { emoji: "🦜", label: "Green Parakeet",  bg: "#EBF3EE" },
];

type MemTile = {
  id: number;
  pairIdx: number;
  emoji: string;
  label: string;
  bg: string;
  state: "hidden" | "revealed" | "matched";
};

function shufflePairs(): MemTile[] {
  return [...PAIRS, ...PAIRS]
    .map((p, i) => ({ id: i, pairIdx: Math.floor(i < PAIRS.length ? i : i - PAIRS.length), ...p, state: "hidden" as const }))
    .sort(() => Math.random() - 0.5)
    .map((t, i) => ({ ...t, id: i }));
}

const ENCOURAGE = [
  "Take your time.",
  "You are doing wonderfully.",
  "Look carefully.",
  "Almost there!",
  "Keep going, Meena!",
];

/* Pause icon */
function PauseIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="6" y="4" width="4" height="16" rx="1"/>
      <rect x="14" y="4" width="4" height="16" rx="1"/>
    </svg>
  );
}

/* ── GAMEPLAY ── */
function MemoryGameplay({ onComplete, onBack }: {
  onComplete: (elapsed: number) => void;
  onBack: () => void;
}) {
  const [tiles, setTiles]     = useState<MemTile[]>(shufflePairs);
  const [sel, setSel]         = useState<number[]>([]);
  const [locked, setLocked]   = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  const [msgIdx, setMsgIdx]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [startMs]             = useState(() => Date.now());

  const TOTAL_PAIRS = PAIRS.length; // 4

  function tap(id: number) {
    if (locked || paused) return;
    const tile = tiles[id];
    if (tile.state !== "hidden") return;
    if (sel.includes(id)) return;

    const next = sel.concat(id);
    const updated = tiles.map(t => t.id === id ? { ...t, state: "revealed" as const } : t);
    setTiles(updated);
    setSel(next);

    if (next.length === 2) {
      setLocked(true);
      const [a, b] = next;
      const ta = updated[a], tb = updated[b];

      if (ta.pairIdx === tb.pairIdx) {
        /* Match */
        setTimeout(() => {
          setTiles(prev => prev.map(t =>
            t.id === a || t.id === b ? { ...t, state: "matched" as const } : t
          ));
          const newCount = matchCount + 1;
          setMatchCount(newCount);
          setMsgIdx(i => (i + 1) % ENCOURAGE.length);
          setSel([]);
          setLocked(false);
          if (newCount === TOTAL_PAIRS) {
            setTimeout(() => onComplete(Math.round((Date.now() - startMs) / 60000)), 500);
          }
        }, 600);
      } else {
        /* No match — flip back */
        setTimeout(() => {
          setTiles(prev => prev.map(t =>
            t.id === a || t.id === b ? { ...t, state: "hidden" as const } : t
          ));
          setSel([]);
          setLocked(false);
        }, 1100);
      }
    }
  }

  function restart() {
    setTiles(shufflePairs());
    setSel([]);
    setLocked(false);
    setMatchCount(0);
    setMsgIdx(0);
    setPaused(false);
  }

  const pairLabel = matchCount < TOTAL_PAIRS
    ? `Pair ${matchCount + 1} of ${TOTAL_PAIRS}`
    : `All ${TOTAL_PAIRS} pairs found!`;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%",
      backgroundColor: C.cream, position: "relative" }}>

      {/* ── Header ── */}
      <div style={{ flexShrink: 0, padding: "18px 20px 14px",
        borderBottom: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Back / exit */}
          <button onClick={onBack}
            style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
            className="flex items-center justify-center active:scale-90 transition-all"
            aria-label="Exit game">
            <Ic.ChevLeft size={22} color={C.fg}/>
          </button>

          {/* Title + pair label */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.fg, lineHeight: 1.2,
              fontFamily: "'Lora', serif" }}>
              Memory Match
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.green, marginTop: 2 }}>
              {pairLabel}
            </div>
          </div>

          {/* Pause */}
          <button onClick={() => setPaused(p => !p)}
            style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
            className="flex items-center justify-center active:scale-90 transition-all"
            aria-label="Pause game">
            <PauseIcon size={20} color={C.fg}/>
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 14, backgroundColor: C.muted, borderRadius: 99, height: 10 }}>
          <div style={{ backgroundColor: C.green, borderRadius: 99, height: 10,
            width: `${(matchCount / TOTAL_PAIRS) * 100}%`, transition: "width 0.5s ease" }}/>
        </div>
      </div>

      {/* ── Instruction strip ── */}
      <div style={{ flexShrink: 0, padding: "14px 20px 10px",
        backgroundColor: C.greenLight, borderBottom: `1px solid ${C.border}` }}>
        <p style={{ fontSize: 17, fontWeight: 700, color: C.greenDark, margin: 0, textAlign: "center" }}>
          Find the matching picture.
        </p>
      </div>

      {/* ── Card grid — 2 columns × 4 rows ── */}
      <div style={{ flex: 1, padding: "16px 16px 8px", overflowY: "auto", scrollbarWidth: "none" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {tiles.map(tile => {
            const revealed = tile.state === "revealed" || tile.state === "matched";
            const matched  = tile.state === "matched";

            return (
              <button
                key={tile.id}
                onClick={() => tap(tile.id)}
                disabled={tile.state !== "hidden" && !sel.includes(tile.id)}
                style={{
                  borderRadius: 22,
                  minHeight: 110,
                  border: matched
                    ? `3px solid ${C.green}`
                    : revealed
                    ? `3px solid ${C.border}`
                    : `3px solid ${C.greenDark}`,
                  backgroundColor: matched
                    ? C.greenLight
                    : revealed
                    ? C.card
                    : C.green,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  cursor: tile.state === "hidden" ? "pointer" : "default",
                  transition: "background-color 0.25s, border-color 0.25s",
                  position: "relative",
                  overflow: "hidden",
                }}
                aria-label={revealed ? `${tile.label} card` : "Hidden card, tap to reveal"}
                className="active:scale-95"
              >
                {matched && (
                  /* Subtle match tick in corner */
                  <div style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22,
                    borderRadius: "50%", backgroundColor: C.green,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Ic.Check size={13} color={C.card}/>
                  </div>
                )}

                {revealed ? (
                  <>
                    {/* Coloured tinted bg pill */}
                    <div style={{ width: 72, height: 72, borderRadius: 20,
                      backgroundColor: tile.bg,
                      display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 42, lineHeight: 1 }}>{tile.emoji}</span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700,
                      color: matched ? C.greenDark : C.mutedFg,
                      textAlign: "center", lineHeight: 1.3 }}>
                      {tile.label}
                    </span>
                  </>
                ) : (
                  /* Face-down pattern */
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                    gap: 6, opacity: 0.4 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                      {[0,1,2,3].map(d => (
                        <div key={d} style={{ width: 14, height: 14, borderRadius: 4,
                          backgroundColor: "rgba(255,255,255,0.6)" }}/>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Encouraging message ── */}
      <div style={{ flexShrink: 0, padding: "10px 20px 18px", textAlign: "center" }}>
        <p style={{ fontSize: 16, fontWeight: 600, color: C.mutedFg, margin: 0,
          fontStyle: "italic" }}>
          {ENCOURAGE[msgIdx]}
        </p>
      </div>

      {/* ── Pause overlay ── */}
      {paused && (
        <div style={{ position: "absolute", inset: 0, zIndex: 40,
          backgroundColor: "rgba(250,248,243,0.96)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 24, padding: "0 32px" }}>
          <span style={{ fontSize: 56 }}>⏸</span>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700,
              color: C.fg, marginBottom: 8 }}>
              Game Paused
            </div>
            <div style={{ fontSize: 16, fontWeight: 500, color: C.mutedFg }}>
              Take a rest. Your progress is saved.
            </div>
          </div>
          <PrimaryButton label="Continue Playing" onClick={() => setPaused(false)} fullWidth size="lg"/>
          <SecondaryButton label="Exit Game" onClick={onBack} fullWidth/>
        </div>
      )}
    </div>
  );
}

/* ── GAME COMPLETE ── */
function MemoryGameComplete({ elapsedMin, onPlayAgain, onBack }: {
  elapsedMin: number; onPlayAgain: () => void; onBack: () => void;
}) {
  const timeStr = elapsedMin <= 1 ? "About 1 minute" : `About ${elapsedMin} minutes`;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%",
      backgroundColor: C.cream }}>

      {/* Hero */}
      <div style={{ backgroundColor: C.green, padding: "48px 24px 40px",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 18, position: "relative", overflow: "hidden", flexShrink: 0 }}>
        {/* Decorative rings */}
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%",
          border: "40px solid rgba(255,255,255,0.08)", top: -80, right: -80 }}/>
        <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%",
          border: "28px solid rgba(255,255,255,0.07)", bottom: -50, left: -50 }}/>

        {/* Large celebratory illustration */}
        <div style={{ position: "relative", zIndex: 1, width: 110, height: 110,
          borderRadius: 34, backgroundColor: "rgba(255,255,255,0.2)",
          border: "2px solid rgba(255,255,255,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 60 }}>
          🌟
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 32,
            fontWeight: 700, margin: "0 0 10px", lineHeight: 1.2 }}>
            Well done!
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 17, fontWeight: 500,
            margin: 0, lineHeight: 1.5 }}>
            You completed Memory Match.
          </p>
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ flex: 1, padding: "28px 20px 12px", display: "flex",
        flexDirection: "column", gap: 14 }}>

        {/* Stats */}
        <div style={{ backgroundColor: C.card, borderRadius: 24,
          border: `1.5px solid ${C.border}`, padding: "22px 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 18 }}>
            How you did
          </div>
          <div style={{ display: "flex" }}>
            {[
              { emoji: "🧩", value: "4 pairs", label: "Found" },
              { emoji: "⏱️", value: timeStr, label: "Played" },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ flex: 1, textAlign: "center",
                borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                padding: "0 8px" }}>
                <div style={{ fontSize: 32, marginBottom: 6 }}>{s.emoji}</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: C.fg,
                  marginBottom: 3 }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pairs collected — visual recap */}
        <div style={{ backgroundColor: C.card, borderRadius: 24,
          border: `1.5px solid ${C.border}`, padding: "22px 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 16 }}>
            Pairs you found
          </div>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            {PAIRS.map(p => (
              <div key={p.label} style={{ display: "flex", flexDirection: "column",
                alignItems: "center", gap: 6 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: p.bg,
                  border: `2px solid ${C.green}`, display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 28 }}>
                  {p.emoji}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.mutedFg,
                  textAlign: "center", maxWidth: 54, lineHeight: 1.3 }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warm message */}
        <div style={{ backgroundColor: C.brownLight, borderRadius: 20,
          border: `1px solid ${C.border}`, padding: "16px 20px",
          display: "flex", alignItems: "flex-start", gap: 14 }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>🌸</span>
          <p style={{ fontSize: 15, fontWeight: 600, color: C.fgSub, margin: 0, lineHeight: 1.6 }}>
            Playing every day keeps your memory strong. You should be very proud of yourself!
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ flexShrink: 0, padding: "8px 20px 32px",
        borderTop: `1px solid ${C.border}`, backgroundColor: C.cream,
        display: "flex", flexDirection: "column", gap: 12 }}>
        <PrimaryButton label="Play Again  🧩" onClick={onPlayAgain} fullWidth size="lg"/>
        <SecondaryButton label="Back to Games" onClick={onBack} fullWidth/>
      </div>
    </div>
  );
}

/* ── MEMORY MATCH CONTROLLER ── */
type MemPhase = "playing" | "complete";

function MemoryGame({ onBack }: { onBack: () => void }) {
  const [phase, setPhase]       = useState<MemPhase>("playing");
  const [elapsed, setElapsed]   = useState(0);

  function handleComplete(mins: number) {
    setElapsed(mins);
    setPhase("complete");
  }

  if (phase === "complete") {
    return (
      <MemoryGameComplete
        elapsedMin={elapsed}
        onPlayAgain={() => setPhase("playing")}
        onBack={onBack}
      />
    );
  }

  return <MemoryGameplay onComplete={handleComplete} onBack={onBack}/>;
}

/* ─────────────────────────────────────────────
   OBJECT RECALL GAME
   ───────────────────────────────────────────── */

/* All available objects — culturally grounded Northeast India items */
const ALL_OBJECTS: { emoji: string; label: string; bg: string }[] = [
  { emoji: "🍵", label: "Assam Tea",     bg: "#F5EFE4" },
  { emoji: "🪔", label: "Diya Lamp",     bg: "#FEF3C7" },
  { emoji: "🌺", label: "Red Flower",    bg: "#FAE8F0" },
  { emoji: "🧺", label: "Cane Basket",   bg: "#F5EFE4" },
  { emoji: "☂️", label: "Umbrella",      bg: "#EAF3F9" },
  { emoji: "🍋", label: "Lemon",         bg: "#FEFCE8" },
  { emoji: "🎋", label: "Bamboo",        bg: "#EBF3EE" },
  { emoji: "🍚", label: "Rice Bowl",     bg: "#F8F8F0" },
  { emoji: "🌿", label: "Fresh Herb",    bg: "#EBF3EE" },
  { emoji: "🪭", label: "Hand Fan",      bg: "#FAE8F0" },
  { emoji: "🍌", label: "Banana",        bg: "#FEFCE8" },
  { emoji: "🌾", label: "Paddy Stalk",   bg: "#F5EFE4" },
];

/* Three rounds of increasing challenge */
const RECALL_ROUNDS: { targets: number[]; poolSize: number }[] = [
  { targets: [0, 1, 2],       poolSize: 7 },   // remember 3 from 7
  { targets: [3, 4, 5, 6],    poolSize: 9 },   // remember 4 from 9
  { targets: [7, 8, 9, 10, 11], poolSize: 12 }, // remember 5 from 12
];

/* Shuffle helper */
function arrShuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

type RecallPhase = "viewing" | "recalling" | "roundResult" | "done";

function ObjectRecallGame({ onBack }: { onBack: () => void }) {
  const [round, setRound]       = useState(0);
  const [phase, setPhase]       = useState<RecallPhase>("viewing");
  const [pool, setPool]         = useState<number[]>([]);   // indices shown in recall grid
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [scores, setScores]     = useState<number[]>([]);   // correct per round

  const totalRounds = RECALL_ROUNDS.length;
  const meta        = RECALL_ROUNDS[round];
  const targets     = meta.targets;

  /* Build recall pool: targets + enough distractors, shuffled */
  function buildPool(r: number) {
    const { targets: tgt, poolSize } = RECALL_ROUNDS[r];
    const distractors = ALL_OBJECTS
      .map((_, i) => i)
      .filter(i => !tgt.includes(i))
      .slice(0, poolSize - tgt.length);
    return arrShuffle([...tgt, ...distractors]);
  }

  function startRecall() {
    setPool(buildPool(round));
    setSelected(new Set());
    setPhase("recalling");
  }

  function toggleSelect(idx: number) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  }

  function submitRecall() {
    const correct = [...selected].filter(i => targets.includes(i)).length;
    setScores(s => [...s, correct]);
    setPhase("roundResult");
  }

  function nextRound() {
    const next = round + 1;
    if (next >= totalRounds) {
      setPhase("done");
    } else {
      setRound(next);
      setPhase("viewing");
      setSelected(new Set());
    }
  }

  const totalCorrect = scores.reduce((a, b) => a + b, 0);
  const totalPossible = RECALL_ROUNDS.reduce((a, r) => a + r.targets.length, 0);

  /* ── DONE screen ── */
  if (phase === "done") {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", backgroundColor: C.cream }}>
        <div style={{ backgroundColor: "#7B6FA0", padding: "48px 24px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
          position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <div style={{ position: "absolute", width: 240, height: 240, borderRadius: "50%",
            border: "40px solid rgba(255,255,255,0.08)", top: -70, right: -70 }}/>
          <div style={{ width: 108, height: 108, borderRadius: 34,
            backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 58 }}>
            🌟
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 30,
              fontWeight: 700, margin: "0 0 10px" }}>Well done!</h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 16, fontWeight: 500,
              margin: 0, lineHeight: 1.5 }}>You completed Object Recall.</p>
          </div>
        </div>

        <div style={{ flex: 1, padding: "24px 20px 12px", display: "flex",
          flexDirection: "column", gap: 14 }}>
          <div style={{ backgroundColor: C.card, borderRadius: 24,
            border: `1.5px solid ${C.border}`, padding: "22px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: 18 }}>How you did</div>
            <div style={{ display: "flex" }}>
              {[
                { emoji: "👁️", value: `${totalCorrect} of ${totalPossible}`, label: "Objects recalled" },
                { emoji: "🎯", value: `${totalRounds} rounds`, label: "Completed" },
              ].map((s, i, arr) => (
                <div key={s.label} style={{ flex: 1, textAlign: "center",
                  borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none", padding: "0 8px" }}>
                  <div style={{ fontSize: 32, marginBottom: 6 }}>{s.emoji}</div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: C.fg, marginBottom: 3 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#F0EDF8", borderRadius: 20, border: `1px solid ${C.border}`,
            padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>🌸</span>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.fgSub, margin: 0, lineHeight: 1.6 }}>
              Practising your memory every day is wonderful. You should feel very proud!
            </p>
          </div>
        </div>

        <div style={{ flexShrink: 0, padding: "8px 20px 32px", borderTop: `1px solid ${C.border}`,
          backgroundColor: C.cream, display: "flex", flexDirection: "column", gap: 12 }}>
          <PrimaryButton label="Play Again  👁️" onClick={() => { setRound(0); setPhase("viewing"); setScores([]); setSelected(new Set()); }} fullWidth size="lg"/>
          <SecondaryButton label="Back to Games" onClick={onBack} fullWidth/>
        </div>
      </div>
    );
  }

  /* ── ROUND RESULT ── */
  if (phase === "roundResult") {
    const correct = scores[scores.length - 1];
    const possible = targets.length;
    const great = correct === possible;
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100%",
        backgroundColor: C.cream, alignItems: "center", justifyContent: "center", padding: "0 24px", gap: 24 }}>
        <div style={{ width: 100, height: 100, borderRadius: 30,
          backgroundColor: great ? C.greenLight : "#F0EDF8",
          border: `3px solid ${great ? C.green : "#7B6FA0"}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>
          {great ? "🌟" : "🌿"}
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 26,
            fontWeight: 700, margin: "0 0 10px" }}>
            {great ? "Perfect!" : "Well done!"}
          </h2>
          <p style={{ color: C.mutedFg, fontSize: 16, fontWeight: 500, margin: "0 0 6px" }}>
            You remembered {correct} of {possible} objects.
          </p>
          <p style={{ color: C.mutedFg, fontSize: 15, fontWeight: 500, margin: 0 }}>
            {round + 1 < totalRounds ? `Round ${round + 2} has a few more objects.` : "That was the last round!"}
          </p>
        </div>
        {/* Show which were correct */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {targets.map(idx => {
            const obj = ALL_OBJECTS[idx];
            const wasSelected = scores.length > 0 && [...Array.from(selected)].includes(idx) || false;
            return (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16,
                  backgroundColor: obj.bg, border: `2px solid ${C.green}`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>
                  {obj.emoji}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.mutedFg,
                  textAlign: "center", maxWidth: 56 }}>{obj.label}</span>
              </div>
            );
          })}
        </div>
        <div style={{ width: "100%" }}>
          <PrimaryButton label={round + 1 < totalRounds ? "Next Round" : "See Results"} onClick={nextRound} fullWidth size="lg"/>
        </div>
      </div>
    );
  }

  /* ── VIEWING phase ── */
  if (phase === "viewing") {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", backgroundColor: C.cream }}>
        {/* Header */}
        <div style={{ flexShrink: 0, padding: "18px 20px 14px",
          borderBottom: `1px solid ${C.border}`, backgroundColor: C.cream }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={onBack}
              style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
              className="flex items-center justify-center active:scale-90 transition-all"
              aria-label="Exit game">
              <Ic.ChevLeft size={22} color={C.fg}/>
            </button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.fg,
                fontFamily: "'Lora', serif" }}>Object Recall</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#7B6FA0", marginTop: 2 }}>
                Round {round + 1} of {totalRounds} · Viewing
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ marginTop: 14, backgroundColor: C.muted, borderRadius: 99, height: 10 }}>
            <div style={{ backgroundColor: "#7B6FA0", borderRadius: 99, height: 10,
              width: `${(round / totalRounds) * 100}%`, transition: "width 0.5s" }}/>
          </div>
        </div>

        {/* Instruction strip */}
        <div style={{ flexShrink: 0, padding: "14px 20px 10px",
          backgroundColor: "#F0EDF8", borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 17, fontWeight: 700, color: "#4A3A6A", margin: 0, textAlign: "center" }}>
            Look carefully at these objects.
          </p>
        </div>

        {/* Objects to memorise */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", padding: "24px 20px", gap: 20 }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: C.mutedFg, margin: 0, textAlign: "center" }}>
            Remember {targets.length} object{targets.length > 1 ? "s" : ""}.
            Take as long as you need.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {targets.map(idx => {
              const obj = ALL_OBJECTS[idx];
              return (
                <div key={idx} style={{ display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 10 }}>
                  <div style={{ width: 90, height: 90, borderRadius: 24,
                    backgroundColor: obj.bg, border: `2px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 50 }}>
                    {obj.emoji}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.fgSub,
                    textAlign: "center" }}>{obj.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ready CTA */}
        <div style={{ flexShrink: 0, padding: "12px 20px 32px",
          borderTop: `1px solid ${C.border}`, backgroundColor: C.cream }}>
          <PrimaryButton label="I remember these  👁️" onClick={startRecall} fullWidth size="lg"/>
        </div>
      </div>
    );
  }

  /* ── RECALLING phase ── */
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      {/* Header */}
      <div style={{ flexShrink: 0, padding: "18px 20px 14px",
        borderBottom: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack}
            style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
            className="flex items-center justify-center active:scale-90 transition-all"
            aria-label="Exit game">
            <Ic.ChevLeft size={22} color={C.fg}/>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.fg,
              fontFamily: "'Lora', serif" }}>Object Recall</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#7B6FA0", marginTop: 2 }}>
              Round {round + 1} of {totalRounds} · Choose what you saw
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#7B6FA0" }}>
              {selected.size} / {targets.length}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.mutedFg }}>selected</div>
          </div>
        </div>
        <div style={{ marginTop: 14, backgroundColor: C.muted, borderRadius: 99, height: 10 }}>
          <div style={{ backgroundColor: "#7B6FA0", borderRadius: 99, height: 10,
            width: `${(round / totalRounds) * 100}%` }}/>
        </div>
      </div>

      {/* Instruction */}
      <div style={{ flexShrink: 0, padding: "12px 20px 10px",
        backgroundColor: "#F0EDF8", borderBottom: `1px solid ${C.border}` }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: "#4A3A6A", margin: 0, textAlign: "center" }}>
          Tap the {targets.length} objects you just saw.
        </p>
      </div>

      {/* Grid */}
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none",
        padding: "16px 16px 8px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {pool.map(idx => {
            const obj = ALL_OBJECTS[idx];
            const on  = selected.has(idx);
            return (
              <button key={idx} onClick={() => toggleSelect(idx)}
                style={{ borderRadius: 20, border: `3px solid ${on ? "#7B6FA0" : C.border}`,
                  backgroundColor: on ? "#F0EDF8" : C.card,
                  minHeight: 100, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "14px 8px", transition: "all 0.15s", position: "relative" }}
                className="active:scale-95"
                aria-label={`${obj.label}${on ? ", selected" : ""}`}
                aria-pressed={on}>
                {on && (
                  <div style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22,
                    borderRadius: "50%", backgroundColor: "#7B6FA0",
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Ic.Check size={13} color={C.card}/>
                  </div>
                )}
                <span style={{ fontSize: 36, lineHeight: 1 }}>{obj.emoji}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: on ? "#4A3A6A" : C.mutedFg,
                  textAlign: "center", lineHeight: 1.3 }}>{obj.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit */}
      <div style={{ flexShrink: 0, padding: "10px 20px 28px",
        borderTop: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        <PrimaryButton
          label={selected.size === 0 ? "Select the objects you saw" : `Done — I chose ${selected.size}`}
          onClick={submitRecall}
          disabled={selected.size === 0}
          fullWidth size="lg"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PATTERN SEQUENCE GAME
   ───────────────────────────────────────────── */

interface PatternQuestion {
  sequence: string[];  /* displayed row */
  choices: string[];   /* answer options */
  answer: string;      /* correct answer */
  hint: string;        /* plain-language pattern description */
}

/* Five questions of gently increasing complexity */
const PATTERN_QUESTIONS: PatternQuestion[] = [
  {
    sequence: ["🌸", "🌿", "🌸", "🌿", "🌸", "?"],
    choices:  ["🌿", "🌸", "🪔", "🍵"],
    answer:   "🌿",
    hint:     "Flower, leaf, flower, leaf…",
  },
  {
    sequence: ["🍵", "🍵", "🪔", "🍵", "🍵", "?"],
    choices:  ["🍵", "🌺", "🪔", "🌿"],
    answer:   "🪔",
    hint:     "Tea, tea, lamp, tea, tea…",
  },
  {
    sequence: ["🌺", "🌾", "🌾", "🌺", "🌾", "?"],
    choices:  ["🌺", "🌾", "🍋", "🪔"],
    answer:   "🌾",
    hint:     "Flower, paddy, paddy, flower, paddy…",
  },
  {
    sequence: ["🍋", "🌿", "🍵", "🍋", "🌿", "?"],
    choices:  ["🌿", "🍋", "🍵", "🌺"],
    answer:   "🍵",
    hint:     "Lemon, herb, tea, lemon, herb…",
  },
  {
    sequence: ["🪔", "🌸", "🌸", "🪔", "🌸", "?"],
    choices:  ["🪔", "🌸", "🌿", "🍵"],
    answer:   "🌸",
    hint:     "Lamp, flower, flower, lamp, flower…",
  },
];

type PatternPhase = "question" | "feedback" | "done";

function PatternSequenceGame({ onBack }: { onBack: () => void }) {
  const [qIdx, setQIdx]           = useState(0);
  const [phase, setPhase]         = useState<PatternPhase>("question");
  const [chosen, setChosen]       = useState<string | null>(null);
  const [correctCount, setCorrect] = useState(0);

  const total = PATTERN_QUESTIONS.length;
  const q     = PATTERN_QUESTIONS[qIdx];
  const isCorrect = chosen === q.answer;

  function pick(c: string) {
    if (phase !== "question") return;
    setChosen(c);
    if (c === q.answer) setCorrect(n => n + 1);
    setPhase("feedback");
  }

  function advance() {
    const next = qIdx + 1;
    if (next >= total) {
      setPhase("done");
    } else {
      setQIdx(next);
      setChosen(null);
      setPhase("question");
    }
  }

  /* ── DONE screen ── */
  if (phase === "done") {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", backgroundColor: C.cream }}>
        <div style={{ backgroundColor: "#C17D3C", padding: "48px 24px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
          position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <div style={{ position: "absolute", width: 240, height: 240, borderRadius: "50%",
            border: "40px solid rgba(255,255,255,0.08)", top: -70, right: -70 }}/>
          <div style={{ width: 108, height: 108, borderRadius: 34,
            backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 58 }}>
            🌟
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 30,
              fontWeight: 700, margin: "0 0 10px" }}>Well done!</h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 16, fontWeight: 500,
              margin: 0, lineHeight: 1.5 }}>You completed Pattern Sequence.</p>
          </div>
        </div>

        <div style={{ flex: 1, padding: "24px 20px 12px", display: "flex",
          flexDirection: "column", gap: 14 }}>
          <div style={{ backgroundColor: C.card, borderRadius: 24,
            border: `1.5px solid ${C.border}`, padding: "22px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: 18 }}>How you did</div>
            <div style={{ display: "flex" }}>
              {[
                { emoji: "🔲", value: `${correctCount} of ${total}`, label: "Patterns found" },
                { emoji: "🎯", value: `${total} rounds`, label: "Completed" },
              ].map((s, i, arr) => (
                <div key={s.label} style={{ flex: 1, textAlign: "center",
                  borderRight: i < arr.length - 1 ? `1px solid ${C.border}` : "none", padding: "0 8px" }}>
                  <div style={{ fontSize: 32, marginBottom: 6 }}>{s.emoji}</div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: C.fg, marginBottom: 3 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#F8F0E3", borderRadius: 20, border: `1px solid ${C.border}`,
            padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>🌸</span>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.fgSub, margin: 0, lineHeight: 1.6 }}>
              Noticing patterns is a wonderful skill. Keep practising — you are doing so well!
            </p>
          </div>
        </div>

        <div style={{ flexShrink: 0, padding: "8px 20px 32px", borderTop: `1px solid ${C.border}`,
          backgroundColor: C.cream, display: "flex", flexDirection: "column", gap: 12 }}>
          <PrimaryButton label="Play Again  🔲" onClick={() => { setQIdx(0); setChosen(null); setCorrect(0); setPhase("question"); }} fullWidth size="lg"/>
          <SecondaryButton label="Back to Games" onClick={onBack} fullWidth/>
        </div>
      </div>
    );
  }

  /* ── QUESTION / FEEDBACK screen ── */
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>

      {/* Header */}
      <div style={{ flexShrink: 0, padding: "18px 20px 14px",
        borderBottom: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack}
            style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted, flexShrink: 0 }}
            className="flex items-center justify-center active:scale-90 transition-all"
            aria-label="Exit game">
            <Ic.ChevLeft size={22} color={C.fg}/>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.fg,
              fontFamily: "'Lora', serif" }}>Pattern Sequence</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#C17D3C", marginTop: 2 }}>
              Pattern {qIdx + 1} of {total}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, backgroundColor: C.muted, borderRadius: 99, height: 10 }}>
          <div style={{ backgroundColor: "#C17D3C", borderRadius: 99, height: 10,
            width: `${((qIdx + (phase === "feedback" ? 1 : 0)) / total) * 100}%`,
            transition: "width 0.5s" }}/>
        </div>
      </div>

      {/* Instruction */}
      <div style={{ flexShrink: 0, padding: "14px 20px 12px",
        backgroundColor: "#F8F0E3", borderBottom: `1px solid ${C.border}` }}>
        <p style={{ fontSize: 17, fontWeight: 700, color: "#6B4020", margin: 0, textAlign: "center" }}>
          {phase === "feedback"
            ? isCorrect ? "That's right! Well done." : "Not quite — the answer is shown below."
            : "What picture comes next?"}
        </p>
      </div>

      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none",
        padding: "20px 20px 0", display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Sequence row */}
        <div style={{ backgroundColor: C.card, borderRadius: 22,
          border: `1.5px solid ${C.border}`, padding: "20px 16px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 14, textAlign: "center" }}>
            What comes next?
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center",
            flexWrap: "wrap", alignItems: "center" }}>
            {q.sequence.map((item, i) => (
              <div key={i} style={{ width: 54, height: 54, borderRadius: 16,
                backgroundColor: item === "?" ? C.muted : "#FFF8F0",
                border: `2px solid ${item === "?" ? C.border : "#E8D5B8"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: item === "?" ? 22 : 30, fontWeight: 900, color: C.mutedFg }}>
                {item === "?" && phase === "feedback"
                  ? <span style={{ color: isCorrect ? C.green : C.coral, fontSize: 30 }}>{q.answer}</span>
                  : item}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: C.mutedFg, textAlign: "center",
            margin: "14px 0 0", fontStyle: "italic" }}>
            {q.hint}
          </p>
        </div>

        {/* Answer choices */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.mutedFg, marginBottom: 12,
            textAlign: "center" }}>
            Tap your answer below
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {q.choices.map(c => {
              const isPicked  = chosen === c;
              const isRight   = c === q.answer;
              const showRight = phase === "feedback" && isRight;
              const showWrong = phase === "feedback" && isPicked && !isRight;

              return (
                <button key={c} onClick={() => pick(c)}
                  disabled={phase === "feedback"}
                  style={{
                    borderRadius: 22, minHeight: 90,
                    border: `3px solid ${showRight ? C.green : showWrong ? C.coral : isPicked ? "#C17D3C" : C.border}`,
                    backgroundColor: showRight ? C.greenLight : showWrong ? C.coralLight : isPicked ? "#F8F0E3" : C.card,
                    display: "flex", flexDirection: "column", alignItems: "center",
                    justifyContent: "center", gap: 6, transition: "all 0.2s",
                    cursor: phase === "feedback" ? "default" : "pointer",
                  }}
                  className="active:scale-95"
                  aria-label={c}>
                  {showRight && (
                    <div style={{ position: "absolute" }}/>
                  )}
                  <span style={{ fontSize: 42, lineHeight: 1 }}>{c}</span>
                  {showRight && (
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Ic.Check size={14} color={C.green}/>
                      <span style={{ fontSize: 12, fontWeight: 800, color: C.green }}>Correct</span>
                    </div>
                  )}
                  {showWrong && (
                    <span style={{ fontSize: 12, fontWeight: 800, color: C.coral }}>Not this one</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Next button appears after feedback */}
      <div style={{ flexShrink: 0, padding: "14px 20px 28px",
        borderTop: `1px solid ${C.border}`, backgroundColor: C.cream }}>
        {phase === "feedback" ? (
          <PrimaryButton
            label={qIdx + 1 < total ? "Next Pattern" : "See Results"}
            onClick={advance} fullWidth size="lg"
          />
        ) : (
          <div style={{ height: 60, display: "flex", alignItems: "center",
            justifyContent: "center" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.mutedFg, fontStyle: "italic" }}>
              Tap a picture above to answer.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   ONBOARDING — SPLASH
   ───────────────────────────────────────────── */
function SplashScreen({ onDone }: { onDone: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.green,
      alignItems: "center", justifyContent: "center", gap: 28, padding: "40px 32px", position: "relative" }}>
      <div style={{ width: 100, height: 100, borderRadius: 30, backgroundColor: "rgba(255,255,255,0.18)",
        border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 56 }}>
        🧠
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 40, fontWeight: 700,
          lineHeight: 1.15, margin: "0 0 12px" }}>NeuroNerd</h1>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
          A gentle companion{"\n"}for everyday memories
        </p>
      </div>
      <div style={{ position: "absolute", bottom: 56, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "0 32px" }}>
        <button onClick={onDone}
          style={{ backgroundColor: "#fff", color: C.green, borderRadius: 16, minHeight: 60,
            width: "100%", fontSize: 18, fontWeight: 800 }}
          className="active:scale-95 transition-all shadow-lg">
          Tap to begin
        </button>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 600,
          letterSpacing: "0.04em" }}>
          Designed for Northeast India · NeuroNerd v1.0
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ONBOARDING — WELCOME
   ───────────────────────────────────────────── */
function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ backgroundColor: C.greenLight, padding: "52px 28px 40px",
        display: "flex", flexDirection: "column", gap: 18, alignItems: "center", textAlign: "center" }}>
        <div style={{ width: 104, height: 104, borderRadius: 32, backgroundColor: C.green,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 58 }}>
          🌸
        </div>
        <div>
          <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 30, fontWeight: 700,
            lineHeight: 1.25, margin: "0 0 10px" }}>
            Welcome back, Meena
          </h1>
          <p style={{ color: C.mutedFg, fontSize: 16, fontWeight: 500, margin: 0, lineHeight: 1.7 }}>
            It is good to see you today.
          </p>
        </div>
      </div>
      <div style={{ flex: 1, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.08em",
          textTransform: "uppercase", marginBottom: 4 }}>Today we can</div>
        {[
          { emoji: "🧩", label: "Play a short game",     sub: "Memory Match is ready" },
          { emoji: "🔔", label: "Check your reminders",  sub: "3 items for today" },
          { emoji: "📖", label: "Look at your memories", sub: "Family Reunion added" },
        ].map(item => (
          <div key={item.label}
            style={{ display: "flex", alignItems: "center", gap: 16, backgroundColor: C.card,
              borderRadius: 20, border: `1px solid ${C.border}`, padding: "16px 18px" }}>
            <span style={{ fontSize: 34 }}>{item.emoji}</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.fg }}>{item.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, marginTop: 2 }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "12px 24px 32px", flexShrink: 0 }}>
        <PrimaryButton label="Let's begin  🌿" onClick={onStart} fullWidth size="lg"/>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ONBOARDING — LOGIN
   ───────────────────────────────────────────── */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pin, setPin] = useState("");

  function press(d: number) {
    if (pin.length >= 4) return;
    const next = pin + String(d);
    setPin(next);
    if (next.length === 4) setTimeout(() => onLogin(), 500);
  }

  function del() { setPin(p => p.slice(0, -1)); }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream,
      alignItems: "center", paddingTop: 52 }}>
      <div style={{ textAlign: "center", padding: "0 28px 40px" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: C.brownLight,
          border: `3px solid ${C.green}`, margin: "0 auto 18px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28, fontWeight: 900, color: C.brown }}>
          MD
        </div>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 26, fontWeight: 700,
          margin: "0 0 8px" }}>Good morning, Meena</h1>
        <p style={{ color: C.mutedFg, fontSize: 15, fontWeight: 500, margin: 0 }}>
          Please enter your 4-digit code
        </p>
      </div>
      <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: 22, height: 22, borderRadius: "50%",
            backgroundColor: i < pin.length ? C.green : C.muted,
            border: `2px solid ${i < pin.length ? C.green : C.border}`,
            transition: "all 0.2s" }}/>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, padding: "0 32px" }}>
        {[1,2,3,4,5,6,7,8,9].map(d => (
          <button key={d} onClick={() => press(d)}
            style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: C.card,
              border: `1.5px solid ${C.border}`, fontSize: 28, fontWeight: 700, color: C.fg }}
            className="flex items-center justify-center active:scale-90 transition-all shadow-sm">
            {d}
          </button>
        ))}
        <div/>
        <button onClick={() => press(0)}
          style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: C.card,
            border: `1.5px solid ${C.border}`, fontSize: 28, fontWeight: 700, color: C.fg }}
          className="flex items-center justify-center active:scale-90 transition-all shadow-sm">
          0
        </button>
        <button onClick={del}
          style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: C.muted,
            border: `1.5px solid ${C.border}`, fontSize: 22, fontWeight: 700, color: C.fgSub }}
          className="flex items-center justify-center active:scale-90 transition-all">
          ⌫
        </button>
      </div>
      <button onClick={onLogin}
        style={{ marginTop: 32, color: C.mutedFg, fontSize: 14, fontWeight: 600,
          textDecoration: "underline", padding: "8px 16px" }}>
        Skip (prototype)
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VOICE ASSISTANT SCREEN
   ───────────────────────────────────────────── */
type VoicePhase = "idle" | "listening" | "processing" | "response" | "error";

function VoiceAssistantScreen({ onBack }: { onBack: () => void }) {
  const [phase, setPhase] = useState<VoicePhase>("idle");

  const configs: Record<VoicePhase, { label: string; sub: string; color: string; bg: string; emoji: string }> = {
    idle:       { label: "Voice Assistant",             sub: "Tap the button below to speak",        color: C.green,      bg: C.greenLight,  emoji: "🎙️" },
    listening:  { label: "Listening…",                  sub: "Speak now, take your time",            color: "#3B82F6",    bg: "#EFF6FF",     emoji: "👂" },
    processing: { label: "Thinking…",                   sub: "One moment please",                    color: C.brown,      bg: C.brownLight,  emoji: "⏳" },
    response:   { label: "Here is your answer",         sub: "Morning Medicine is at 8:00 AM",       color: C.greenDark,  bg: C.greenLight,  emoji: "💬" },
    error:      { label: "I could not hear you",        sub: "Please try again, or ask your caregiver", color: C.coral, bg: C.coralLight,  emoji: "🔇" },
  };
  const cfg = configs[phase];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 22, fontWeight: 700, margin: 0 }}>
          Voice Assistant
        </h1>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "32px 28px", gap: 28 }}>
        <div style={{ width: 160, height: 160, borderRadius: "50%", backgroundColor: cfg.bg,
          border: `5px solid ${cfg.color}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 76 }}>
          {cfg.emoji}
        </div>
        <div style={{ textAlign: "center", maxWidth: 280 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.fg, marginBottom: 8 }}>{cfg.label}</div>
          <div style={{ fontSize: 16, fontWeight: 500, color: C.mutedFg, lineHeight: 1.6 }}>{cfg.sub}</div>
        </div>
        {phase === "response" && (
          <div style={{ backgroundColor: C.card, borderRadius: 24, border: `2px solid ${C.green}`,
            padding: "20px 24px", width: "100%" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.green, letterSpacing: "0.06em",
              textTransform: "uppercase", marginBottom: 8 }}>Your answer</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: C.fg, lineHeight: 1.5 }}>
              Your next reminder is Morning Medicine at 8:00 AM. Would you like me to remind you again?
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "12px 24px 28px", flexShrink: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {(["idle","listening","processing","response","error"] as VoicePhase[]).map(p => (
            <button key={p} onClick={() => setPhase(p)}
              style={{ borderRadius: 20, fontSize: 11, fontWeight: 700, padding: "6px 12px",
                backgroundColor: phase === p ? C.green : C.muted,
                color: phase === p ? C.card : C.fgSub }}
              className="active:scale-95">
              {p}
            </button>
          ))}
        </div>
        {phase === "idle" && (
          <button onClick={() => setPhase("listening")}
            style={{ backgroundColor: C.green, color: C.card, borderRadius: "50%", width: 80, height: 80,
              alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 36, border: `4px solid ${C.greenLight}` }}
            className="active:scale-90 transition-all shadow-lg"
            aria-label="Start listening">
            🎙️
          </button>
        )}
        {phase === "listening" && <PrimaryButton label="Stop Listening" onClick={() => setPhase("processing")} fullWidth/>}
        {phase === "response"  && <PrimaryButton label="Done — Thank you" onClick={() => setPhase("idle")} fullWidth/>}
        {phase === "error"     && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <PrimaryButton label="Try Again" onClick={() => setPhase("listening")} fullWidth/>
            <SecondaryButton label="Go Back" onClick={onBack} fullWidth/>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LANGUAGE SELECTION SCREEN
   ───────────────────────────────────────────── */
const LANGUAGES = [
  { code: "en",  name: "English",  native: "English",           flag: "🇬🇧" },
  { code: "as",  name: "Assamese", native: "অসমীয়া",            flag: "🌿" },
  { code: "bn",  name: "Bengali",  native: "বাংলা",              flag: "🌸" },
  { code: "mni", name: "Meitei",   native: "ꯃꯤꯇꯩ ꯂꯣꯟ",          flag: "🏵️" },
  { code: "bo",  name: "Bodo",     native: "बड़ो",               flag: "🎋" },
];

function LanguageScreen({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState("en");
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
    setTimeout(() => { setSaved(false); onBack(); }, 1400);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <div>
          <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 22, fontWeight: 700, margin: 0 }}>
            Language
          </h1>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, margin: 0 }}>Choose your preferred language</p>
        </div>
      </div>
      <div style={{ flex: 1, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
        {LANGUAGES.map(lang => {
          const on = selected === lang.code;
          return (
            <button key={lang.code} onClick={() => setSelected(lang.code)}
              style={{ backgroundColor: on ? C.greenLight : C.card,
                border: `2px solid ${on ? C.green : C.border}`,
                borderRadius: 20, padding: "16px 20px",
                display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%" }}
              className="active:scale-95 transition-all"
              aria-pressed={on}>
              <span style={{ fontSize: 30 }}>{lang.flag}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: on ? C.greenDark : C.fg }}>{lang.name}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.mutedFg, marginTop: 2 }}>{lang.native}</div>
              </div>
              {on && (
                <div style={{ width: 30, height: 30, borderRadius: "50%", backgroundColor: C.green,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Ic.Check size={16} color={C.card}/>
                </div>
              )}
            </button>
          );
        })}
      </div>
      <div style={{ padding: "12px 20px 32px", flexShrink: 0 }}>
        {saved ? (
          <div style={{ backgroundColor: C.greenLight, borderRadius: 16, padding: "16px 20px",
            display: "flex", alignItems: "center", gap: 12, justifyContent: "center",
            border: `2px solid ${C.green}` }}>
            <Ic.Check size={20} color={C.green}/>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.greenDark }}>Language saved!</span>
          </div>
        ) : (
          <PrimaryButton label="Save Language" onClick={save} fullWidth size="lg"/>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MEMORY DETAIL SCREEN
   ───────────────────────────────────────────── */
function MemoryDetailScreen({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back to Memories">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.mutedFg }}>My Memories</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "24px 20px" }}>
        <div style={{ borderRadius: 24, backgroundColor: C.brownLight, height: 200,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24, border: `1px solid ${C.border}` }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 64 }}>👨‍👩‍👧‍👦</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, marginTop: 8 }}>Family Photo</div>
          </div>
        </div>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 28, fontWeight: 700,
          margin: "0 0 8px" }}>Family Reunion</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span style={{ backgroundColor: C.coralLight, color: C.coral, borderRadius: 20,
            fontSize: 12, fontWeight: 700, padding: "4px 12px" }}>Bihu 2023</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>Jorhat, Assam</span>
        </div>
        <div style={{ fontSize: 17, fontWeight: 500, color: C.fg, lineHeight: 1.75, marginBottom: 24 }}>
          With Priya and the grandchildren at Jorhat. It was such a joyful day — the children danced Bihu
          and we all had khichdi by the river. A beautiful memory to hold close.
        </div>
        <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`,
          padding: "18px 20px", marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.06em",
            textTransform: "uppercase", marginBottom: 12 }}>People in this memory</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Priya Devi", "Raju", "Little Ananya"].map(name => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 8,
                backgroundColor: C.muted, borderRadius: 24, padding: "6px 12px 6px 6px" }}>
                <Avatar name={name} size={32}/>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.fgSub }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 20px 32px", flexShrink: 0, display: "flex", gap: 12 }}>
        <SecondaryButton label="Edit" onClick={() => {}}/>
        <div style={{ flex: 1 }}>
          <PrimaryButton label="Share with Caregiver" onClick={() => {}} fullWidth/>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   REMINDER DETAIL SCREEN
   ───────────────────────────────────────────── */
function ReminderDetailScreen({ onBack }: { onBack: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back to Today's Plan">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.mutedFg }}>Today's Plan</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "24px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24,
            backgroundColor: done ? C.greenLight : C.coralLight,
            border: `2px solid ${done ? C.green : C.coral}`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {done ? <Ic.Check size={36} color={C.green}/> : <Ic.Pill size={36} color={C.coral}/>}
          </div>
          <div>
            <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 26, fontWeight: 700,
              margin: "0 0 8px" }}>Morning Medicine</h1>
            <StatusBadge label={done ? "Done ✓" : "Scheduled"} type={done ? "success" : "info"}/>
          </div>
        </div>
        <div style={{ backgroundColor: C.card, borderRadius: 22, border: `1px solid ${C.border}`,
          padding: "18px 20px", display: "flex", flexDirection: "column", gap: 16, marginBottom: 16 }}>
          {[
            { label: "Time",          value: "8:00 AM every day" },
            { label: "Prescribed by", value: "Dr. Sharma, Guwahati" },
            { label: "Dosage",        value: "1 tablet with water" },
            { label: "Note",          value: "Take with a light meal. Do not skip." },
          ].map(row => (
            <div key={row.label}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.mutedFg, width: 130 }}>{row.label}</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: C.fg, flex: 1,
                textAlign: "right", lineHeight: 1.4 }}>{row.value}</span>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: C.muted, borderRadius: 16, padding: "14px 18px",
          display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar name="Priya Devi" size={36}/>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.fgSub }}>Added by Priya Devi</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.mutedFg }}>Your caregiver · Guwahati</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 20px 32px", flexShrink: 0 }}>
        {done ? (
          <div style={{ backgroundColor: C.greenLight, borderRadius: 20, padding: "20px",
            display: "flex", alignItems: "center", gap: 12, justifyContent: "center",
            border: `2px solid ${C.green}` }}>
            <span style={{ fontSize: 28 }}>✅</span>
            <span style={{ fontSize: 17, fontWeight: 800, color: C.greenDark }}>Well done! Medicine taken.</span>
          </div>
        ) : (
          <PrimaryButton label="Mark as Done  ✓" onClick={() => setDone(true)} fullWidth size="lg"/>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACCESSIBILITY SETTINGS SCREEN
   ───────────────────────────────────────────── */
function AccessibilitySettingsScreen({ onBack }: { onBack: () => void }) {
  const [textSize, setTextSize]     = useState<"normal" | "large" | "xlarge">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [soundOn, setSoundOn]       = useState(true);
  const [voiceOn, setVoiceOn]       = useState(false);

  const previewSizes: Record<string, number> = { normal: 16, large: 20, xlarge: 24 };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12, flexShrink: 0 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <div>
          <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 22, fontWeight: 700, margin: 0 }}>
            Accessibility
          </h1>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, margin: 0 }}>
            Make the app comfortable for you
          </p>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Text size */}
        <div style={{ backgroundColor: C.card, borderRadius: 22, border: `1px solid ${C.border}`,
          padding: "18px 20px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.07em",
            textTransform: "uppercase", marginBottom: 14 }}>Text Size</div>
          <div style={{ display: "flex", gap: 10 }}>
            {(["normal","large","xlarge"] as const).map(s => (
              <button key={s} onClick={() => setTextSize(s)}
                style={{ flex: 1, borderRadius: 16, padding: "12px 8px",
                  backgroundColor: textSize === s ? C.greenLight : C.muted,
                  border: `2px solid ${textSize === s ? C.green : "transparent"}`,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
                className="active:scale-95 transition-all"
                aria-pressed={textSize === s}>
                <span style={{ fontSize: s === "normal" ? 18 : s === "large" ? 22 : 28, color: C.fg }}>Aa</span>
                <span style={{ fontSize: 11, fontWeight: 800,
                  color: textSize === s ? C.green : C.mutedFg, textTransform: "capitalize" }}>{s}</span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 16, backgroundColor: C.muted, borderRadius: 16, padding: "14px 16px" }}>
            <p style={{ fontSize: previewSizes[textSize], fontWeight: 500, color: C.fg, margin: 0, lineHeight: 1.6 }}>
              Good morning, Meena. Time for your morning walk.
            </p>
          </div>
        </div>
        {/* Toggles */}
        {[
          { label: "High Contrast Mode", sub: "Stronger colours for easier reading", value: highContrast, set: setHighContrast },
          { label: "Sound Effects",      sub: "Gentle sounds when you complete tasks", value: soundOn, set: setSoundOn },
          { label: "Voice Assistant",    sub: "Speak to navigate the app", value: voiceOn, set: setVoiceOn },
        ].map(row => (
          <div key={row.label}
            style={{ backgroundColor: C.card, borderRadius: 22, border: `1px solid ${C.border}`,
              padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.fg }}>{row.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, marginTop: 3 }}>{row.sub}</div>
            </div>
            <button onClick={() => row.set(!row.value)}
              style={{ width: 56, height: 30, borderRadius: 99, position: "relative", flexShrink: 0,
                backgroundColor: row.value ? C.green : C.muted,
                border: `2px solid ${row.value ? C.green : C.border}`,
                transition: "all 0.2s" }}
              aria-pressed={row.value}
              aria-label={row.label}>
              <div style={{ position: "absolute", top: 2,
                left: row.value ? "calc(100% - 26px)" : 2,
                width: 22, height: 22, borderRadius: "50%",
                backgroundColor: C.card, transition: "left 0.2s" }}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HELP & CAREGIVER SCREEN
   ───────────────────────────────────────────── */
function HelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12, flexShrink: 0 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 22, fontWeight: 700, margin: 0 }}>
          Help & Support
        </h1>
      </div>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ backgroundColor: C.card, borderRadius: 22, border: `2px solid ${C.green}`,
          padding: "20px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: C.green, letterSpacing: "0.06em",
            textTransform: "uppercase" }}>Your Caregiver</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Avatar name="Priya Devi" size={60}/>
            <div>
              <div style={{ fontSize: 19, fontWeight: 800, color: C.fg }}>Priya Devi</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.mutedFg }}>Daughter · Guwahati</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginTop: 4 }}>Last check-in: Today</div>
            </div>
          </div>
          <PrimaryButton label="📞  Call Priya" onClick={() => {}} fullWidth/>
        </div>
        <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.06em",
          textTransform: "uppercase", marginTop: 8 }}>Common Questions</div>
        {[
          { q: "How do I play a game?", a: "Tap 'Games' at the bottom, then tap any game to start. Follow the steps shown." },
          { q: "How do I mark a reminder?", a: "Tap the reminder, then tap 'Mark as Done'. It will show a green tick." },
          { q: "How do I add a memory?", a: "Go to 'Memories' and tap the green 'Add Memory' button." },
          { q: "I forgot my code?", a: "Ask your caregiver to reset it. They can log in from their own phone." },
        ].map(item => (
          <div key={item.q} style={{ backgroundColor: C.card, borderRadius: 18, border: `1px solid ${C.border}`,
            padding: "16px 20px" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.fg, marginBottom: 6 }}>{item.q}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: C.mutedFg, lineHeight: 1.5 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ABOUT SCREEN
   ───────────────────────────────────────────── */
function AboutScreen({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream }}>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 20px 0", gap: 12, flexShrink: 0 }}>
        <button onClick={onBack}
          style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.muted }}
          className="flex items-center justify-center active:scale-90 transition-all"
          aria-label="Go back">
          <Ic.ChevLeft size={22} color={C.fg}/>
        </button>
        <h1 style={{ fontFamily: "'Lora', serif", color: C.fg, fontSize: 22, fontWeight: 700, margin: 0 }}>
          About NeuroNerd
        </h1>
      </div>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, backgroundColor: C.green,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, flexShrink: 0 }}>
            🧠
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: C.fg, fontFamily: "'Lora', serif" }}>NeuroNerd</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.mutedFg }}>Version 1.0 · Northeast India</div>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 500, color: C.fg, lineHeight: 1.75 }}>
          NeuroNerd is a gentle companion designed for elderly users in Northeast India.
          It helps with everyday memory, familiar games, and daily reminders — all in a calm, respectful way.
        </div>
        {[
          { label: "Designed for",    value: "Elderly users, including those with memory difficulties" },
          { label: "Languages",       value: "English, Assamese, Bengali, Meitei, Bodo" },
          { label: "Works offline",   value: "Your activities are always saved on this device" },
          { label: "Privacy",         value: "Your data is only shared with your caregiver" },
          { label: "Not a medical app", value: "NeuroNerd is not a diagnostic or clinical application" },
        ].map(row => (
          <div key={row.label} style={{ backgroundColor: C.card, borderRadius: 18, border: `1px solid ${C.border}`,
            padding: "16px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: C.mutedFg, letterSpacing: "0.06em",
              textTransform: "uppercase", marginBottom: 4 }}>{row.label}</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.fg, lineHeight: 1.4 }}>{row.value}</div>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}>
            Made with care for Northeast India 🌿
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GAME UNAVAILABLE / ERROR STATE
   ───────────────────────────────────────────── */
function GameUnavailableScreen({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: C.cream,
      alignItems: "center", justifyContent: "center", padding: "40px 28px", gap: 24, textAlign: "center" }}>
      <div style={{ width: 100, height: 100, borderRadius: 28, backgroundColor: C.muted,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>
        🎮
      </div>
      <div>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, color: C.fg,
          margin: "0 0 10px" }}>Not ready yet</h2>
        <p style={{ fontSize: 16, fontWeight: 500, color: C.mutedFg, lineHeight: 1.7, margin: 0 }}>
          This game is being prepared for you. Please choose another game. Memory Match, Object Recall, and Pattern Sequence are ready to play.
        </p>
      </div>
      <SecondaryButton label="Go Back to Games" onClick={onBack} fullWidth/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SYNC STATUS BAR
   ───────────────────────────────────────────── */
type SyncState = "online" | "offline" | "syncing" | "synced" | "failed";

function SyncStatusBar({ state }: { state: SyncState }) {
  const cfgs: Record<SyncState, { bg: string; border: string; color: string; icon: string; text: string }> = {
    online:  { bg: C.greenLight,  border: C.green,    color: C.greenDark, icon: "✓",  text: "Connected" },
    offline: { bg: "#FEF3C7",     border: "#F59E0B",   color: "#92400E",   icon: "📶", text: "You're offline. Your activities are saved safely on this device." },
    syncing: { bg: "#E0F2FE",     border: "#38BDF8",   color: "#0369A1",   icon: "⟳",  text: "Saving your activities…" },
    synced:  { bg: C.greenLight,  border: C.green,    color: C.greenDark, icon: "☁️", text: "All saved. Your activities are up to date." },
    failed:  { bg: C.coralLight,  border: C.coral,    color: C.coral,     icon: "⚠️", text: "Could not save. We will try again soon." },
  };
  const cfg = cfgs[state];
  return (
    <div style={{ backgroundColor: cfg.bg, borderBottom: `2px solid ${cfg.border}`, color: cfg.color,
      padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 16, flexShrink: 0 }}>{cfg.icon}</span>
      <span style={{ fontSize: 13, fontWeight: 700, flex: 1 }}>{cfg.text}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PHONE SHELL
   ───────────────────────────────────────────── */
type SubScreen = "" | "gameIntro" | "memory" | "recall" | "pattern" | "voice" | "language" | "memoryDetail" | "reminderDetail" | "accessibility" | "help" | "about" | "gameError";

type AppPhase = "splash" | "welcome" | "login" | "main";

function PhoneFrame() {
  const [tab, setTab]           = useState<Tab>("home");
  const [sub, setSub]           = useState<SubScreen>("");
  const [activeGame, setActiveGame] = useState<GameKey>("memory");
  const [appPhase, setAppPhase] = useState<AppPhase>("splash");

  function goTab(t: Tab) { setTab(t); setSub(""); }

  function openGameIntro(g: GameKey) {
    setActiveGame(g);
    setSub("gameIntro");
  }

  function startGame() {
    if (activeGame === "memory")  { setSub("memory");  return; }
    if (activeGame === "recall")  { setSub("recall");  return; }
    if (activeGame === "pattern") { setSub("pattern"); return; }
    setSub("gameError");
  }

  function openSub(key: string) { setSub(key as SubScreen); }

  const showNav = sub === "" && appPhase === "main";

  function renderContent() {
    if (appPhase === "splash")  return <SplashScreen  onDone={() => setAppPhase("welcome")}/>;
    if (appPhase === "welcome") return <WelcomeScreen onStart={() => setAppPhase("login")}/>;
    if (appPhase === "login")   return <LoginScreen   onLogin={() => setAppPhase("main")}/>;

    if (sub === "gameIntro")    return <GameIntroScreen gameKey={activeGame} onStart={startGame} onBack={() => setSub("")}/>;
    if (sub === "memory")       return <MemoryGame onBack={() => { setSub(""); setTab("games"); }}/>;
    if (sub === "recall")       return <ObjectRecallGame onBack={() => { setSub(""); setTab("games"); }}/>;
    if (sub === "pattern")      return <PatternSequenceGame onBack={() => { setSub(""); setTab("games"); }}/>;
    if (sub === "voice")        return <VoiceAssistantScreen onBack={() => setSub("")}/>;
    if (sub === "language")     return <LanguageScreen onBack={() => setSub("")}/>;
    if (sub === "memoryDetail") return <MemoryDetailScreen onBack={() => setSub("")}/>;
    if (sub === "reminderDetail") return <ReminderDetailScreen onBack={() => setSub("")}/>;
    if (sub === "accessibility") return <AccessibilitySettingsScreen onBack={() => setSub("")}/>;
    if (sub === "help")         return <HelpScreen onBack={() => setSub("")}/>;
    if (sub === "about")        return <AboutScreen onBack={() => setSub("")}/>;
    if (sub === "gameError")    return <GameUnavailableScreen onBack={() => { setSub(""); setTab("games"); }}/>;

    return (
      <>
        {tab === "home"      && <HomeScreen onNavigate={goTab} onOpenGame={openGameIntro}/>}
        {tab === "games"     && <GamesScreen onOpenIntro={openGameIntro}/>}
        {tab === "memories"  && <MemoriesScreen onOpenDetail={() => setSub("memoryDetail")}/>}
        {tab === "reminders" && <RemindersScreen onOpenDetail={() => setSub("reminderDetail")}/>}
        {tab === "profile"   && <ProfileScreen onOpenSub={openSub}/>}
      </>
    );
  }

  return (
    <div style={{ width: "min(390px, 100%)", backgroundColor: C.cream, borderRadius: 48,
        border: "9px solid #1E1A17", overflow: "hidden", display: "flex", flexDirection: "column",
        boxShadow: "0 40px 100px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.15)", flexShrink: 0,
        minHeight: 760 }}>
      {/* Status bar */}
      <div style={{ backgroundColor: appPhase === "splash" ? C.green : C.cream,
        borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}
        className="flex items-center justify-between px-6 py-2">
        <span className="text-sm font-bold" style={{ color: appPhase === "splash" ? "#fff" : C.fg }}>9:41</span>
        <div style={{ width: 96, height: 26, backgroundColor: "#1E1A17", borderRadius: 99 }}
          className="flex items-center justify-center">
          <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#333" }}/>
        </div>
        <span className="text-xs font-bold" style={{ color: appPhase === "splash" ? "#fff" : C.fg }}>●●● ▮</span>
      </div>

      {/* Screen */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {renderContent()}
      </div>

      {/* Bottom nav — visible only on main tab screens */}
      {showNav && <div style={{ flexShrink: 0 }}><BottomNav active={tab} onChange={goTab}/></div>}

      {/* Home indicator */}
      <div className="flex justify-center py-2" style={{ backgroundColor: C.cream, flexShrink: 0 }}>
        <div style={{ width: 110, height: 4, borderRadius: 99, backgroundColor: "#1E1A17", opacity: 0.25 }}/>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DESIGN SYSTEM REFERENCE PAGE
   ───────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div style={{ width: 4, height: 28, backgroundColor: C.green, borderRadius: 99 }}/>
        <h2 className="text-xl font-extrabold" style={{ color: C.fg }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Swatch({ name, hex, text }: { name: string; hex: string; text?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div style={{ backgroundColor: hex, borderRadius: 14, height: 64, border: `1px solid ${C.border}` }}/>
      <div className="text-sm font-bold leading-tight" style={{ color: C.fg }}>{name}</div>
      <div className="text-xs font-mono" style={{ color: C.mutedFg }}>{hex}</div>
      {text && <div className="text-xs font-medium" style={{ color: C.mutedFg }}>{text}</div>}
    </div>
  );
}

function TypeRow({ label, style }: { label: string; style: React.CSSProperties }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 16, marginBottom: 16 }}>
      <div style={style}>{label}</div>
      <div className="text-xs font-mono mt-1" style={{ color: C.mutedFg }}>
        {style.fontFamily?.includes("Lora") ? "Lora" : "Nunito"} · {style.fontSize}px · weight {style.fontWeight}
      </div>
    </div>
  );
}

function DSNavPreview() {
  const [active, setActive] = useState<Tab>("home");
  return (
    <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden" }}>
      <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
        <div className="text-sm font-bold" style={{ color: C.mutedFg }}>Bottom Navigation · 5 destinations</div>
      </div>
      <BottomNav active={active} onChange={setActive}/>
    </div>
  );
}

function DesignSystem() {
  const [reminderDone, setReminderDone] = useState(false);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto" }} className="px-6 py-10 flex flex-col gap-14">

      {/* Header */}
      <div style={{ borderBottom: `2px solid ${C.border}`, paddingBottom: 32 }}>
        <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: C.mutedFg }}>Design System · v1.0</div>
        <h1 className="text-5xl font-extrabold mb-3" style={{ fontFamily: "'Lora', serif", color: C.fg }}>NeuroNerd</h1>
        <p className="text-lg font-medium" style={{ color: C.mutedFg, maxWidth: 560, lineHeight: 1.7 }}>
          Elderly-friendly cognitive gaming and memory assistance app for dementia patients in Northeast India.
          Warm, calm, culturally respectful, and entirely non-clinical.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {["Nunito + Lora", "Min 16px body", "≥ 48px touch targets", "AA contrast throughout", "No color-only signals"].map(t => (
            <span key={t} style={{ backgroundColor: C.greenLight, color: C.greenDark, borderRadius: 24, fontSize: 12, fontWeight: 700 }}
              className="px-3 py-1">{t}</span>
          ))}
        </div>
      </div>

      {/* 1. Colour Palette */}
      <Section title="1 · Colour Palette">
        <div className="mb-3 text-sm font-bold uppercase tracking-wider" style={{ color: C.mutedFg }}>Primary</div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Swatch name="Green — Primary" hex={C.green} text="Main actions, active nav, streak"/>
          <Swatch name="Green Light" hex={C.greenLight} text="Tinted surfaces, success bg"/>
          <Swatch name="Green Dark" hex={C.greenDark} text="Text on light green"/>
        </div>
        <div className="mb-3 text-sm font-bold uppercase tracking-wider" style={{ color: C.mutedFg }}>Accents</div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Swatch name="Coral — Accent" hex={C.coral} text="Reminders, highlights"/>
          <Swatch name="Coral Light" hex={C.coralLight} text="Reminder card bg"/>
          <Swatch name="Earth Brown" hex={C.brown} text="Avatars, secondary accent"/>
        </div>
        <div className="mb-3 text-sm font-bold uppercase tracking-wider" style={{ color: C.mutedFg }}>Neutrals</div>
        <div className="grid grid-cols-4 gap-4">
          <Swatch name="Cream — Background" hex={C.cream}/>
          <Swatch name="Card White" hex={C.card}/>
          <Swatch name="Muted Surface" hex={C.muted}/>
          <Swatch name="Charcoal Text" hex={C.fg}/>
        </div>
      </Section>

      {/* 2. Typography */}
      <Section title="2 · Typography">
        <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 28 }}>
          <TypeRow label="Display — Lora" style={{ fontFamily: "'Lora', serif", fontSize: 36, fontWeight: 700, color: C.fg }}/>
          <TypeRow label="Heading 1 — Nunito" style={{ fontSize: 28, fontWeight: 800, color: C.fg }}/>
          <TypeRow label="Heading 2 — Nunito" style={{ fontSize: 22, fontWeight: 700, color: C.fgSub }}/>
          <TypeRow label="Body Large — Nunito" style={{ fontSize: 18, fontWeight: 500, color: C.fg }}/>
          <TypeRow label="Body — Nunito" style={{ fontSize: 16, fontWeight: 400, color: C.fg }}/>
          <TypeRow label="Caption — Nunito" style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg }}/>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.green, letterSpacing: "0.04em" }}>BUTTON LABEL — Nunito</div>
          <div className="text-xs font-mono mt-1" style={{ color: C.mutedFg }}>Nunito · 16px · weight 800 · tracking +0.04em</div>
        </div>
      </Section>

      {/* 3. Buttons */}
      <Section title="3 · Buttons">
        <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 28 }}
          className="flex flex-col gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>Primary — main actions</div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton label="Start Playing" size="lg"/>
              <PrimaryButton label="Mark as Done" size="md"/>
              <PrimaryButton label="Disabled" disabled/>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: C.border }}/>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>Secondary — low emphasis</div>
            <div className="flex flex-wrap gap-3">
              <SecondaryButton label="Start Over"/>
              <SecondaryButton label="No, go back"/>
            </div>
          </div>
          <div style={{ height: 1, backgroundColor: C.border }}/>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>Destructive — caution actions</div>
            <DestructiveButton label="Remove Reminder"/>
          </div>
        </div>
      </Section>

      {/* 4. Icon Buttons */}
      <Section title="4 · Icon Buttons">
        <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 28 }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.mutedFg }}>Variants: ghost · tinted · solid</div>
          <div className="flex flex-wrap gap-3">
            <IconButton icon={<Ic.Bell size={26} color={C.green}/>} label="Remind" variant="ghost"/>
            <IconButton icon={<Ic.Game size={26} color={C.green}/>} label="Games" variant="tinted"/>
            <IconButton icon={<Ic.User size={26} color={C.card}/>} label="Profile" variant="solid"/>
            <IconButton icon={<Ic.Bell size={26} color={C.green}/>} label="Alerts" variant="tinted" badge={3}/>
            <IconButton icon={<Ic.Share size={26} color={C.green}/>} label="Share" variant="ghost"/>
          </div>
        </div>
      </Section>

      {/* 5. Cards */}
      <Section title="5 · Cards">
        <div className="flex flex-col gap-4">
          <Card title="Large Card — default" accent={C.green}>
            <p className="text-base" style={{ color: C.mutedFg }}>Content goes here. Cards have rounded-24px corners, white background, 1px border, and a colour accent on the top edge.</p>
          </Card>
          <Card title="Large Card — coral accent" accent={C.coral}>
            <p className="text-base" style={{ color: C.mutedFg }}>Use coral accent for reminders, brown for cultural content, green for primary/games.</p>
          </Card>
        </div>
      </Section>

      {/* 6. Status Badges */}
      <Section title="6 · Status Badges">
        <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 28 }}>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col items-start gap-2">
              <StatusBadge label="Done" type="success"/>
              <span className="text-xs" style={{ color: C.mutedFg }}>success</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <StatusBadge label="Upcoming" type="info"/>
              <span className="text-xs" style={{ color: C.mutedFg }}>info</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <StatusBadge label="Important" type="warning"/>
              <span className="text-xs" style={{ color: C.mutedFg }}>warning</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <StatusBadge label="Pending" type="pending"/>
              <span className="text-xs" style={{ color: C.mutedFg }}>pending</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <StatusBadge label="Missed" type="error"/>
              <span className="text-xs" style={{ color: C.mutedFg }}>error</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Progress */}
      <Section title="7 · Progress Indicators">
        <div className="flex flex-col gap-4">
          <ProgressBar label="Games played today" current={2} total={3} color={C.green}/>
          <ProgressBar label="Tasks completed" current={3} total={5} color={C.coral}/>
          <ProgressBar label="Memories added" current={7} total={10} color={C.brown}/>
        </div>
      </Section>

      {/* 8. Reminder Cards */}
      <Section title="8 · Reminder Cards">
        <div className="flex flex-col gap-3">
          <ReminderCard icon={<Ic.Pill size={22} color={C.coral}/>} title="Morning Medicine" time="8:00 AM" done={false} onToggle={() => {}}/>
          <ReminderCard icon={<Ic.Walk size={22} color="#3B82F6"/>} title="Evening Walk" time="5:30 PM" done={true} onToggle={() => {}}/>
          <ReminderCard icon={<Ic.Pill size={22} color={C.coral}/>} title="Interactive — tap to toggle" time="1:00 PM" done={reminderDone} onToggle={() => setReminderDone(d => !d)}/>
        </div>
      </Section>

      {/* 9. Game Cards */}
      <Section title="9 · Game Cards">
        <div className="flex flex-col gap-3">
          <GameCard icon={<Ic.Puzzle size={28} color={C.card}/>} title="Memory Match" subtitle="Flip cards to find pairs" stars={4} iconBg={C.green} onPlay={() => {}}/>
          <GameCard icon={<Ic.Music size={28} color={C.card}/>} title="Song Quiz" subtitle="Assamese folk songs" stars={3} iconBg={C.coral} onPlay={() => {}}/>
          <GameCard icon={<Ic.Type size={28} color={C.card}/>} title="Bengali Word Match" subtitle="Match words to pictures" stars={5} iconBg={C.brown} onPlay={() => {}}/>
        </div>
      </Section>

      {/* 10. Empty States */}
      <Section title="10 · Empty States">
        <div className="grid grid-cols-1 gap-4" style={{ maxWidth: 480 }}>
          <div style={{ backgroundColor: C.card, borderRadius: 24, border: `1px solid ${C.border}` }}>
            <EmptyState
              icon={<Ic.Bell size={36} color={C.mutedFg}/>}
              title="No reminders yet"
              body="Your caregiver will add medicines and activities here. Check back soon."
            />
          </div>
          <div style={{ backgroundColor: C.card, borderRadius: 24, border: `1px solid ${C.border}` }}>
            <EmptyState
              icon={<Ic.Heart size={36} color={C.mutedFg}/>}
              title="No memories added"
              body="Add your first special memory — a photo, a place, or a moment you love."
              action={<PrimaryButton label="Add a Memory" onClick={() => {}}/>}
            />
          </div>
        </div>
      </Section>

      {/* 11. Offline States — all 8 variants */}
      <Section title="11 · Offline &amp; Sync States">
        <p className="text-base font-medium mb-5" style={{ color: C.mutedFg }}>
          The app works without internet. Users must never see technical error language.
          These banners appear at the top of the screen as relevant.
        </p>
        <div className="flex flex-col gap-3">
          {(["online","offline","syncing","synced","failed"] as SyncState[]).map(s => (
            <div key={s} style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}` }}>
              <div style={{ padding: "8px 16px", backgroundColor: C.muted }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.mutedFg }}>State / {s}</span>
              </div>
              <SyncStatusBar state={s}/>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 24 }}>
          <div className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: C.mutedFg }}>Messaging rules</div>
          <div className="flex flex-col gap-3">
            {[
              { good: '"You\'re offline. Your activities are saved safely on this device."', rule: "Offline banner" },
              { good: '"Your activities will sync when you\'re connected again."', rule: "Sync pending" },
              { good: '"All saved."', rule: "Sync success" },
              { good: '"Could not save. We will try again soon."', rule: "Sync error" },
            ].map(r => (
              <div key={r.rule} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: 14 }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: C.mutedFg }}>{r.rule}</div>
                <div className="text-sm font-semibold" style={{ color: C.greenDark }}>{r.good}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 12. Bottom Navigation */}
      <Section title="12 · Bottom Navigation">
        <div className="flex flex-col gap-4">
          <p className="text-base font-medium" style={{ color: C.mutedFg }}>
            Five destinations, always visible in the patient app. Minimum 64px height.
            Active state: green icon + label + 3px indicator stripe. Icon + label always paired — never icon alone.
          </p>
          <DSNavPreview/>
          <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 20 }}
            className="grid grid-cols-5 gap-2 text-center">
            {NAV_ITEMS.map(({ id, label, Icon }) => (
              <div key={id} className="flex flex-col items-center gap-2">
                <Icon size={24} color={C.green}/>
                <span className="text-xs font-bold" style={{ color: C.fg }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 13. Accessibility Variants */}
      <Section title="13 · Accessibility Variants">
        <p className="text-base font-medium mb-5" style={{ color: C.mutedFg }}>
          Three named variants showing how the same interface adapts. Layout and hierarchy are preserved — only size,
          weight, and contrast are adjusted.
        </p>

        {/* Default */}
        <div className="mb-6">
          <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>
            Accessibility / Default
          </div>
          <div style={{ backgroundColor: C.card, borderRadius: 20, border: `1px solid ${C.border}`, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: C.greenLight,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🌸</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.fg }}>Morning Medicine</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.mutedFg, marginTop: 2 }}>8:00 AM · Take with water</div>
              </div>
              <StatusBadge label="Upcoming" type="info"/>
            </div>
          </div>
        </div>

        {/* Large Text */}
        <div className="mb-6">
          <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>
            Accessibility / Large Text
          </div>
          <div style={{ backgroundColor: C.card, borderRadius: 20, border: `2px solid ${C.border}`, padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, backgroundColor: C.greenLight,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🌸</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 21, fontWeight: 800, color: C.fg }}>Morning Medicine</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: C.mutedFg, marginTop: 4 }}>8:00 AM · Take with water</div>
              </div>
            </div>
          </div>
        </div>

        {/* High Contrast */}
        <div>
          <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: C.mutedFg }}>
            Accessibility / High Contrast
          </div>
          <div style={{ backgroundColor: "#1A1A1A", borderRadius: 20, border: "3px solid #FFFFFF", padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, backgroundColor: "#2D4A36",
                border: "2px solid #6FCF97", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🌸</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>Morning Medicine</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#C4C4C4", marginTop: 4 }}>8:00 AM · Take with water</div>
              </div>
              <div style={{ backgroundColor: "#2D4A36", color: "#6FCF97", borderRadius: 20,
                fontSize: 13, fontWeight: 800, padding: "6px 14px", border: "2px solid #6FCF97" }}>
                Upcoming
              </div>
            </div>
          </div>
          <p className="text-xs font-semibold mt-2" style={{ color: C.mutedFg }}>
            High contrast: near-black background, pure white text, strong border on all interactive elements.
            No reliance on colour alone for any signal.
          </p>
        </div>
      </Section>

      {/* 14. Component Names */}
      <Section title="14 · Component Names for Engineering">
        <p className="text-base font-medium mb-5" style={{ color: C.mutedFg }}>
          Canonical component names for the Manus engineering agent to reproduce in React Native.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Component/AppHeader",         "Top bar with title + back nav"],
            ["Component/BottomNavigation",   "5-tab bottom bar"],
            ["Component/PrimaryButton",      "Main CTA · green fill"],
            ["Component/SecondaryButton",    "Low-emphasis · outlined"],
            ["Component/LargeActionButton",  "60px height game CTA"],
            ["Component/IconButton",         "ghost / tinted / solid"],
            ["Component/ReminderCard",       "Reminder row with toggle"],
            ["Component/MemoryCard",         "Memory thumbnail row"],
            ["Component/GameCard",           "Game list item with sidebar"],
            ["Component/ProgressIndicator",  "Labelled progress bar"],
            ["Component/ResultCard",         "Game complete hero card"],
            ["Component/OfflineBanner",      "Connection state strip"],
            ["Component/SyncStatus",         "5-state sync indicator"],
            ["Component/EmptyState",         "Icon + title + body + CTA"],
            ["Component/ErrorState",         "Icon + message + retry"],
            ["Component/ConfirmationDialog", "Modal sheet with 2 CTAs"],
            ["Component/VoiceButton",        "Circular mic trigger"],
            ["Component/LanguageOption",     "Language picker row"],
            ["Component/SettingsRow",        "Icon + label + chevron"],
            ["Component/AccessibilityToggle","Text size 3-option picker"],
          ].map(([name, desc]) => (
            <div key={name} style={{ backgroundColor: C.card, borderRadius: 14, border: `1px solid ${C.border}`,
              padding: "12px 16px" }}>
              <div className="text-sm font-extrabold font-mono" style={{ color: C.green, marginBottom: 3 }}>{name}</div>
              <div className="text-xs font-medium" style={{ color: C.mutedFg }}>{desc}</div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

/* ─────────────────────────────────────────────
   MANUS HANDOFF PAGE
   ───────────────────────────────────────────── */
function HandoffRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 20, padding: "14px 0", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ width: 200, flexShrink: 0, fontSize: 14, fontWeight: 700, color: C.mutedFg }}>{label}</div>
      <div style={{ flex: 1, fontSize: 15, fontWeight: 600, color: C.fg }}>{value}</div>
    </div>
  );
}

function HandoffSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: C.card, borderRadius: 24, border: `1.5px solid ${C.border}`,
      overflow: "hidden" }}>
      <div style={{ backgroundColor: C.green, padding: "14px 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em",
          textTransform: "uppercase" }}>{label}</div>
      </div>
      <div style={{ padding: "4px 24px 8px" }}>{children}</div>
    </div>
  );
}

function HandoffPage() {
  const screens = [
    { cat: "Onboarding / Auth", items: ["Screen/Splash", "Screen/Welcome", "Screen/Login"] },
    { cat: "Home", items: ["Screen/Home", "Screen/Home · Offline state", "Screen/Home · Voice entry"] },
    { cat: "Games", items: [
      "Screen/Games", "Screen/Game/MemoryMatch · Intro", "Screen/Game/MemoryMatch · Gameplay",
      "Screen/Game/MemoryMatch · Pause", "Screen/Game/MemoryMatch · Result",
      "Screen/Game/ObjectRecall · Intro", "Screen/Game/ObjectRecall · Viewing",
      "Screen/Game/ObjectRecall · Recalling", "Screen/Game/ObjectRecall · Result",
      "Screen/Game/PatternSequence · Intro", "Screen/Game/PatternSequence · Question",
      "Screen/Game/PatternSequence · Feedback", "Screen/Game/PatternSequence · Result",
      "State/GameUnavailable", "State/GameOffline",
    ]},
    { cat: "Memories", items: ["Screen/Memories", "Screen/Memories/Detail", "State/Memories/Empty", "State/Memories/Error"] },
    { cat: "Reminders", items: ["Screen/Reminders", "Screen/Reminders/Detail", "Screen/Routine", "State/Reminders/Empty", "State/Reminders/Offline"] },
    { cat: "Voice", items: ["Screen/VoiceAssistant · Idle", "Screen/VoiceAssistant · Listening", "Screen/VoiceAssistant · Processing", "Screen/VoiceAssistant · Response", "Screen/VoiceAssistant · Error"] },
    { cat: "Language", items: ["Screen/Language", "State/Language/Selected"] },
    { cat: "Profile / Settings", items: ["Screen/Profile", "Screen/Accessibility", "Screen/Language", "Screen/Help", "Screen/About"] },
    { cat: "Offline / Sync States", items: ["State/Online", "State/Offline", "State/Syncing", "State/Synced", "State/SyncFailed", "State/DataSavedLocally"] },
    { cat: "Accessibility Variants", items: ["Accessibility/Default", "Accessibility/LargeText", "Accessibility/HighContrast"] },
  ];

  const games = [
    { name: "Memory Match",       desc: "Flip cards to find matching pairs from NE India imagery. 4 pairs, 2×4 grid. No timer." },
    { name: "Object Recall",      desc: "View familiar NE India objects then identify them from a larger pool. 3 rounds, patient-paced." },
    { name: "Pattern Sequence",   desc: "Look at a repeating emoji pattern and choose what comes next. 5 questions, immediate gentle feedback." },
    { name: "Song Quiz",          desc: "(Coming soon) Listen to a Bihu / Bhawaiya melody and identify the song." },
    { name: "Word Match",         desc: "(Coming soon) Look at a picture and find the matching Assamese/Bengali word." },
    { name: "Photo Stories",      desc: "(Coming soon) Answer a simple question about a familiar photo from your memories." },
  ];

  const principles = [
    "Minimum 48px touch targets — 56px for primary actions",
    "Minimum 16px body text — caregiver-configurable to 20px or 24px",
    "AA contrast (4.5:1) throughout — High Contrast mode raises to AAA",
    "Every icon paired with a text label — never icon alone",
    "No information conveyed by colour alone — always icon + shape + label",
    "No countdown timers — all games are patient-paced",
    "No clinical or diagnostic language anywhere in the UI",
    "Simple, friendly labels: Start · Continue · Done · Go Back · Try Again",
    "Warm, non-alarming language for all errors and offline states",
    "Cultural familiarity: NE India objects, flowers, food, and language options",
  ];

  const engineeringNotes = [
    ["Platform",         "React Native · Expo SDK 52+"],
    ["Language",         "TypeScript strict mode"],
    ["Local storage",    "SQLite (expo-sqlite) — offline-first, sync on reconnect"],
    ["Backend",          "Supabase (auth, database, storage, realtime)"],
    ["Navigation",       "Expo Router (file-based) or React Navigation v7"],
    ["Fonts",            "Nunito (body) + Lora (display) — both via Google Fonts"],
    ["Icons",            "Lucide React Native or custom inline SVG set"],
    ["Accessibility",    "Native ARIA roles, accessibilityLabel, accessibilityHint on all interactive elements"],
    ["Offline sync",     "Queue locally in SQLite, upload to Supabase on reconnection"],
    ["Auth",             "Supabase Auth — patient PIN, caregiver email/password"],
    ["Security",         "No secrets in code. No Supabase schema modification from client. No clinical data displayed."],
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }} className="px-6 py-10 flex flex-col gap-10">

      {/* Header */}
      <div style={{ backgroundColor: C.green, borderRadius: 28, padding: "40px 36px" }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          NEURONERD — MANUS HANDOFF
        </div>
        <h1 style={{ fontFamily: "'Lora', serif", color: "#fff", fontSize: 44, fontWeight: 700,
          lineHeight: 1.15, margin: "0 0 16px" }}>
          Design Handoff
        </h1>
        <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, fontWeight: 500, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>
          This is the visual and structural source of truth for the NeuroNerd patient application.
          Manus AI will implement the production React Native + Expo application based on this specification.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
          {["v1.0 Final","Northeast India","Elderly-first","Offline-first","Non-clinical"].map(t => (
            <span key={t} style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff",
              borderRadius: 24, fontSize: 12, fontWeight: 700, padding: "5px 14px" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* A. Product Purpose */}
      <HandoffSection label="A · Product Purpose">
        <HandoffRow label="Application name" value="NeuroNerd"/>
        <HandoffRow label="Primary users" value="Elderly patients (60+) in Northeast India, including those with cognitive difficulties"/>
        <HandoffRow label="Caregiver role" value="Family member or clinician who configures reminders and reviews activity"/>
        <HandoffRow label="Core purpose" value="Cognitive games · Memory assistance · Reminders · Daily routine · Voice assistance · Offline-first"/>
        <HandoffRow label="Important: NOT" value="A diagnostic application. Never display dementia scores, severity ratings, or clinical assessments."/>
        <HandoffRow label="Tone" value="Calm · Warm · Simple · Familiar · Reassuring · Non-clinical · Culturally respectful"/>
      </HandoffSection>

      {/* B. Navigation */}
      <HandoffSection label="B · Primary Navigation">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, padding: "16px 0" }}>
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <div key={id} style={{ backgroundColor: C.greenLight, borderRadius: 16, padding: "16px 8px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Icon size={28} color={C.green}/>
              <span style={{ fontSize: 13, fontWeight: 800, color: C.greenDark }}>{label}</span>
            </div>
          ))}
        </div>
        <HandoffRow label="Min height" value="64px · Icon + text label always — never icon alone"/>
        <HandoffRow label="Active state" value="Green icon + bold label + 3px green indicator strip at top"/>
        <HandoffRow label="Hidden when" value="Any sub-screen or game is active"/>
      </HandoffSection>

      {/* C. Core Games */}
      <HandoffSection label="C · Core Games">
        {games.map(g => (
          <HandoffRow key={g.name} label={g.name} value={g.desc}/>
        ))}
        <div style={{ padding: "14px 0" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: C.coral, margin: 0 }}>
            Game results describe performance only: "You remembered 4 of 5" — never scores, grades, or clinical language.
          </p>
        </div>
      </HandoffSection>

      {/* D. Screen Inventory */}
      <HandoffSection label="D · Screen Inventory">
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {screens.map(cat => (
            <div key={cat.cat} style={{ borderBottom: `1px solid ${C.border}` }}>
              <div style={{ padding: "12px 0 6px", fontSize: 13, fontWeight: 800,
                color: C.mutedFg, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {cat.cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingBottom: 12 }}>
                {cat.items.map(s => (
                  <span key={s} style={{ backgroundColor: C.muted, color: C.fgSub, borderRadius: 10,
                    fontSize: 12, fontWeight: 700, padding: "4px 10px", fontFamily: "monospace" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </HandoffSection>

      {/* E. Design Principles */}
      <HandoffSection label="E · Design Principles">
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {principles.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12,
              padding: "12px 0", borderBottom: i < principles.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: C.greenLight,
                flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Ic.Check size={13} color={C.green}/>
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: C.fg, lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>
      </HandoffSection>

      {/* F. Offline Principle */}
      <HandoffSection label="F · Offline Principle">
        <div style={{ padding: "16px 0 8px" }}>
          <div style={{ backgroundColor: "#FEF3C7", borderRadius: 18, border: "2px solid #F59E0B",
            padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>📶</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#92400E", marginBottom: 6 }}>
                Offline-first is a non-negotiable requirement
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "#92400E", lineHeight: 1.6 }}>
                The patient must be able to play games, check reminders, and browse memories without internet access.
                All completed sessions and interactions are persisted locally in SQLite and synchronised to Supabase
                when connectivity is restored. The user must never be blocked by connectivity issues.
              </div>
            </div>
          </div>
        </div>
        <HandoffRow label="Local storage" value="SQLite — expo-sqlite. All game sessions, reminders, and memories cached."/>
        <HandoffRow label="Sync trigger" value="On app foreground after offline period. Background sync when available."/>
        <HandoffRow label="Conflict resolution" value="Last-write wins for patient actions. Caregiver changes take priority for reminder config."/>
        <HandoffRow label="User language" value='"Saved on this device." · "Your activities will sync when connected." — No technical terms.'/>
      </HandoffSection>

      {/* G. Implementation Target */}
      <HandoffSection label="G · Implementation Target">
        {engineeringNotes.map(([label, value]) => (
          <HandoffRow key={label} label={label} value={value}/>
        ))}
      </HandoffSection>

      {/* H. Engineering Rules */}
      <HandoffSection label="H · Important Engineering Rules">
        {[
          "This Figma design is the visual and interaction source of truth.",
          "Do NOT expose backend credentials or Supabase keys in the application code.",
          "Do NOT modify the existing Supabase database schema without coordination.",
          "Do NOT add countdown timers — all cognitive games are patient-paced.",
          "Do NOT display: dementia score · dementia severity · cognitive impairment score · clinical risk · diagnosis.",
          "All patient-facing text must be warm, simple (max reading age 10), and culturally appropriate for Northeast India.",
          "Caregiver and patient flows are entirely separate — never mix their views.",
          "The voice assistant must be optional and never block the primary interaction flow.",
        ].map((rule, i) => (
          <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0",
            borderBottom: i < 7 ? `1px solid ${C.border}` : "none" }}>
            <span style={{ color: C.coral, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>✕</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: C.fg, lineHeight: 1.5 }}>{rule}</span>
          </div>
        ))}
      </HandoffSection>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "16px 0 32px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: C.fg, fontFamily: "'Lora', serif", marginBottom: 8 }}>
          NeuroNerd · Design System v1.0 · Final Handoff
        </div>
        <p style={{ fontSize: 14, fontWeight: 500, color: C.mutedFg, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
          This prototype is structurally complete. All major screens, states, games, and offline flows are represented.
          Manus AI should use this as the single source of truth for visual design, component structure, and interaction intent.
        </p>
        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          {["14 screen categories", "3 complete games", "8 offline states", "3 accessibility variants", "20+ named components"].map(t => (
            <span key={t} style={{ backgroundColor: C.greenLight, color: C.greenDark,
              borderRadius: 24, fontSize: 12, fontWeight: 700, padding: "5px 14px" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState<"system" | "app" | "handoff">("system");

  return (
    <div style={{ backgroundColor: C.phoneBg, minHeight: "100vh" }}>
      {/* Top switcher */}
      <div style={{ backgroundColor: C.card, borderBottom: `1.5px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100 }}
        className="flex items-center justify-between px-6 py-3">
        <div>
          <span className="text-lg font-extrabold" style={{ fontFamily: "'Lora', serif", color: C.fg }}>NeuroNerd</span>
          <span className="ml-2 text-xs font-bold uppercase tracking-widest" style={{ color: C.mutedFg }}>
            {view === "system" ? "Design System" : view === "app" ? "App Preview" : "Manus Handoff"}
          </span>
        </div>
        <div className="flex gap-2">
          {([["system", "Design System"], ["app", "App Preview"], ["handoff", "Handoff"]] as const).map(([v, label]) => (
            <button key={v} onClick={() => setView(v)}
              style={{ borderRadius: 24,
                backgroundColor: view === v ? C.green : C.muted,
                color: view === v ? C.card : C.fgSub,
                fontSize: 13, fontWeight: 700 }}
              className="px-4 py-2 transition-all">
              {label}
            </button>
          ))}
        </div>
      </div>

      {view === "system" ? (
        <DesignSystem/>
      ) : view === "app" ? (
        <div className="flex flex-col items-center justify-start py-10 px-4 gap-4">
          <p className="text-sm font-semibold" style={{ color: C.mutedFg }}>
            Interactive prototype · Splash → Welcome → Login → App · All screens navigable
          </p>
          <PhoneFrame/>
          <p className="text-xs font-medium text-center" style={{ color: C.mutedFg, maxWidth: 360, lineHeight: 1.7 }}>
            Touch targets ≥ 48px · AA contrast · Nunito + Lora · Min 16px body text · 5-tab bottom navigation
          </p>
        </div>
      ) : (
        <HandoffPage/>
      )}
    </div>
  );
}
