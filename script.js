'use strict';

/* ================= البيانات ================= */
/* الأطباء أسماء خيالية للعرض. باقي الجهات أسماء معروفة، والتفاصيل تقريبية وقد تكون غير دقيقة. */
const DOCTORS = [
  { id: 'd1', name: 'د. نادية فاروق', spec: 'قلب وأوعية دموية', city: 'القاهرة', rating: 4.8, exp: 14, phone: '0100 000 0101', addr: 'المعادي، القاهرة', bio: 'استشارية قلب، تهتم بالوقاية ومتابعة ضغط الدم على المدى الطويل.' },
  { id: 'd2', name: 'د. عمر حداد', spec: 'جلدية', city: 'الجيزة', rating: 4.6, exp: 9, phone: '0100 000 0102', addr: 'الدقي، الجيزة', bio: 'أخصائي جلدية، يعالج مشاكل الجلد والشعر والأظافر للكبار والأطفال.' },
  { id: 'd3', name: 'د. هبة السيد', spec: 'باطنة وسكر', city: 'الإسكندرية', rating: 4.7, exp: 12, phone: '0100 000 0103', addr: 'سموحة، الإسكندرية', bio: 'متخصصة في الباطنة ومتابعة مرضى السكر والغدة الدرقية.' },
  { id: 'd4', name: 'د. كريم منصور', spec: 'عظام', city: 'القاهرة', rating: 4.4, exp: 11, phone: '0100 000 0104', addr: 'مدينة نصر، القاهرة', bio: 'أخصائي عظام وإصابات الملاعب وآلام الركبة والظهر.' },
  { id: 'd5', name: 'د. منى عادل', spec: 'أطفال', city: 'المنصورة', rating: 4.9, exp: 16, phone: '0100 000 0105', addr: 'وسط البلد، المنصورة', bio: 'استشارية أطفال، متابعة النمو والتطعيمات والأمراض الشائعة.' },
  { id: 'd6', name: 'د. ياسر عبد الله', spec: 'عيون', city: 'الجيزة', rating: 4.3, exp: 8, phone: '0100 000 0106', addr: 'المهندسين، الجيزة', bio: 'أخصائي عيون، فحص النظر وعلاج جفاف العين والمياه البيضاء.' },
];
const PHARMACIES = [
  { id: 'p1', name: 'صيدليات العزبي', city: 'القاهرة', addr: 'فروع متعددة بالقاهرة الكبرى', hours: 'يوميًا ٩ ص – ١٢ م (تختلف حسب الفرع)', note: 'سلسلة صيدليات كبيرة ولها خدمة توصيل.' },
  { id: 'p2', name: 'صيدليات رشدي', city: 'الإسكندرية', addr: 'فروع متعددة بالإسكندرية', hours: 'يوميًا ٩ ص – ١١ م (تختلف حسب الفرع)', note: 'من أقدم السلاسل بالإسكندرية.' },
  { id: 'p3', name: 'صيدليات سيف', city: 'القاهرة', addr: 'فروع متعددة بالقاهرة والجيزة', hours: 'بعض الفروع ٢٤ ساعة', note: 'سلسلة معروفة ولها فروع تعمل على مدار اليوم.' },
  { id: 'p4', name: 'صيدليات مصر', city: 'الجيزة', addr: 'فروع متعددة بالجيزة', hours: 'يوميًا ٨ ص – ١٢ م (تختلف حسب الفرع)', note: 'تتبع شركة مصر للأدوية والمستحضرات.' },
];
const LABS = [
  { id: 'l1', name: 'معامل البرج', city: 'القاهرة', addr: 'فروع متعددة بالقاهرة والجيزة', hours: 'يوميًا ٧ ص – ١٠ م', tests: ['صورة دم كاملة', 'وظائف كبد وكلى', 'سكر تراكمي'], note: 'تحاليل منزلية متاحة في بعض المناطق.' },
  { id: 'l2', name: 'معامل ألفا', city: 'القاهرة', addr: 'فروع متعددة', hours: 'يوميًا ٧ ص – ٩ م', tests: ['غدة درقية', 'فيتامين د', 'دهون'], note: 'تحاليل وأشعة في بعض الفروع.' },
  { id: 'l3', name: 'المختبر', city: 'الإسكندرية', addr: 'فروع بالإسكندرية', hours: 'يوميًا ٨ ص – ٨ م', tests: ['تحليل بول', 'سكر صائم', 'صورة دم'], note: 'تتوفر نتائج إلكترونية.' },
  { id: 'l4', name: 'معامل المدينة', city: 'المنصورة', addr: 'وسط البلد، المنصورة', hours: 'السبت – الخميس ٨ ص – ٧ م', tests: ['صورة دم', 'وظائف كبد', 'هرمونات'], note: 'معمل محلي للتجربة.' },
];
const HOSPITALS = [
  { id: 'h1', name: 'مستشفى قصر العيني', city: 'القاهرة', addr: 'المنيل، القاهرة', hours: 'طوارئ ٢٤ ساعة', er: true, depts: ['طوارئ', 'باطنة', 'جراحة', 'أطفال'], note: 'مستشفى جامعي تابع لجامعة القاهرة.' },
  { id: 'h2', name: 'المعهد القومي للقلب', city: 'الجيزة', addr: 'إمبابة، الجيزة', hours: 'طوارئ ٢٤ ساعة', er: true, depts: ['قلب', 'قسطرة', 'جراحة قلب'], note: 'متخصص في أمراض القلب.' },
  { id: 'h3', name: 'مستشفى ٥٧٣٥٧', city: 'القاهرة', addr: 'السيدة زينب، القاهرة', hours: 'مواعيد العيادات صباحًا', er: false, depts: ['أورام أطفال', 'أشعة', 'علاج كيماوي'], note: 'مستشفى لعلاج سرطان الأطفال.' },
  { id: 'h4', name: 'مستشفى دار الفؤاد', city: 'الجيزة', addr: '٦ أكتوبر، الجيزة', hours: 'طوارئ ٢٤ ساعة', er: true, depts: ['قلب', 'عظام', 'باطنة', 'أشعة'], note: 'مستشفى خاص متعدد التخصصات.' },
  { id: 'h5', name: 'المستشفى الجامعي الرئيسي', city: 'الإسكندرية', addr: 'الأزاريطة، الإسكندرية', hours: 'طوارئ ٢٤ ساعة', er: true, depts: ['طوارئ', 'باطنة', 'عظام', 'نساء وتوليد'], note: 'تابع لجامعة الإسكندرية.' },
];
const REC_TYPES = { history: 'تاريخ مرضي', allergy: 'حساسية', condition: 'حالة مزمنة', report: 'تقرير', lab: 'نتيجة تحليل', rx: 'روشتة', doc: 'مستند' };
const TODAY = () => new Date().toISOString().slice(0, 10);

/* أيقونات SVG موحّدة: نفس المقاس الأساسي (24) ونفس سمك الخط، وبتاخد لون النص تلقائيًا */
const PATHS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  doctors: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M5 3h2M13 3h2"/><path d="M10 13v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>',
  pharmacies: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  labs: '<path d="M9 3h6"/><path d="M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3"/><path d="M7.5 15h9"/>',
  hospitals: '<path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16"/><path d="M2 21h20"/><path d="M12 8v6M9 11h6"/><path d="M10 21v-3h4v3"/>',
  file: '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/><path d="M12 16.2c-2-1.4-3.2-2.4-3.2-3.7a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8c0 1.3-1.2 2.3-3.2 3.7Z"/>',
  meds: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  assistant: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  clip: '<path d="m21 11-8.6 8.6a5 5 0 0 1-7.1-7.1l8.6-8.6a3.4 3.4 0 0 1 4.8 4.8l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4L15 7.3"/>',
  alert: '<path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4.5"/><path d="M12 17.5h.01"/>',
};
const svg = (name, size = 22, cls = '') =>
  `<svg class="${cls}" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${PATHS[name]}</svg>`;
const ico = (name, size = 16) => svg(name, size, 'ic'); /* أيقونة صغيرة جوه النص */
const ICONS = Object.fromEntries(Object.keys(PATHS).map((k) => [k, svg(k)]));
const NAV = [
  ['home', 'الرئيسية'], ['doctors', 'الأطباء'], ['pharmacies', 'الصيدليات'],
  ['labs', 'المعامل'], ['hospitals', 'المستشفيات'], ['file', 'الملف الطبي'],
  ['meds', 'أدويتي'], ['assistant', 'المساعد'],
];

/* ================= أدوات ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s).toLowerCase().replace(/[إأآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/[\u064B-\u0652]/g, '').trim();
const store = {
  get(k, d) { try { const v = localStorage.getItem('reaya:' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('reaya:' + k, JSON.stringify(v)); } catch { toast('تعذر الحفظ على المتصفح'); } },
};
let toastTimer;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800); }
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const stars = (r) => `${ico('star', 14)} ${r.toFixed(1)}`;
const initials = (n) => n.replace('د. ', '').trim().charAt(0);
const empty = (t) => `<div class="empty">${t}</div>`;
function fillSelect(sel, first, values) { sel.innerHTML = `<option value="">${first}</option>` + values.map((v) => `<option>${esc(v)}</option>`).join(''); }
const uniq = (arr) => [...new Set(arr)];

/* ================= التنقل ================= */
function buildNav() {
  $('#nav').innerHTML = NAV.map(([id, l]) => `<a href="#${id}" data-nav="${id}"><span class="i">${ICONS[id]}</span>${l}</a>`).join('');
  $('#bottom-nav').innerHTML = NAV.map(([id, l]) => `<a href="#${id}" data-nav="${id}"><span class="i">${ICONS[id]}</span>${l}</a>`).join('');
  $('#home-cards').innerHTML = NAV.filter(([id]) => id !== 'home').map(([id, l]) =>
    `<a class="card click tile" href="#${id}"><span class="ico">${ICONS[id]}</span>${l}</a>`).join('');
}
function route() {
  let page = location.hash.slice(1) || 'home';
  if (!NAV.some(([id]) => id === page)) page = 'home';
  $$('[data-page]').forEach((s) => (s.hidden = s.dataset.page !== page));
  $$('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === page));
  document.title = `رعاية – ${NAV.find(([id]) => id === page)[1]}`;  if (page === 'meds') renderMeds();
  if (page === 'file') renderRecords();
}

/* ================= نافذة منبثقة ================= */
const dlg = $('#dlg');
function openDlg(html) { $('#dlg-body').innerHTML = html; if (!dlg.open) dlg.showModal(); }
function closeDlg() { if (dlg.open) dlg.close(); }
dlg.addEventListener('click', (e) => { if (e.target === dlg) closeDlg(); });

function confirmDlg(msg, onYes) {
  openDlg(`<h3>تأكيد الحذف</h3><p>${esc(msg)}</p><div class="actions"><button class="btn danger" id="yes">حذف</button><button class="btn ghost" data-close>إلغاء</button></div>`);
  $('#yes').onclick = () => { closeDlg(); onYes(); };
}
document.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeDlg(); });

/* ================= الأطباء ================= */
function renderDoctors() {
  const q = norm($('#doc-q').value), spec = $('#doc-spec').value, city = $('#doc-city').value, rate = +$('#doc-rate').value;
  const list = DOCTORS.filter((d) => (!q || norm(d.name).includes(q)) && (!spec || d.spec === spec) && (!city || d.city === city) && d.rating >= rate);
  $('#doc-list').innerHTML = list.length ? list.map((d) => `
    <article class="card click" data-doc="${d.id}" tabindex="0">
      <div class="row"><div class="avatar">${esc(initials(d.name))}</div>
        <div><h3>${esc(d.name)}</h3><div class="meta">${esc(d.spec)}</div></div></div>
      <div class="row" style="margin-top:12px"><span class="badge">${stars(d.rating)}</span><span class="badge">${d.exp} سنة خبرة</span><span class="badge">${esc(d.city)}</span></div>
    </article>`).join('') : empty('مفيش أطباء مطابقين للبحث. جرّب تغيّر الفلاتر.');
}
function doctorDetails(id) {
  const d = DOCTORS.find((x) => x.id === id); if (!d) return;
  openDlg(`
    <div class="row"><div class="avatar">${esc(initials(d.name))}</div><div><h2>${esc(d.name)}</h2><div class="meta">${esc(d.spec)}</div></div></div>
    <p style="margin-top:12px">${esc(d.bio)}</p>
    <dl class="kv"><dt>التقييم</dt><dd>${stars(d.rating)}</dd><dt>الخبرة</dt><dd>${d.exp} سنة</dd><dt>المدينة</dt><dd>${esc(d.city)}</dd>
      <dt>العيادة</dt><dd>${esc(d.addr)}</dd><dt>الهاتف</dt><dd dir="ltr" style="text-align:right">${esc(d.phone)}</dd></dl>
    <div class="map-ph">${ico('pin', 18)}&nbsp;معاينة الموقع (تجريبية)</div>
    <p class="meta" style="margin-top:10px">للتواصل مع الدكتور اتصل مباشرة. الحجز غير متاح داخل التطبيق. الاسم والبيانات خيالية.</p>
    <div class="actions"><a class="btn" href="tel:${esc(d.phone.replace(/\s/g, ''))}">اتصال</a><button class="btn ghost" data-close>إغلاق</button></div>`);
}

/* ================= دليل الجهات (صيدليات/معامل/مستشفيات) ================= */
function renderFacility(listEl, data, q, city, extra) {
  const nq = norm(q), items = data.filter((x) => (!nq || norm(x.name).includes(nq)) && (!city || x.city === city));
  listEl.innerHTML = items.length ? items.map((x) => `
    <article class="card click" data-fac="${x.id}" tabindex="0">
      <h3>${esc(x.name)}</h3><div class="meta">${esc(x.addr)}</div>
      <div class="row" style="margin-top:12px"><span class="badge">${esc(x.city)}</span>${extra(x)}</div>
    </article>`).join('') : empty('مفيش نتائج مطابقة.');
}
const ALL_FAC = () => [...PHARMACIES, ...LABS, ...HOSPITALS];
function facilityDetails(id) {
  const x = ALL_FAC().find((f) => f.id === id); if (!x) return;
  const extra = x.tests ? `<dt>أبرز التحاليل</dt><dd>${x.tests.map(esc).join('، ')}</dd>` : x.depts ? `<dt>الأقسام</dt><dd>${x.depts.map(esc).join('، ')}</dd>` : '';
  openDlg(`
    <h2>${esc(x.name)}</h2><p>${esc(x.note)}</p>
    <dl class="kv"><dt>المدينة</dt><dd>${esc(x.city)}</dd><dt>العنوان</dt><dd>${esc(x.addr)}</dd><dt>المواعيد</dt><dd>${esc(x.hours)}</dd>${extra}</dl>
    <div class="map-ph">${ico('pin', 18)}&nbsp;معاينة الموقع (تجريبية)</div>
    <p class="meta" style="margin-top:10px">المعلومات تقريبية وقد تتغير. اتأكد من الجهة مباشرة. توفر الأدوية غير معروض.</p>
    <div class="actions">${x.er ? '<a class="btn" href="tel:123">اتصل بالإسعاف 123</a>' : ''}<button class="btn ghost" data-close>إغلاق</button></div>`);
}

/* ================= الملف الطبي ================= */
const getRecs = () => store.get('records', [
  { id: 'r1', type: 'allergy', title: 'حساسية من البنسلين', date: '2019-05-12', notes: 'ظهور طفح جلدي بعد تناوله.' },
  { id: 'r2', type: 'lab', title: 'تحليل دم دوري', date: '2026-08-03', notes: 'نتائج الفحص السنوي.' },
]);
function renderRecords() {
  const q = norm($('#rec-q').value), t = $('#rec-type').value;
  const list = getRecs().filter((r) => (!q || norm(r.title + ' ' + r.notes).includes(q)) && (!t || r.type === t)).sort((a, b) => b.date.localeCompare(a.date));
  $('#rec-list').innerHTML = list.length ? list.map((r) => `
    <article class="card">
      <div class="row" style="justify-content:space-between"><h3>${esc(r.title)}</h3><span class="badge">${esc(REC_TYPES[r.type])}</span></div>
      <div class="meta">${esc(r.date)}${r.file ? ` · ${ico('clip', 14)} ${esc(r.file)}` : ''}</div>
      <p>${esc(r.notes)}</p>
      <div class="actions"><button class="btn ghost sm" data-rec-edit="${r.id}">تعديل</button><button class="btn ghost sm" data-rec-del="${r.id}">حذف</button></div>
    </article>`).join('') : empty('لسه مفيش سجلات. اضغط «إضافة سجل» عشان تبدأ.');
}
function recordForm(id) {
  const r = getRecs().find((x) => x.id === id) || { type: 'history', title: '', date: TODAY(), notes: '' };
  openDlg(`<h2>${id ? 'تعديل سجل' : 'إضافة سجل'}</h2>
    <form class="form" id="rec-form" novalidate>
      <label>النوع</label><select name="type">${Object.entries(REC_TYPES).map(([k, v]) => `<option value="${k}" ${r.type === k ? 'selected' : ''}>${v}</option>`).join('')}</select>
      <label>العنوان</label><input name="title" value="${esc(r.title)}"><div class="err" data-e="title"></div>
      <label>التاريخ</label><input type="date" name="date" value="${esc(r.date)}"><div class="err" data-e="date"></div>
      <label>ملاحظات</label><textarea name="notes" rows="3">${esc(r.notes)}</textarea>
      <label>مرفق (اختياري، يُحفظ الاسم فقط)</label><input type="file" name="file">
      <div class="actions"><button class="btn" type="submit">حفظ</button><button class="btn ghost" type="button" data-close>إلغاء</button></div>
    </form>`);
  $('#rec-form').onsubmit = (e) => {
    e.preventDefault(); const f = e.target, v = Object.fromEntries(new FormData(f));
    $$('.err', f).forEach((x) => (x.textContent = ''));
    let ok = true;
    if (!v.title.trim()) { f.querySelector('[data-e=title]').textContent = 'اكتب عنوانًا للسجل'; ok = false; }
    if (!v.date) { f.querySelector('[data-e=date]').textContent = 'اختر التاريخ'; ok = false; }
    if (!ok) return;
    const rec = { id: id || uid(), type: v.type, title: v.title.trim(), date: v.date, notes: v.notes.trim(), file: v.file?.name || r.file || '' };
    const all = getRecs(); const i = all.findIndex((x) => x.id === rec.id);
    i >= 0 ? (all[i] = rec) : all.push(rec);
    store.set('records', all); closeDlg(); renderRecords(); toast(id ? 'تم تعديل السجل' : 'تمت إضافة السجل');
  };
}

/* ================= الأدوية ================= */
const LOW = 5;
const getMeds = () => store.get('meds', [{ id: 'm1', name: 'دواء تجريبي', dosage: 'حسب إرشادات الطبيب', time: '08:00', start: TODAY(), end: '', left: 4, taken: '' }]);
const saveMeds = (m) => store.set('meds', m);
function renderMeds() {
  const meds = getMeds(), today = TODAY();
  const low = meds.filter((m) => m.left <= LOW);
  const due = meds.filter((m) => m.taken !== today && (!m.end || m.end >= today));
  $('#med-alerts').innerHTML =
    (low.length ? `<p class="notice" style="background:var(--warn-bg);color:var(--warn)">${ico('alert')} كمية قليلة: ${low.map((m) => esc(m.name)).join('، ')}. فكّر تجدد الدواء.</p>` : '') +
    (due.length ? `<p class="notice">${ico('meds')} لسه ما أخدتش اليوم: ${due.map((m) => `${esc(m.name)} (${esc(m.time)})`).join('، ')}</p>` : '');
  $('#med-list').innerHTML = meds.length ? meds.map((m) => {
    const taken = m.taken === today;
    return `<article class="card">
      <div class="row" style="justify-content:space-between"><h3>${esc(m.name)}</h3>
        <span class="badge ${taken ? 'ok' : 'warn'}">${taken ? 'تم أخذه اليوم' : 'لم يُؤخذ بعد'}</span></div>
      <div class="meta">الجرعة: ${esc(m.dosage)} · الموعد: ${esc(m.time)}</div>
      <div class="meta">من ${esc(m.start)}${m.end ? ' إلى ' + esc(m.end) : ''}</div>
      <div class="row" style="margin-top:8px"><span class="badge ${m.left <= LOW ? 'bad' : ''}">المتبقي: ${m.left}</span>${m.left <= LOW ? '<span class="badge bad">مخزون منخفض</span>' : ''}</div>
      <div class="actions">
        <button class="btn sm" data-med-take="${m.id}" ${taken || m.left <= 0 ? 'disabled' : ''}>تم أخذه</button>
        <button class="btn ghost sm" data-med-edit="${m.id}">تعديل</button>
        <button class="btn ghost sm" data-med-del="${m.id}">حذف</button></div>
    </article>`;
  }).join('') : empty('مفيش أدوية مضافة. اضغط «إضافة دواء».');
}
function medForm(id) {
  const m = getMeds().find((x) => x.id === id) || { name: '', dosage: '', time: '08:00', start: TODAY(), end: '', left: 10 };
  openDlg(`<h2>${id ? 'تعديل دواء' : 'إضافة دواء'}</h2>
    <form class="form" id="med-form" novalidate>
      <label>اسم الدواء</label><input name="name" value="${esc(m.name)}"><div class="err" data-e="name"></div>
      <label>الجرعة (زي ما كتبها الدكتور)</label><input name="dosage" value="${esc(m.dosage)}"><div class="err" data-e="dosage"></div>
      <label>موعد التذكير</label><input type="time" name="time" value="${esc(m.time)}">
      <label>تاريخ البدء</label><input type="date" name="start" value="${esc(m.start)}">
      <label>تاريخ الانتهاء (اختياري)</label><input type="date" name="end" value="${esc(m.end)}"><div class="err" data-e="end"></div>
      <label>الكمية المتبقية</label><input type="number" min="0" name="left" value="${m.left}"><div class="err" data-e="left"></div>
      <div class="actions"><button class="btn" type="submit">حفظ</button><button class="btn ghost" type="button" data-close>إلغاء</button></div>
    </form>`);
  $('#med-form').onsubmit = (e) => {
    e.preventDefault(); const f = e.target, v = Object.fromEntries(new FormData(f));
    $$('.err', f).forEach((x) => (x.textContent = ''));
    const er = (k, t) => { f.querySelector(`[data-e=${k}]`).textContent = t; return false; };
    let ok = true;
    if (!v.name.trim()) ok = er('name', 'اكتب اسم الدواء');
    if (!v.dosage.trim()) ok = er('dosage', 'اكتب الجرعة المكتوبة في الروشتة');
    if (v.end && v.end < v.start) ok = er('end', 'تاريخ الانتهاء لازم يكون بعد البدء');
    if (v.left === '' || +v.left < 0) ok = er('left', 'اكتب كمية صحيحة');
    if (!ok) return;
    const med = { id: id || uid(), name: v.name.trim(), dosage: v.dosage.trim(), time: v.time, start: v.start, end: v.end, left: +v.left, taken: m.taken || '' };
    const all = getMeds(); const i = all.findIndex((x) => x.id === med.id);
    i >= 0 ? (all[i] = med) : all.push(med);
    saveMeds(all); closeDlg(); renderMeds(); toast(id ? 'تم تعديل الدواء' : 'تمت إضافة الدواء');
  };
}

/* ================= المساعد (قواعد جاهزة) ================= */
const RULES = [
  { k: ['ضغط', 'قلب', 'خفقان', 'نهجان'], spec: 'قلب وأوعية دموية', t: 'مشاكل الضغط والقلب بيتابعها غالبًا طبيب قلب. لو عندك ألم شديد في الصدر أو ضيق تنفس مفاجئ اتصل بالإسعاف 123 فورًا.' },
  { k: ['جلد', 'حبوب', 'طفح', 'حكة', 'اكزيما', 'شعر'], spec: 'جلدية', t: 'المشاكل الجلدية بيتابعها طبيب جلدية. حاول تعرف إيه اللي بيزودها وماتجربش أدوية من غير استشارة.' },
  { k: ['سكر', 'معده', 'مغص', 'غدة', 'تعب عام'], spec: 'باطنة وسكر', t: 'الأعراض العامة والسكر والمعدة غالبًا بيتابعها طبيب باطنة.' },
  { k: ['عظام', 'ركبه', 'ظهر', 'كسر', 'مفصل', 'رقبه'], spec: 'عظام', t: 'آلام المفاصل والظهر بيتابعها طبيب عظام. لو في إصابة أو تورم شديد روح الطوارئ.' },
  { k: ['طفل', 'رضيع', 'تطعيم', 'ابني', 'بنتي'], spec: 'أطفال', t: 'للأطفال الأفضل تتابع مع طبيب أطفال، خصوصًا لو في حرارة عالية أو خمول.' },
  { k: ['عين', 'نظر', 'عيني', 'نظاره'], spec: 'عيون', t: 'مشاكل النظر والعين بيتابعها طبيب عيون.' },
  { k: ['صداع', 'دوخه', 'دوار'], spec: 'باطنة وسكر', t: 'الصداع والدوخة ليهم أسباب كتير. ابدأ بطبيب باطنة، ولو الصداع مفاجئ وشديد جدًا اطلب الطوارئ.' },
];
const SUGGEST = ['عندي ألم في الركبة', 'ضغطي مرتفع', 'طفلي عنده حرارة', 'عندي حكة في الجلد', 'ازاي أستخدم الملف الطبي؟'];
function addMsg(html, me) { const d = document.createElement('div'); d.className = 'msg ' + (me ? 'me' : 'bot'); d.innerHTML = html; const l = $('#chat-log'); l.append(d); l.scrollTop = l.scrollHeight; }
function reply(text) {
  const n = norm(text);
  if (/ملف|سجل/.test(n)) return 'من «الملف الطبي» تقدر تضيف حساسيتك وتقاريرك وتحاليلك وتبحث فيها. كله بيتحفظ على جهازك.';
  if (/دواء|ادويه|جرعه/.test(n)) return 'من «أدويتي» تقدر تضيف دواءك وتتابع الكمية. الجرعة بتكتبها زي ما كتبها الدكتور، أنا مش بقترح جرعات.';
  const r = RULES.find((x) => x.k.some((w) => n.includes(norm(w))));
  if (r) return `${esc(r.t)}\nالتخصص المقترح: <b>${esc(r.spec)}</b>\n<a href="#doctors" data-go-spec="${esc(r.spec)}">شوف أطباء ${esc(r.spec)}</a>\n<small>معلومة عامة وليست تشخيصًا.</small>`;
  return 'مش متأكد أفهم قصدك. ممكن توضح أكتر؟ أو شوف «دليل الأطباء» واختار التخصص المناسب. أنا بقدم معلومات عامة فقط.';
}
function ask(text) { if (!text.trim()) return; addMsg(esc(text), true); setTimeout(() => addMsg(text && reply(text).includes('<') ? reply(text) : esc(reply(text))), 350); }

/* ================= ربط الأحداث ================= */
function init() {
  buildNav();
  const specs = uniq(DOCTORS.map((d) => d.spec)), dcities = uniq(DOCTORS.map((d) => d.city));
  fillSelect($('#doc-spec'), 'كل التخصصات', specs); fillSelect($('#doc-city'), 'كل المدن', dcities);
  fillSelect($('#ph-city'), 'كل المدن', uniq(PHARMACIES.map((x) => x.city)));
  fillSelect($('#lab-city'), 'كل المدن', uniq(LABS.map((x) => x.city)));
  fillSelect($('#hos-city'), 'كل المدن', uniq(HOSPITALS.map((x) => x.city)));
  $('#rec-type').innerHTML = '<option value="">كل الأنواع</option>' + Object.entries(REC_TYPES).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');

  const rp = () => renderFacility($('#ph-list'), PHARMACIES, $('#ph-q').value, $('#ph-city').value, (x) => `<span class="badge">${esc(x.hours.split('(')[0])}</span>`);
  const rl = () => renderFacility($('#lab-list'), LABS, $('#lab-q').value, $('#lab-city').value, (x) => `<span class="badge">${x.tests.length} تحاليل رئيسية</span>`);
  const rh = () => renderFacility($('#hos-list'), HOSPITALS, $('#hos-q').value, $('#hos-city').value, (x) => `<span class="badge ${x.er ? 'ok' : ''}">${x.er ? 'طوارئ ٢٤ ساعة' : 'بدون طوارئ'}</span>`);
  ['#doc-q', '#doc-spec', '#doc-city', '#doc-rate'].forEach((s) => $(s).addEventListener('input', renderDoctors));
  ['#ph-q', '#ph-city'].forEach((s) => $(s).addEventListener('input', rp));
  ['#lab-q', '#lab-city'].forEach((s) => $(s).addEventListener('input', rl));
  ['#hos-q', '#hos-city'].forEach((s) => $(s).addEventListener('input', rh));
  ['#rec-q', '#rec-type'].forEach((s) => $(s).addEventListener('input', renderRecords));
  renderDoctors(); rp(); rl(); rh(); renderRecords(); renderMeds();

  $('#rec-add').onclick = () => recordForm();
  $('#med-add').onclick = () => medForm();

  document.addEventListener('click', (e) => {
    const t = e.target, c = (s) => t.closest(s);
    if (c('[data-doc]')) return doctorDetails(c('[data-doc]').dataset.doc);
    if (c('[data-fac]')) return facilityDetails(c('[data-fac]').dataset.fac);
    if (c('[data-rec-edit]')) return recordForm(c('[data-rec-edit]').dataset.recEdit);
    if (c('[data-rec-del]')) { const id = c('[data-rec-del]').dataset.recDel; return confirmDlg('هل تريد حذف هذا السجل؟', () => { store.set('records', getRecs().filter((r) => r.id !== id)); renderRecords(); toast('تم حذف السجل'); }); }
    if (c('[data-med-edit]')) return medForm(c('[data-med-edit]').dataset.medEdit);
    if (c('[data-med-del]')) { const id = c('[data-med-del]').dataset.medDel; return confirmDlg('هل تريد حذف هذا الدواء؟', () => { saveMeds(getMeds().filter((m) => m.id !== id)); renderMeds(); toast('تم حذف الدواء'); }); }
    if (c('[data-med-take]')) {
      const id = c('[data-med-take]').dataset.medTake, all = getMeds(), m = all.find((x) => x.id === id);
      if (m && m.left > 0) { m.left -= 1; m.taken = TODAY(); saveMeds(all); renderMeds(); toast(m.left <= LOW ? 'تم التسجيل. الكمية أصبحت قليلة' : 'تم تسجيل أخذ الدواء'); }
      return;
    }
    if (c('[data-go-spec]')) { $('#doc-spec').value = c('[data-go-spec]').dataset.goSpec; renderDoctors(); }
    if (c('[data-chip]')) ask(c('[data-chip]').dataset.chip);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('[data-doc],[data-fac]')) e.target.click();
  });

  $('#chips').innerHTML = SUGGEST.map((s) => `<button class="chip" type="button" data-chip="${esc(s)}">${esc(s)}</button>`).join('');
  addMsg('أهلاً بيك! أنا مساعد تجريبي. احكيلي الأعراض بشكل عام وأقترح عليك التخصص المناسب. مش بشخّص ولا بوصف علاج.');
  $('#chat-form').addEventListener('submit', (e) => { e.preventDefault(); const i = $('#chat-in'); ask(i.value); i.value = ''; });

  window.addEventListener('hashchange', route); route();
}
init();
