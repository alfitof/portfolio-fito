"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  Clock,
  Lightbulb,
  Mail,
  MapPin,
  Linkedin,
  Phone,
  User,
} from "lucide-react";

const iconStyle = { color: "var(--text-muted)" };
const iconClass = "w-3.5 h-3.5 flex-shrink-0";

export default function ProfileInfo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      icon: <Code2 className={iconClass} style={iconStyle} />,
      label: "Quality Assurance Engineer @ CIMB Niaga",
    },
    {
      icon: <Clock className={iconClass} style={iconStyle} />,
      label: time ? `${time} (UTC +07:00) // same time` : "...",
    },
    {
      icon: <Lightbulb className={iconClass} style={iconStyle} />,
      label: "Aspiring AI Automation Engineer",
    },
    {
      icon: <Mail className={iconClass} style={iconStyle} />,
      label: "alfito.fbriansyah@gmail.com",
    },
    {
      icon: <MapPin className={iconClass} style={iconStyle} />,
      label: "Bintaro, Tangerang Selatan",
    },
    {
      icon: <Linkedin className={iconClass} style={iconStyle} />,
      label: "linkedin.com/in/alfito-febriansyah",
      href: "https://linkedin.com/in/alfito-febriansyah",
    },
    {
      icon: <Phone className={iconClass} style={iconStyle} />,
      label: "+62 895 7009 97065",
    },
    { icon: <User className={iconClass} style={iconStyle} />, label: "he/him" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 min-w-0">
          {item.icon}
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-blue-400 transition-colors truncate"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </a>
          ) : (
            <span
              className="text-xs truncate"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
