/* ChinaFun2 shared helpers — fetch JSON and render tables */
function esc(s){
  if(s===null||s===undefined||s==="") return "";
  return String(s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function link(url,label,cls){
  if(!url) return '<span class="muted small">—</span>';
  return `<a href="${esc(url)}" target="_blank" rel="noopener"${cls?` class="${cls}"`:""}>${esc(label||url)}</a>`;
}
function money(n){ return n===""||n===null||n===undefined?"—":"$"+Number(n).toLocaleString("en-US"); }
function cny(n){ return n===""||n===null||n===undefined?"—":"¥"+Number(n).toLocaleString("en-US"); }
function starsBadge(r){
  if(r.stars===-1) return '<span class="badge bad">CLOSED — do not book</span>';
  if(r.stars===3) return '<span class="badge star">★★★ 3 stars</span>';
  if(r.stars===2) return '<span class="badge star">★★ 2 stars</span>';
  if(r.stars===1) return '<span class="badge star">★ 1 star</span>';
  return '<span class="badge info">Selected (Guide-listed, not starred)</span>';
}
function verifyBadge(v){
  if(!v) return '<span class="badge warn">Unverified</span>';
  if(v.startsWith("Verified")) return '<span class="badge ok">Verified</span>';
  if(v.includes("Unverified")||v.includes("Unverified")) return '<span class="badge warn">Needs review</span>';
  return '<span class="badge warn">Check source</span>';
}
function socialLinks(s){
  if(!s) return '<span class="muted small">—</span>';
  const parts=[];
  if(s.youtube) parts.push(`<a href="${esc(s.youtube)}" target="_blank" rel="noopener">YouTube ▸ ${esc(s.youtube_label||"Watch")}</a>`);
  else if(s.youtube_search) parts.push(`<a href="${esc(s.youtube_search)}" target="_blank" rel="noopener">YouTube search</a>`);
  if(s.tiktok_search) parts.push(`<a href="${esc(s.tiktok_search)}" target="_blank" rel="noopener">TikTok search</a>`);
  if(s.instagram) parts.push(`<a href="${esc(s.instagram)}" target="_blank" rel="noopener">Instagram ▸ ${esc(s.instagram_label||"Profile")}</a>`);
  else if(s.instagram_search) parts.push(`<a href="${esc(s.instagram_search)}" target="_blank" rel="noopener">Instagram search</a>`);
  return parts.join("<br>");
}
async function loadJSON(path){
  const res = await fetch(path);
  if(!res.ok) throw new Error("Failed to load "+path);
  return res.json();
}
