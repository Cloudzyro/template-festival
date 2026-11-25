// "18:30" to minutes after midnight.
export const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

// "18:30" to "6:30 pm"; "18:00" to "6 pm".
export const fmt = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour} ${suffix}` : `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
};

export const money = (n: number) => (n === 0 ? "Free" : `$${n.toLocaleString("en-US")}`);
