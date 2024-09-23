export default function cloudinaryLoader({ src, width, quality }: any) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${src}?w=${width}&q=${quality || 80}`;
}
