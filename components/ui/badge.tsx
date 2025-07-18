import React from "react";

interface BadgeProps {
  badge: string;
}

const Badge = ({ badge }: BadgeProps) => {
  return (
    <div className="border border-black px-2 py-1 font-koushiki-sans text-sm">
      <span>{badge}</span>
    </div>
  );
};

export default Badge;
