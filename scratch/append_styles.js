const fs = require('fs');

let css = fs.readFileSync('css/styles.css', 'utf8');

const cssToAdd = `
/* ─── HOJA DE RUTA EJECUTIVA: CONSIGNAS EN SLIDE 2 Y DRAWER ─── */
.avance-consigna-meta {
  display: flex;
  flex-direction: column;
  gap: 0.22rem;
  margin: 0.28rem 0;
  padding: 0.35rem 0.65rem;
  background: rgba(248, 250, 252, 0.95);
  border-radius: 5px;
  border-left: 2.5px solid var(--gold-border);
}

.consigna-line {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: clamp(0.72rem, 1vh, 0.8rem);
  line-height: 1.35;
}

.consigna-tag {
  font-family: var(--font-serif);
  font-size: clamp(0.68rem, 0.95vh, 0.74rem);
  font-weight: 600;
  color: var(--gold-main);
  letter-spacing: 0.04em;
  flex-shrink: 0;
  text-transform: uppercase;
}

.consigna-val {
  font-family: var(--font-body);
  font-weight: 400;
  color: #475569;
  font-size: clamp(0.74rem, 1.02vh, 0.82rem);
}

.avance-card-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.45rem;
  margin-top: 0.35rem;
  padding-top: 0.25rem;
  border-top: 1px dashed rgba(15, 23, 42, 0.06);
}

.btn-card-goto-avance,
.btn-card-open-consigna {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.22rem 0.55rem;
  border-radius: 4px;
  font-family: var(--font-serif);
  font-size: clamp(0.66rem, 0.9vh, 0.73rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-card-goto-avance {
  background: var(--gold-dim);
  color: var(--oxford-blue);
  border: 1px solid var(--gold-border);
}

.btn-card-goto-avance:hover {
  background: var(--gold-main);
  color: #ffffff;
  border-color: var(--gold-main);
}

.btn-card-open-consigna {
  background: #f8fafc;
  color: #475569;
  border: 1px solid #cbd5e1;
}

.btn-card-open-consigna:hover {
  background: #ffffff;
  color: var(--gold-main);
  border-color: var(--gold-main);
}

/* ─── PESTAÑA: CONSIGNAS PEDCO Y CÁTEDRA EN DRAWER ─── */
.consigna-header-box {
  background: linear-gradient(135deg, #0b1329 0%, #172554 100%);
  color: #ffffff;
  padding: 1.1rem 1.3rem;
  border-radius: 8px;
  margin-bottom: 1.1rem;
  border: 1px solid rgba(212, 175, 55, 0.45);
  box-shadow: 0 4px 18px rgba(11, 19, 41, 0.25);
}

.consigna-header-title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.consigna-total-badge {
  background: var(--gold-main);
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.15rem 0.55rem;
  border-radius: 12px;
}

.consigna-header-desc {
  font-size: 0.8rem;
  line-height: 1.45;
  color: #cbd5e1;
  margin: 0;
}

.ref-card.consigna-detail-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-top: 3.5px solid var(--gold-main);
  border-radius: 8px;
  padding: 1.1rem 1.25rem;
  margin-bottom: 1.1rem;
  box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.consigna-card-topbar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.consigna-card-chip {
  font-family: var(--font-serif);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--gold-dim);
  color: var(--gold-main);
  border: 1px solid var(--gold-border);
  letter-spacing: 0.06em;
}

.consigna-card-unidad {
  font-family: var(--font-serif);
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.consigna-card-title {
  font-family: var(--font-title);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--oxford-blue);
  margin: 0;
  line-height: 1.35;
}

.consigna-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.consigna-block-label {
  font-family: var(--font-serif);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--oxford-blue);
  letter-spacing: 0.03em;
}

.consigna-block-text {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 400;
  color: #334155;
  line-height: 1.48;
  margin: 0;
}

.consigna-checklist {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.consigna-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.81rem;
  line-height: 1.42;
  color: #334155;
}

.consigna-checklist .chk-icon {
  font-weight: 700;
  color: var(--gold-main);
  flex-shrink: 0;
  margin-top: 0.1rem;
  font-size: 0.82rem;
}

.consigna-block.answer-block {
  background: #fdfcf7;
  border: 1px solid var(--gold-border);
  border-radius: 6px;
  padding: 0.7rem 0.85rem;
  gap: 0.35rem;
}

.consigna-block.answer-block .consigna-block-label {
  color: #854d0e;
}

.consigna-answer-text {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 400;
  color: #1e293b;
  line-height: 1.5;
  margin: 0;
}

.consigna-card-actions {
  margin-top: 0.4rem;
  display: flex;
  justify-content: flex-end;
}

.btn-goto-consigna-slides {
  background: linear-gradient(135deg, var(--gold-dim) 0%, rgba(212, 175, 55, 0.25) 100%);
  border: 1px solid var(--gold-main);
  color: var(--oxford-blue);
  font-family: var(--font-serif);
  font-size: 0.76rem;
  font-weight: 700;
  padding: 0.5rem 0.85rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.05em;
}

.btn-goto-consigna-slides:hover {
  background: var(--gold-main);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(180, 131, 36, 0.25);
}
`;

if (!css.includes('PESTAÑA: CONSIGNAS PEDCO Y CÁTEDRA EN DRAWER')) {
  css += '\n' + cssToAdd;
  fs.writeFileSync('css/styles.css', css, 'utf8');
  console.log('✅ Appended consignas styles to css/styles.css');
} else {
  console.log('ℹ️ css/styles.css already has consignas styles');
}

